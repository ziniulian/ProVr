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

// 常用工具
var tls = {
	rout: "",	// 根目录
	flashPlayerUrl: "v/flvplayer.swf",	// Flash播放器路径

	// 全屏
	fullScreen: function (doe){
		var isFullscreen=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;
		if(!isFullscreen){	//进入全屏,多重短路表达式
			(doe.requestFullscreen&&doe.requestFullscreen())||
			(doe.mozRequestFullScreen&&doe.mozRequestFullScreen())||
			(doe.webkitRequestFullscreen&&doe.webkitRequestFullscreen())||
			(doe.msRequestFullscreen&&doe.msRequestFullscreen());
		}else{	//退出全屏,三目运算符
			document.exitFullscreen?document.exitFullscreen():
			document.mozCancelFullScreen?document.mozCancelFullScreen():
			document.webkitExitFullscreen?document.webkitExitFullscreen():isNaN();
		}
	},
	toggleFullScreen: function (btn, doe){
		btn.innerHTML==="全屏"?btn.innerHTML="退出全屏":btn.innerHTML="全屏";
		tls.fullScreen(doe);
	},

	// 闭包调用
	bind: function (self/*as:Object*/, fun/*as:fun*/, args/*as:___*/)/*as:fun*/ {
		var arg = Array.prototype.slice.call(arguments, 2);
		return function () {
			var i, args = [];
			for ( i=0; i<arg.length; i++ ) {
				args.push ( arg[i] );
			}
			for ( i=0; i<arguments.length; i++ ) {
				args.push ( arguments[i] );
			}
			return fun.apply ( self, args );
		};
	},

	// 播放FLV视频
	showFlv: function (doe, file, autoPlay, ctnue, o) {
		if (!o) {
			o = {};
		}
		o.type = "application/x-shockwave-flash";
		o.allowfullscreen = "true";
		o.quality = "high";
		o.pluginspage = "http://www.macromedia.com/go/getflashplayer";
		o.FlashVars = "vcastr_file=" + file;	// 此文件路径是相对于 Flash 播放器的相对路径
		if (autoPlay) {	// 自动播放
			o.FlashVars += "&IsAutoPlay=1";
		}
		if (ctnue) {	// 循环播放
			o.FlashVars += "&IsContinue=1";
		}

		var e = tls.crtFlash(tls.flashPlayerUrl, o);
		doe.appendChild(e);
		return e;
	},

	// 关闭FLV视频
	hidFlv: function (e) {
		e.parentNode.removeChild(e);
	},

	// 创建Flash对象
	crtFlash: function (file, o) {
		var e = document.createElement("embed");
		e.src = tls.rout + file;
		if (o) {
			for (var s in o) {
				e.setAttribute (s, o[s]);
			}
		}
		return e;
	},

	// 滚动相册
	album: function () {
		this.timid = 0;
		this.num = 0;		// 相册可见个数
		this.imgs = [];	// 图片路径
		this.showCss = "";
		this.hidCss = "";
		this.pDoe = null;	// 父容器
		this.p = 0;	// 指针
		this.ds = [];
		this.rollTim = 0;	// 滚动间隔
		this.aTim = 500;	// 动画间隔
		this.rout = tls.rout;	// 根目录

		// 初始化
		this.init = function (doe, n, ps) {
			if (n && this.num === 0) {
				this.pDoe = doe;
				this.num = n;
				this.imgs = ps;
				this.p = 0;
				this.exeChgImg = tls.bind(this, this.chgImg);
				this.exeRoll = tls.bind(this, this.roll);
				var i, d;
				for (i = 0; i <= n; i ++) {
					d = this.crtOne(ps[i], i);
					this.ds.push(d);
					doe.appendChild(d);
				}
			}
		};

		// 创建元素
		this.crtOne = function (pic, i) {
			var d = document.createElement("a");
			d.className = this.showCss;
			if (pic) {
				d.style.backgroundImage = "url(\"" + this.rout + pic.imgurl + "\")";
				if (pic.tagurl) {
					d.href = this.rout + pic.tagurl;
				}
			}
			return d;
		};

		// 滚动
		this.roll = function () {
			clearTimeout(this.timid);
			if (this.imgs.length > this.num) {
				this.ds[0].className = this.hidCss;
				var self = this;
				setTimeout(this.exeChgImg, this.aTim);
			}
		};

		// 换图片
		this.chgImg = function () {
			var i, j, n, m;
			j = this.p;
			n = this.imgs.length;
			this.p ++;
			if (this.p >= n) {
				this.p = 0;
			}
			for (var i = 0; i <= this.num; i ++) {
				j ++;
				if (j >= n) {
					j = 0;
				}
				m = this.imgs[j];
				this.ds[i].style.backgroundImage = "url(\"" + this.rout + m.imgurl + "\")";
				if (m.tagurl) {
					this.ds[i].href = this.rout + m.tagurl;
				} else {
					this.ds[i].href = "";
				}
			}
			this.ds[0].className = this.showCss;
			this.autoRoll();
		};

		// 自动滚
		this.autoRoll = function (t) {
			if (t) {
				this.rollTim = t;
			}
			if (this.rollTim) {
				clearTimeout(this.timid);
				this.timid = setTimeout(this.exeRoll, this.rollTim);
			}
		};
	},

	// 获取GET参数
	getUrlReq: function () {
		var url = location.search;
		var theRequest = {};
		if (url.indexOf("?") != -1) {
			url = url.substr(1).split("&");
			for(var i = 0; i < url.length; i ++) {
				var str = url[i].split("=");
				theRequest[str[0]] = decodeURIComponent(str[1]);
			}
		}
		return theRequest;
	}

};
