// 第二版项目，与第一版雷同，只是首页和头尾颜色不一样。
var crypto = require("crypto");

// 输出日志
var fs = require('fs');
var accessLogger = fs.createWriteStream('logs/access.log', { flags: 'a', encoding:'utf8' });

// 文件位置
var curPath = require.resolve("./index.js").replace("index.js", "");

// LZR 子模块加载
LZR.load([
	"LZR.Node.Db.NodeAjax",
	"LZR.Base.Json",
	"LZR.Node.Srv.Result"
]);

// 创建路由
var r = new LZR.Node.Router ({
	path: curPath
});

// 工具
var tools = {
	dat: require("./bld/dat.js"),	// 数据
	imgDat: [],	// 滚动相册数据
	menuDat: [],	// 菜单数据，主要用于头尾的创建

	utJson: LZR.getSingleton(LZR.Base.Json),
	ajax: new LZR.Node.Db.NodeAjax(),

	// 获取首页需要的数据
	initDat: function () {
		var i, s, o;

		// 菜单数据
		for (i = 0; i < tools.dat.menu.length; i ++) {
			o = {id: tools.dat.menu[i]};
			s = tools.dat.hom[o.id];
			o.nam = s.nam;
			if (s.a === undefined) {
				o.a = "home/" + tools.dat.menu[i] + "/";
			} else {
				o.a = s.a;
			}
			if (s.anm) {
				o.anm = s.anm;
			}
			if (s.tag) {
				o.tag = s.tag;
			}
			tools.menuDat.push(o);
		}

		// 滚动相册数据
		for (i = 0; i < tools.dat.hom.team.sub.length; i ++) {
			s = tools.dat.hom.team.sub[i];
			tools.imgDat.push({
				imgurl: s.img,
				tagurl: "home/team/" + i + "/"
			});
		}

		// 登录用密钥
		o = crypto.createHash("md5");
		o.update(tools.dat.ilib.nonce + tools.dat.ilib.cnonce + tools.dat.ilib.iid + tools.dat.ilib.sk);
		tools.dat.ilib.logk = o.digest("hex").toUpperCase();

		// ajax初始化
		tools.ajax.crtEvt ({
			token: tools.dat.ilib.host + "/open/api/v2/token?ticket=<0>&appid=<1>&signature=<2>",
			push: tools.dat.ilib.host + "/open/api/v2/data_upload?access_token=<0>",
			login: tools.dat.ilib.host + "/open/api/v2/user/validate?username=<0>&password=<1>&nonce=<2>&cnonce=<3>&appid=<4>&signature=<5>"
		});
		tools.ajax.evt.token.add(function (r, req, res, next) {
			var u = {}
			var o = tools.utJson.toObj(r);
			if (o.code === 0) {
				u.iid = tools.dat.ilib.iid,
				u.ak = o.access_token;
				u.un = o.un;	// 用户username
				u.dis = o.dis;	// 用户姓名显示
				u.stim = Date.now();
				req.session.usr = u;
			} else {
				req.session = null;
			}
			var o = {
				user: u,
				link: tools.dat.ilib.host + "/my/profile"
			};
			tools.url ("hom2", o, req);
			tools.rtmp ("hom2", o, res, next);
		});
		tools.ajax.evt.push.add(function (r, req, res, next) {
			if (r.indexOf("\"code\":0") > 0) {
				res.send("{\"ok\":true}");
			} else {
				res.send("{\"ok\":false, \"msg\":" + r + "}");
			}
		});
		tools.ajax.evt.login.add(function (r, req, res, next) {
			var o = tools.utJson.toObj(r);
			switch (o.code) {
				case 0:	// 登录成功
					req.session.usr = {
						iid: tools.dat.ilib.iid,
						ak: o.access_token,
						un: o.un,
						dis: o.dis,
						stim: Date.now()
					};
					accessLogger.write("登录成功 (" + (o.dis || o.un) +") : ");
					res.send("{\"ok\":true}");
					break;
				case 2:	// 密码错误
					res.send("{\"ok\":false, \"msg\":\"用户名或密码错误\"}");
					accessLogger.write("密码错误 : ");
					break;
				case 3:	// 用户名错误
					res.send("{\"ok\":false, \"msg\":\"用户名或密码错误.\"}");
					accessLogger.write("用户名错误 : ");
					break;
				case 4:	// 验证错误
					res.send("{\"ok\":false, \"msg\":\"登录失败\"}");
					accessLogger.write("验证错误 : ");
					break;
				default:
					res.send("{\"ok\":false, \"msg\":\"登录失败\"}");
					accessLogger.write("登录失败 : ");
					break;
			}
		});
	},

	// 整理路径参数
	url: function (dotNam, o, req) {
		o.url = {
			o: req.originalUrl,
			base: req.baseUrl,
			dot: dotNam
		};
		var n = req.baseUrl.indexOf("/" + dotNam);
		if (n > 0) {
			o.url.rout = req.baseUrl.substr(0, n + 1);
		} else {
			o.url.rout = req.baseUrl + "/";
			o.url.base = o.url.rout + dotNam;
		}
	},

	// 回传模板
	rtmp: function (dotNam, o, res, next) {
		// 返回模板
		var t = r.getTmp(dotNam, o);
		if (t) {
			res.send(t);
		} else {
			next();
		}
	},

	// 获取用户信息
	getUsr: function (req, ct) {
		// console.log(req.session.isChanged + " , " + req.session.isPopulated);
		if (req.session.usr && !req.session.isNew) {
			if (ct) {
				req.session.usr.stim = Date.now();
			}
			return req.session.usr;
		} else {
			return null;
		}
	},

	// XJWT解码
	parseXjwt: function (token) {
		var t, r = null;
		var a = decodeURIComponent(token).split(".");
		if (a && a.length === 3) {
			// signature
			t = crypto.createHmac("sha256", tools.dat.ilib.sk);
			t.update(a[0]);
			t.update(".");
			t.update(a[1]);
			if (t.digest("base64") === a[2]) {
				t = new Buffer(a[0], "base64");	// header
				if (t.length === 17) {
					if ((t.readUInt32BE(0) * 0x100000000 + t.readUInt32BE(4)) > Date.now()) {
						r = {
							// typ: t[8],
							iid: (t.readUInt32BE(9) * 0x100000000 + t.readUInt32BE(13))	// issuerId : 接入平台编号。由“实验空间”分配给实验教学项目的编号
						};

						// payload
						try {
							t = crypto.createDecipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
							var s = [];
							s.push(t.update(a[1], "base64"));
							s.push(t["final"]());
							s = Buffer.concat(s).toString("utf8", 8);
							s = s.substring(0, s.lastIndexOf("}") + 1);
							s = tools.utJson.toObj(s);

							r.uid = s.id;	// 用户id
							r.un = s.un;	// 用户username
							r.dis = s.dis;	// 用户姓名显示
							r.stim = Date.now();
						} catch (e) {
							// console.log ("parseXjwt : payload AES 解析失败");
							r = null;
						}
					} else {
						// console.log ("parseXjwt : header expiry 时效过期");
					}
				} else {
					// console.log ("parseXjwt : header 长度不一致");
				}
			} else {
				// console.log ("parseXjwt : signature 验证失败");
			}
		} else {
			// console.log ("parseXjwt : 2点不一致");
		}
		return r;
	},

	// 生成 XJWT token
	tokenXjwt: function (body) {
		var a, r;
		var header = new Buffer(17), payload = [], signature, t;
		t = Date.now() + 200000;
		header.writeUInt32BE(Math.floor(t / 0x100000000), 0);
		header.writeUInt32BE(t % 0x100000000, 4);
		header.writeUInt8(2, 8);
		t = tools.dat.ilib.iid;
		header.writeUInt32BE(Math.floor(t / 0x100000000), 9);
		header.writeUInt32BE(t % 0x100000000, 13);
		r = header.toString("base64");

		payload = "11111111";
		payload += tools.utJson.toJson(body);
		payload += "1";	// 缺少一个字符，实验平台服务端解析数据会失败。
		if (new Buffer(payload, "utf8").length % 16 === 0) {
			// 数据长度不能等于16的整数倍，否则实验平台服务端解析数据会失败。
			body.childProjectTitle += " ";
			payload = "11111111";
			payload += tools.utJson.toJson(body);
			payload += "1";
		}
		t = crypto.createCipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
		r += ".";
		r += t.update(payload, "utf8", "base64");
		r += t["final"]("base64");

		t = crypto.createHmac("sha256", tools.dat.ilib.sk);
		t.update(r);
		signature = t.digest("base64");
		r += ".";
		r += signature;
		return encodeURIComponent(r);
	}
};
tools.initDat();	// 初始化数据

