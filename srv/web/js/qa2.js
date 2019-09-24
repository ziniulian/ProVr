function init () {
	dco.timDoe = timeDoe;
	dco.hedDoe = headDoe;
	dco.fDoe = flotDoe;
	dco.rDoe.btn = r_btnDoe;
	dco.rDoe.timTxt = r_timTxtDoe;

	LZR.load([
		"LZR.Base.Json",
		"LZR.HTML.Base.Ajax"
	]);
	dco.ajx = new LZR.HTML.Base.Ajax ();

	window.onscroll = dco.flot;
	dco.flot();
	dco.runTim(dco.dat.tim);
}

var dco = {
	tim: 0,	// 倒计时
	tid: 0,
	dat: null,	// 数据
	rout: "",	// 根目录
	r: 0,		// 总分
	rt: 0,		// 总用时
	timDoe: null,	// 显示时间
	hedDoe: null,	// 页首
	fDoe: null,	// 浮动窗
	ajx: null,	// ajax
	rDoe: {		// 与结果显示相关的容器
		btn: null,	// 按钮
		timTxt: null	// 显示结果时需频闭掉的剩余时间提示
	},

	// 智能浮动
	flot: function () {
		var t = document.documentElement.scrollTop;	// 窗口滚动位置
		var h = dco.hedDoe.clientHeight;	// 页首高度
		if (t < h) {
			dco.fDoe.style.top = (h - t + 20) + "px";
		} else {
			dco.fDoe.style.top = "";
		}
	},

	// 计时
	runTim: function (t) {
		if (dco.tid) {
			dco.tim --;
		} else if (t) {
			dco.tim = t * 60;
			dco.tid = setInterval (dco.runTim, 1000);
		}

		if (dco.tim === 0) {
			dco.total();
		} else {
			var m = dco.tim / 60;
			var s = dco.tim % 60;
			dco.timDoe.innerHTML = Math.floor(m) + "分" + s + "秒";
		}
	},

	// 作答
	ans: function (id, i, r) {
		var q = dco.dat.sub[id];
		switch (q.typ) {
			case 0:
				if (!q.ua) {
					document.getElementById("qidbtn" + id).className += " qa2_qided";
					q.ua = [i];
				} else {
					q.ua[0] = i;
				}
				if (i === q.a[0]) {
					q.uv = q.v;
				} else {
					q.uv = 0;
				}
				break;
			// todo: 暂未对其它类型进行处理
		}
	},

	// 输出得分情况
	total: function () {
		if (!dco.r && !dco.rt) {
			var i, s, d, o;

			// 停止倒计时
			if (dco.tid) {
				clearInterval(dco.tid);
				dco.tid = 0;
				dco.rt = dco.dat.tim * 60 - dco.tim;
			}

			// 关闭所有选择按钮
			s = document.getElementsByTagName("input");
			for (i = 0; i < s.length; i ++) {
				s[i].disabled = true;
			}

			dco.r = 0;
			for (s in dco.dat.sub) {
				o = dco.dat.sub[s];
				d = "qor" + s + "_";
				for (i = 0; i < o.a.length; i ++) {
					document.getElementById(d + o.a[i]).className = "qa2_right";	// 标注正确答案
				}
				dco.r += o.uv || 0;	// 计算总分
			}

			dco.rDoe.btn.className = "Lc_nosee";	// 关闭提交按钮
			dco.rDoe.timTxt.innerHTML = "";	// 关闭剩余时间
			dco.timDoe.innerHTML = "得分：" + dco.r ;		// 显示总分
			dco.ajx.get(dco.rout + "pushILib/" + dco.r, true);	// 上传分数
		}
	}
};
