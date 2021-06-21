require("lzr");
var cookieSession = require("cookie-session");
var bodyParser = require('body-parser');	// post 参数插件
var logger = require('morgan');		// 日志插件
var crypto = require("crypto");

// LZR 子模块加载
LZR.load([
	"LZR.Node.Db.NodeAjax",
	"LZR.Base.Json",
	"LZR.Node.Srv"
]);

// 文件位置
var curPath = require.resolve("./index.js").replace("index.js", "");

// 服务
var srv = new LZR.Node.Srv ({
	ip: "0.0.0.0",
	port: 80
});
srv.ro.path = curPath;

srv.so.use(cookieSession({
	name: "lzugw.cn",
	keys: ["lzugw'sPassword:18278362"],
	maxAge: 8*3600000 // 8小时
}));

// 接收 post 请求体
srv.so.use(bodyParser.json());
srv.so.use(bodyParser.urlencoded({ extended: true }));

// 输出日志
var fs = require('fs');
var accessLogger = fs.createWriteStream('logs/access.log', { flags: 'a' });
// srv.so.use(logger('dev'));	// 控制台输出
srv.so.use(logger({ stream: accessLogger }));

// https跳转
// srv.ro.get("*", function (req, res, next) {
// 	if(req.protocol === 'https') {
// 		next();
// 	} else {
// 		res.redirect("https://" + req.headers.host + req.originalUrl);
// 	}
// });

srv.ro.get("/", function (req, res, next) {
	res.redirect(req.baseUrl + "/Vr1/");
});

// 项目1
srv.use("/Vr1/", require("./vr1"));

// 项目2
srv.use("/Vr2/", require("./vr2"));

srv.ro.setStaticDir("/myLib/", LZR.curPath);

srv.use("*", function (req, res) {
	res.status(404).send("--- 404 ---");
});

srv.start();
console.log("服务已启动 ： " + srv.ip + ":" + srv.port);
