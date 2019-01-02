function init () {
	dat.doe = markDoe;
}

// AS 调用的方法名
function cq (id) {
	dat.show(id);
}

var dat = {
	doe: null,

	show: function (id) {
		dat.doe.className = "mark2 Lc_noselect";
	},

	ans: function (v) {
		if (v) {
			resDoe.innerHTML = "回答正确！";
		} else {
			resDoe.innerHTML = "回答错误！";
		}
		choseDoe.className = "Lc_nosee";
		exitDoe.className = "";
	},

	hid: function () {
		dat.doe.className = "Lc_nosee";
	}
};
