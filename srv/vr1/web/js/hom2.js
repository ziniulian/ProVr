var dco = {
	emb: null,	// 视频对象

	hid: function () {
		vDoe.className = "Lc_nosee";
		tls.hidFlv(dco.emb);
		dco.emb = null;
	},

	show: function (file) {
		if (dco.emb) {
			tls.hidFlv(dco.emb);
		}
		vDoe.className = "hom2_vdOut midOut";
		dco.emb = tls.showFlv(videoDoe, file, true, true, {
			width: "100%",
			height: "100%"
		});
	}
};
