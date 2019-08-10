function init () {
	dco.doe = tDoe;
	dco.feo = fDoe;
	dco.doeQ = qDoe;
	dco.doeA = aDoe;
	dco.doeB = btnDoe;
	dco.doeR = rDoe;
	dco.doeL = loaDoe;
	dco.rout = tls.rout;
	dco.path = dco.rout + dco.path;
	dco.loading();
}

// AS 调用的方法名
function cq (id) {
console.log("id = " + id);
	dco.show(id);
}

// AS 调用的方法名
function end () {
console.log("END");
	dco.total();
}

// AS 调用的方法名
function url () {
console.log("url");
	return dco.path;
}

var dco = {
	dat: null,	// 数据
	rout: "",	// 根目录
	path: "",	// swf文件路径
	feo: null,	// Flash对象
	doeL: null,	// Loading ...
	cq: null,	// 当前的问题
	doe: null,	// 问答页面
	doeQ: null,	// 问题容器
	doeA: null,	// 选项容器
	doeB: null,	// 按钮容器
	doeR: null,	// 结果容器
	count: 0,	// 总分

	// 资源加载中
	loading: function () {
		if (dco.feo.PercentLoaded) {
			var p = dco.feo.PercentLoaded();
			if (p && p === 100) {
				dco.doeL.className = "Lc_nosee";
			} else {
				dco.doeL.innerHTML = p + " %";
				requestAnimationFrame(dco.loading);
			}
		} else {
			requestAnimationFrame(dco.loading);
		}
	},

	// 显示问答题
	show: function (id) {
		var i, d, q = dco.dat[id];
		if (q) {
			dco.cq = q;
			q.id = id;	// 问题ID
			q.ua = [];	// 用户选择的答案
			q.uv = 0;	// 用户此题的实际得分
			q.ue = true;	// 用户可否作答

			// 填充内容
			dco.doeQ.innerHTML = q.q;
			dco.doeA.innerHTML = "";
			dco.doeR.innerHTML = "";
			for (i = 0; i < q.o.length; i ++) {
				d = document.createElement("div");
				d.className = "qa_a bfs";
				d.innerHTML = q.o[i];
				d.onclick = tls.bind(d, dco.ans, i);
				q.ua[i] = {
					a: false,	// 用户选择的答案
					doe: d,		// 选项容器
					r: false	// 正确答案
				};
				dco.doeA.appendChild(d);
			}
			for (i = 0; i < q.a.length; i ++) {
				q.ua[q.a[i]].r = true;	// 设置正确答案
			}

			// 根据不同类型 显示或隐藏按钮
			if (q.typ === 1) {
				dco.doeB.className = "qa_btn bfs";
				dco.doeB.onclick = dco.subm;
			} else {
				dco.doeB.className = "Lc_nosee";
			}

			dco.doe.className = "qa_bg Lc_noselect";
		}
	},

	// 作答
	ans: function (i) {
		if (dco.cq.ue) {
			var a = dco.cq.ua[i];
			a.a = !a.a;
			if (a.a) {
				a.doe.className = "qa_a bfs qa_a_scd";
				if (dco.cq.typ === 0) {
					dco.subm();	// 单选题直接提交
				}
			} else {
				a.doe.className = "qa_a bfs";
			}
		}
	},

	// 提交答案
	subm: function () {
		var i, b = true, a = dco.cq.ua;
		for (i = 0; i < dco.cq.ua.length; i ++) {
			if (b && a[i].a !== a[i].r) {
				b = false;
			}
			if (a[i].r) {
				a[i].doe.className += " qa_a_right";
			}
		}
		if (b) {
			dco.count += dco.cq.v;
			dco.cq.uv = dco.cq.v;
			dco.doeR.innerHTML = "回答正确！ （目前总得分 ： " + dco.count + "分）";
		} else {
			dco.doeR.innerHTML = "回答错误！ （目前总得分 ： " + dco.count + "分）";
		}
		dco.cq.ue = false;

		// 显示按钮
		dco.doeB.className = "qa_btn bfs";
		dco.doeB.onclick = dco.hid;
	},

	// 隐藏问答页面
	hid: function () {
		dco.doe.className = "Lc_nosee";
		dco.feo.Play();
	},

	// 输出得分情况
	total: function () {
		var s, c = 0;
		for (s in dco.dat) {
			c += dco.dat[s].uv;
		}

		dco.doeQ.innerHTML = "总分 ： " + dco.count;
		dco.doeA.innerHTML = "";
		dco.doeR.innerHTML = "";
		dco.doe.className = "qa_bg Lc_noselect";
	}
};