// 创建模板
r.crtTmp("tmp");

r.get("/", function (req, res, next) {
	if (req.query.ticket) {
		var s, o = crypto.createHash("md5");
		o.update(req.query.ticket + tools.dat.ilib.iid + tools.dat.ilib.sk);
		s = o.digest("hex").toUpperCase();
		tools.ajax.qry("token", req, res, null, [encodeURIComponent(req.query.ticket), tools.dat.ilib.iid, s]);
	} else {
		var o = {
			user: req.session ? (req.session.usr || {}) : {},
			link: tools.dat.ilib.host + "/my/profile"
		};
		tools.url ("hom2", o, req);
		tools.rtmp ("hom2", o, res, next);
	}
});

// 首页
r.get("/index/", function (req, res, next) {
	var o = {
		user: {},
		dat: {
			nam: tools.dat.nam,	// 网站名称
			menu: tools.menuDat,	// 菜单
			hom: tools.dat.hom,	// 首页数据
			img: tools.imgDat	// 相册数据
		},
		// scd: "home",	// 菜单选中项
		utJson: tools.utJson	// JSON工具
	};

	tools.url ("index", o, req);
	tools.rtmp ("index", o, res, next);
});

// 分页
r.get("/home/:item/:sub?/", function (req, res, next) {
	var d = tools.dat.hom[req.params.item];

	if (d) {
		var o = {
			user: {},	// 用户信息，以后以后改用post进行数据接收
			dat: {
				nam: tools.dat.nam,
				menu: tools.menuDat,	// 菜单
				hom: tools.dat.hom,	// 首页数据
				itm: d	// 数据
			},
			scd: req.params.item,
			title: d.nam
		};
		tools.url ("index", o, req);
		if (d.sub) {
			o.si = req.params.sub ? req.params.sub - 0 : 0;
			d = d.sub[o.si];
			if (!d) {
				next();
				return;
			}
			o.title += "_" + d.nam;
		}

		o.nam = d.nam;
		if (d.img) {
			o.txt = "<div class=\"ohm_pic\" style=\"background-image:url(" + o.url.rout + d.img + ");\"></div><br/><div>" + d.nam + "</div><br/><div class=\"ohm_team_txt\">" + d.txt + "</div>";
		} else {
			o.txt = d.txt;
		}

		tools.rtmp ("home", o, res, next);
	} else {
		next();
	}
});

