var dco = {
	rout: "/",	// 根目录

	init: function (imgs) {
		var a = new tls.album();
		a.rout = dco.rout;
		a.showCss = "hom_team_p";
		a.hidCss = "hom_team_p hom_team_p0";
		a.init(albumDoe, 4, imgs);
		a.autoRoll(2000);
	}
};
