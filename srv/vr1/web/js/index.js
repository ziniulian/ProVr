var dco = {
	emb: null,	// 视频对象
	vs: ["b.flv", "c.flv"],		// 视频集合
	cvi: 1,
	imgs: null,	// 相册数据

	init: function () {
		// 启动相册
		var a = new tls.album();
		a.showCss = "hom_team_p";
		a.hidCss = "hom_team_p hom_team_p0";
		a.init(albumDoe, 4, dco.imgs);
		a.autoRoll(2000);

		// 加载视频
		dco.loadFlv(0);
	},

	// 加载视频
	loadFlv: function (vi) {
		if (vi != dco.cvi && dco.vs[vi]) {
			document.getElementById("vbtnDoe_" + dco.cvi).className = "bal_btn sfs";
			if (dco.emb) {
				tls.hidFlv(dco.emb);
			}
			dco.cvi = vi;
			document.getElementById("vbtnDoe_" + vi).className = "bal_btn sfs bal_btn_scd";	// "hom_v_chg_btn hom_v_chg_btn_scd"
			dco.emb = tls.showFlv(videoDoe, dco.vs[vi], true, true, {
				width: "100%",
				height: "100%"
			});
		}
	}
};