// 全景图
r.get("/ball/", function (req, res, next) {
	var o = {
		user: {},	// 用户信息，以后以后改用post进行数据接收
		dat: {
			nam: tools.dat.nam,
			ball: tools.dat.ball
		}
	};

	tools.url ("ball", o, req);
	tools.rtmp ("ball", o, res, next);
});

// 问答题
r.get("/qa/:id/:file/", function (req, res, next) {
	// 权限检查
	var u = tools.getUsr(req, true);
	if (!u) {
		req.session = null;
		res.redirect(req.baseUrl + "/signIn/?bcu=" + encodeURIComponent(req.originalUrl));
		return;
	}

	var d = tools.dat.qa[req.params.id];
	if (d) {
		d.file = req.params.file + ".swf";
		var o = {
			user: u,	// 用户信息，以后以后改用post进行数据接收
			dat: {
				nam: tools.dat.nam,
				qa: d
			},
			utJson: tools.utJson	// JSON工具
		};
		accessLogger.write("---- " + (u.dis || u.un) + ", 开始虚拟实验, " + req.originalUrl + " : ");
		tools.url ("qa", o, req);
		tools.rtmp ("qa", o, res, next);
	} else {
		next();
	}
});

// 问答题2，在线限时答题页面
r.get("/qa2/:id/", function (req, res, next) {
	// 权限检查
	var u = tools.getUsr(req, true);
	if (!u) {
		req.session = null;
		res.redirect(req.baseUrl + "/signIn/?bcu=" + encodeURIComponent(req.originalUrl));
		return;
	}

	var d = tools.dat.qa[req.params.id];
	if (d) {
		// todo: 若题型有多种，则需对 单选、多选、问答题等进行分组整理。目前暂时只有单选题，故暂不做调整。
		var o = {
			user: u,	// 用户信息，以后改用post进行数据接收
			dat: {
				nam: tools.dat.nam,
				qa: d
			},
			utJson: tools.utJson	// JSON工具
		};
		accessLogger.write("---- " + (u.dis || u.un) + ", 开始在线答题 : ");
		tools.url ("qa2", o, req);
		tools.rtmp ("qa2", o, res, next);
	} else {
		next();
	}
});

// 资料下载
r.get("/dl/:id/", function (req, res, next) {
	var d = tools.dat.dl[req.params.id];
	if (d) {
		var o = {
			user: {},	// 用户信息，以后改用post进行数据接收
			dat: {
				nam: tools.dat.nam,
				dl: d
			}
		};
		tools.url ("dl", o, req);
		tools.rtmp ("dl", o, res, next);
	} else {
		next();
	}
});

