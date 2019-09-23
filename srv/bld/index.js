require("lzr");
var cookieSession = require("cookie-session");
var crypto = require("crypto");

// LZR 子模块加载
LZR.load([
	"LZR.Base.Json",
	"LZR.Node.Srv"
]);

// 文件位置
var curPath = require.resolve("./index.js");
curPath = curPath.substr(0, curPath.length - 12);

// 服务
var srv = new LZR.Node.Srv ({
	ip: process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0",
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080		// 对应阿里云服务nginx.conf文件配置的 80 端口
});
srv.ro.path = curPath;

// 工具
var tools = {
	dat: require("./dat.js"),	// 数据
	imgDat: [],	// 滚动相册数据
	menuDat: [],	// 菜单数据，主要用于头尾的创建

	utJson: LZR.getSingleton(LZR.Base.Json),

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

		// AES密钥
		o = new Buffer(tools.dat.ilib.ak, "base64");
		tools.dat.ilib.akiv = o.toString("binary", 0, 16);
		tools.dat.ilib.aksk = o.toString("binary");
	},

	// 整理路径参数
	url: function (dotNam, o, req) {
		o.url = {
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
		var t = srv.ro.getTmp(dotNam, o);
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

						// t = crypto.createCipher("aes256", tools.dat.ilib.ak);
						// var s = t.update("Hello", "utf8", "base64");
						// s += t.final("base64");
						// console.log (s);
						// t = crypto.createDecipher("aes256", tools.dat.ilib.ak);
						// s = t.update(s, "base64", "utf8");
						// s += t.final("utf8");
						// console.log(s);

						// t = crypto.createCipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
						// var s = t.update("Hello", "utf8", "base64");
						// s += t.final("base64");
						// console.log (s);
						// t = crypto.createDecipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
						// s = t.update(s, "base64", "utf8");
						// s += t.final("utf8");
						// console.log(s);

						/* 加解密参考资料 ：
							1. 密钥要转为"binary" ： https://stackoverflow.com/questions/7787773/encrypt-with-node-js-crypto-module-and-decrypt-with-java-in-android-app
							2. AES/CBC 要使用 createCipheriv ： https://blog.csdn.net/sbt0198/article/details/53791612
							3. 常用的 crypto加密 ： https://blog.csdn.net/halibote330/article/details/76170757
							4. Buffer转数值 ： https://blog.csdn.net/andybojue/article/details/41679483
							5. base64编码与解码 ： https://www.cnblogs.com/yudis/p/7065745.html
							6. base64编码与解码 ： https://www.jianshu.com/p/06d65720f16b
							7. express-jwt 基本用法 ： https://blog.csdn.net/qq_27818541/article/details/76656784
							8. cookie 和 session ： http://wiki.jikexueyuan.com/project/node-lessons/cookie-session.html
							9. cookie-session 的使用 ： https://blog.csdn.net/zhujun_xiaoxin/article/details/79090976
							10. cookie-session 的安装 ： https://www.cnblogs.com/sansancn/p/11012612.html
							11. express-session 的使用 ： https://www.jianshu.com/p/c8c77e81bd06
						*/

						// payload
						try {
							t = crypto.createDecipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
							var s = [];
							s.push(t.update(a[1], "base64"));
							s.push(t.final());
							s = Buffer.concat(s).toString("utf8", 8);
							s = s.substring(0, s.lastIndexOf("}") + 1);
							s = tools.utJson.toObj(s);
// console.log(s);
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
		payload += "1";
		if (new Buffer(payload, "utf8").length % 16 === 0) {
			// 数据长度不能等于16的整数倍
			body.childProjectTitle += " ";
			payload = "11111111";
			payload += tools.utJson.toJson(body);
			payload += "1";
		}
		t = crypto.createCipheriv("aes-256-cbc", tools.dat.ilib.aksk, tools.dat.ilib.akiv);
		r += ".";
		r += t.update(payload, "utf8", "base64");
		r += t.final("base64");

		t = crypto.createHmac("sha256", tools.dat.ilib.sk);
		t.update(r);
		signature = t.digest("base64");
		r += ".";
		r += signature;
		return encodeURIComponent(r);
	}
};
tools.initDat();	// 初始化数据

srv.so.use(cookieSession({
	name: "lzugw.cn",
	keys: ["lzugw'sPassword:18278362"],
	// maxAge: 24*60*60*1000 //24hours
	maxAge: 5000
}));

// 创建模板
srv.ro.crtTmp("tmp");

srv.ro.get("/", function (req, res, next) {
	if (req.query.token) {
		var u = tools.parseXjwt (req.query.token);
		if (u) {
			req.session.usr = u;
		}
		next();
	} else {
		next();
	}
});

// 首页
srv.ro.get("/index/", function (req, res, next) {
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
srv.ro.get("/home/:item/:sub?/", function (req, res, next) {
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
srv.ro.get("/ball/", function (req, res, next) {
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
srv.ro.get("/qa/:id/:file/", function (req, res, next) {
	// 权限检查
	var u = tools.getUsr(req, true);
	if (!u) {
		res.redirect(tools.dat.ilib.url);
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
		tools.url ("qa", o, req);
		tools.rtmp ("qa", o, res, next);
	} else {
		next();
	}
});

// 问答题2，在线限时答题页面
srv.ro.get("/qa2/:id/", function (req, res, next) {
	// 权限检查
	var u = tools.getUsr(req, true);
	if (!u) {
		res.redirect(tools.dat.ilib.url);
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
		tools.url ("qa2", o, req);
		tools.rtmp ("qa2", o, res, next);
	} else {
		next();
	}
});

// 资料下载
srv.ro.get("/dl/:id/", function (req, res, next) {
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
srv.ro.get("/pushILib/:score/", function (req, res, next) {
	var u = tools.getUsr(req);
	var p = req.params.score - 0;
	if (u && p >= 0) {
		var t = {
			username: u.un,
			projectTitle: tools.dat.nam,
			childProjectTitle: "接口测试",		// 为凑字数，此项必填
			status: 1,
			score: p,
			startDate: u.stim,
			endDate: Date.now(),
			// attachmentId: 12,
			issuerId: tools.dat.ilib.iid
		};
		t.timeUsed = Math.floor((t.endDate - t.startDate) / 1000 / 60);
		if (t.timeUsed <= 0) {	// timeUsed 必须大于 0
			t.timeUsed  = 1;
		}
		t = tools.tokenXjwt(t);
		res.send(t);
		// res.json(tools.parseXjwt(t));
		// res.json({ok:true});
		// todo : ajax http://202.205.145.156:8017/project/log/upload?xjwt=
	} else {
		res.json({ok:false});
	}
});

// 静态文件夹
srv.ro.setStaticDir("/", curPath + "web");

// 特殊 Flash 文件的跳转
srv.ro.get ("*/ClearOverNoVol.swf", function (req, res) {
	res.redirect("/v/swf/ClearOverNoVol.swf");
});

srv.start();
