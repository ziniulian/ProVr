function init () {
	var a = new tls.album();
	a.showCss = "hom_team_p";
	a.hidCss = "hom_team_p hom_team_p0";
	a.init(albumDoe, 4, [
		"img/pic.png",
		"img/tb1.png",
		"img/tb2.png",
		"img/tb3.png",
		"img/tb4.png",
		"img/tb5.png",
		"img/tb6.png"
	]);
	a.autoRoll(2000);
}
