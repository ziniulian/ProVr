// Flash 控制器
var fc = {
	flash: null,
	count: 0,	// 总帧数
	end: 0,
	np: [],		// 名称解析器 （name parser）

	// 加载swf文件 （load）
	ld: function (doe, url, np) {
		if (!url) {
			url = fc.gn(np);
		}
		fc.flash = document.createElement("embed");
		fc.flash.src = url;
		// doe.insertBefore(fc.flash, doe.childNodes[0]);
		doe.appendChild(fc.flash);
	},

	// 获取名称 （get name）
	gn: function (np) {
		var r = "";
		if (!np) {
			np = fc.np;
		}
		if (np.length) {
			var i, j, b = false, s = np[0].className;
			for (i = 1; i < np.length; i ++) {
				j = np[i];
				if (isNaN(j)) {
					r += j;
				} else {
					switch (j) {
						case -1:
							r += "/";
							b = false;
							break;
						case -2:
							r += ".";
							b = false;
							break;
						case -3:
							r += ":";
							b = false;
							break;
						default:
							if (j > 0) {
								if (b) {
									r += s.substr(b, j);
									b = false;
								} else {
									b = j;
								}
							}
							break;
					}
				}
			}
		}
		return r;
	},

	// 资源加载中
	loading: function () {
		if (fc.flash.PercentLoaded) {
			fc.flash.StopPlay();
			if (fc.flash.PercentLoaded() === 100) {
				fc.flash.Rewind();
				fc.count = fc.flash.TotalFrames();
// console.log(fc.count);
			}
		}
		if (fc.count === 0) {
			requestAnimationFrame(fc.loading);
		}
	},

	stop: function () {
		fc.flash.StopPlay();
		fc.end = 0;
	},

	autoPlay: function (s) {
		if (fc.count && (fc.end === 0)) {
			fc.jump(s);
			fc.flash.Play();
		}
	},

	play: function (s, e) {
		if (fc.count) {
			fc.stop();
			fc.jump(s);
			if (e) {
				if (e >= fc.count) {
					e = fc.count - 1;
				}
				if (e > s) {
					fc.end = e;
					fc.flash.Play();
					requestAnimationFrame(fc.playing);
				}
			}
		}
	},

	jump: function (p) {
		if (p >= 0) {
			if (p >= fc.count) {
				p = fc.count - 1;
			}
			fc.flash.GotoFrame(p);
		}
	},

	playing: function () {
		if (fc.end && fc.flash.IsPlaying() && (fc.flash.CurrentFrame() < fc.end)) {
// console.log(fc.flash.CurrentFrame());
			requestAnimationFrame(fc.playing);
		} else {
			fc.stop();
		}
	}
};
