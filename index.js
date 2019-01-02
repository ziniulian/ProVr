require("lzr");
LZR.load(["LZR.Node.Srv"]);

var srv = new LZR.Node.Srv ({
	ip: process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0",
	port: process.env.OPENSHIFT_NODEJS_PORT || 80
});

srv.ro.setStaticDir("/", "./web");
srv.use("*", function (req, res) {
	res.status(404).send("404!");
});

srv.start();
console.log("server start " + srv.ip + ":" + srv.port);
