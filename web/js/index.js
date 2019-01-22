function init () {
	var a = new tls.album();
	a.showCss = "hom_team_p";
	a.hidCss = "hom_team_p hom_team_p0";
	a.init(albumDoe, 4, [
		{
			imgurl: "img/pic.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师8"
		},
		{
			imgurl: "img/tb1.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师1"
		},
		{
			imgurl: "img/tb2.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师2"
		},
		{
			imgurl: "img/tb3.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师3"
		},
		{
			imgurl: "img/tb4.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师4"
		},
		{
			imgurl: "img/tb5.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师5"
		},
		{
			imgurl: "img/tb6.png",
			tagurl: "s02/home.html?nam=服务团队&sub=老师6"
		}
	]);
	a.autoRoll(2000);
}
