require("lzr");

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
	ip: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
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
	}
};
tools.initDat();	// 初始化数据

// 创建模板
srv.ro.crtTmp("tmp");

// 首页
srv.ro.get("/index/", function (req, res, next) {
	var o = {
		user: {	// 用户信息，以后调用接口时会用到
			iid: "I001",	// 由“实验空间”分配给各实验平台的唯一编号
			uid: "U001",	// 用户id
			un: "nam001",	// 用户username
			dis: "Lzr"	// 用户姓名显示
		},
		dat: {
			menu: tools.menuDat,	// 菜单
			hom: tools.dat.hom,	// 首页数据
			img: tools.imgDat	// 相册数据
		},
		scd: "home",	// 菜单选中项
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
			ball: tools.dat.ball
		}
	};

	tools.url ("ball", o, req);
	tools.rtmp ("ball", o, res, next);
});

// 问答题
srv.ro.get("/qa/:id/:file/", function (req, res, next) {
	var d = tools.dat.qa[req.params.id];
	if (d) {
		d.file = req.params.file + ".swf";
		var o = {
			user: {},	// 用户信息，以后以后改用post进行数据接收
			dat: d,
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
	var d = tools.dat.qa[req.params.id];
	if (d) {
		// todo: 若题型有多种，则需对 单选、多选、问答题等进行分组整理。目前暂时只有单选题，故暂不做调整。
		var o = {
			user: {},	// 用户信息，以后改用post进行数据接收
			dat: d,
			utJson: tools.utJson	// JSON工具
		};
		tools.url ("qa2", o, req);
		tools.rtmp ("qa2", o, res, next);
	} else {
		next();
	}
});

// 静态文件夹
srv.ro.setStaticDir("/", curPath + "web");

// 异常处理
srv.use("*", function (req, res) {
	res.status(404).send("404!");
});

srv.start();
