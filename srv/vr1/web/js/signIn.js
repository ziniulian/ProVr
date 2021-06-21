function init () {
	LZR.load([
		"LZR.Base.Json",
		"LZR.HTML.Base.Ajax"
	]);
	dco.ajx = new LZR.HTML.Base.Ajax ();
	dco.utJson = LZR.getSingleton(LZR.Base.Json);
}

var dco = {
	rout: "",	// 根目录
	bcu: "/",	// 跳转链接
	ajx: null,	// ajax
	utJson: null,	// json

	run: function () {
		var u = dco.rout + "login/";
		if (usrDoe.value) {
			if (pswDoe.value) {
				memoDeo.innerHTML = "登录中，请稍候 ...";
				var o = dco.ajx.post(u, {u:usrDoe.value, p:pswDoe.value});
				o = dco.utJson.toObj(o);
				if (o.ok) {
					memoDeo.innerHTML = "登录成功！";
					location.href = dco.bcu;
				} else {
					memoDeo.innerHTML = o.msg;
				}
			} else {
				memoDeo.innerHTML = "密码不能为空！";
			}
		} else {
			memoDeo.innerHTML = "用户名不能为空！";
		}
	}
};
