function init () {
	dat.doe = markDoe;
}

// AS 调用的方法名
function cq (id) {
console.log("id = " + id);
	dat.show(id);
}

// AS 调用的方法名
function end (id) {
console.log("END : id = " + id);
	dat.total();
}

var dat = {
	doe: null,
	count: 0,	// 总分

	show: function (id) {
		choseDoe.className = "";
		exitDoe.className = "Lc_nosee";
		numDoe.innerHTML = id;
		dat.doe.className = "mark2 Lc_noselect";
	},

	ans: function (v) {
		dat.count += v;
		if (v) {
			resDoe.innerHTML = "回答正确！ （" + dat.count + " 分）";
		} else {
			resDoe.innerHTML = "回答错误！ （" + dat.count + " 分）";
		}
		choseDoe.className = "Lc_nosee";
		exitDoe.className = "";
	},

	total: function () {
		resDoe.innerHTML = "总分 ： " + dat.count;
		dat.doe.className = "mark2 Lc_noselect";
		dat.count = 0;
	},

	hid: function () {
		dat.doe.className = "Lc_nosee";
	}
};