// 上传考试成绩
r.post("/pushILib/:score/", function (req, res, next) {
	var u = tools.getUsr(req);
	var p = req.params.score - 0;
	if (u && u.ak && p >= 0) {
		var t = Date.now();
		var tu = Math.floor((t - u.stim) / 1000 );	// timeUsed 必须大于 0
		if (tu < 1) {
			tu = 1;
		}
		var o = {
			username: u.un,
			title: tools.dat.ilib.nam,
			status: (p < 60) ? 2 : 1,
			score: p,
			startTime: u.stim,
			endTime: t,
			timeUsed: tu,
			appid: tools.dat.ilib.iid,
			originId: "LZR_VR1_" + t,
			steps: []
		};
		for (var i = 1; i < 12; i ++) {
			o.steps.push({
				seq: i,
				title: "步骤" + i,
				startTime: u.stim,
				endTime: t,
				timeUsed: tu,
				expectTime: 0,
				maxScore: 10,
				score: 0,
				repeatCount: 1,
				evaluation:"--",
				scoringModel:"--",
				remarks:"--"
			});
		}
		accessLogger.write("---- " + (u.dis || u.un) + ", 提交考试成绩, LZR_VR1_" + t + ", " + p + " : ");
		tools.ajax.qry("push", null, res, null, [encodeURIComponent(u.ak)], o, "json");
	} else {
		res.send("{\"ok\":false}");
	}
});

// 登出
r.get("/signOut/", function (req, res, next) {
	var u = tools.getUsr(req);
	if (u) {
		accessLogger.write("---- " + (u.dis || u.un) + ", 退出, 成功 : ");
	}
	req.session = null;
	var bcu = req.query.bcu || (req.baseUrl + "/");
	res.redirect(bcu);
});

// 登录检查
r.post("/login/", function (req, res, next) {
	var p, ru, rp, hash = crypto.createHash("sha256");
	if (!req.body.t) {
		res.send("{\"ok\":false, \"msg\":\"传参错误\"}");
		return;
	}
	p = tools.utJson.toSeObj(req.body.t);
	if (!p.t || (Date.now() - p.t) > 10000) {
		res.send("{\"ok\":false, \"msg\":\"传参错误\"}");
		return;
	}
	ru = p.u;
	rp = p.p;
	if (!ru || !rp) {
		res.send("{\"ok\":false, \"msg\":\"用户名和密码不能为空\"}");
		return;
	} else if (ru === "logMg" && rp === "2020LogMg-_") {
		req.session.usr = {
			iid: tools.dat.ilib.iid,
			un: "logMg",
			dis: "日志管理",
			stim: Date.now()
		};
		accessLogger.write("---- " + ru + ", 登录, 登录成功 (日志管理)  : ");
		res.send("{\"ok\":true}");
		return;
	}
	hash.update(rp);
	p = hash.digest("hex").toUpperCase();
	hash = crypto.createHash("sha256");
	hash.update(tools.dat.ilib.nonce);
	hash.update(p);
	hash.update(tools.dat.ilib.cnonce);
	p = hash.digest("hex").toUpperCase();
	accessLogger.write("---- " + ru + ", 登录, ");
	tools.ajax.qry("login", req, res, null, [ru, p, tools.dat.ilib.nonce, tools.dat.ilib.cnonce, tools.dat.ilib.iid, tools.dat.ilib.logk]);
});

// 登录
r.get("/signIn/", function (req, res, next) {
	var bcu = req.query.bcu || (req.baseUrl + "/");
	var u = tools.getUsr(req);
	if (u) {
		res.redirect(bcu);
	} else {
		var o = {
			bcu: bcu,
			ilib: tools.dat.ilib.host,
			link: tools.dat.ilib.host + "/login?ref=" + encodeURIComponent(tools.dat.ilib.url)
		};
		tools.url ("signIn", o, req);
		tools.rtmp ("signIn", o, res, next);
	}
});

// 日志
r.get("/log/", function (req, res) {
	var u = tools.getUsr(req);
	if (u) {
		if (u.un === "logMg" && u.dis === "日志管理") {
			accessLogger.write("---- " + (u.dis || u.un) + ", 下载日志 : ");
			res.header("Content-type", "application/octet-stream");
			res.sendFile("access.log", {
				root: "./logs/"
			});
		} else {
			res.redirect(req.baseUrl + "/");
		}
	} else {
		req.session = null;
		res.redirect(req.baseUrl + "/signIn/?bcu=" + encodeURIComponent(req.originalUrl));
		return;
	}
});

// LZR库文件访问服务
r.setStaticDir("/myLib/", LZR.curPath);

// 静态文件夹
r.setStaticDir("/", curPath + "web");

// 特殊 Flash 文件的跳转
r.get ("*/ClearOverNoVol.swf", function (req, res) {
	res.redirect(req.baseUrl + "/v/swf/ClearOverNoVol.swf");
});

module.exports = r;
