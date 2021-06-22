function init () {
	LZR.load([
		"LZR.Base.Json",
		"LZR.HTML.Base.Ajax"
	]);
	dco.ajx = new LZR.HTML.Base.Ajax ();
	dco.utJson = LZR.getSingleton(LZR.Base.Json);
	dco.vc.doe = document.getElementById("vcImgDoe");
	dco.vc.draw();
}

var dco = {
	rout: "",	// 根目录
	bcu: "/",	// 跳转链接
	ajx: null,	// ajax
	utJson: null,	// json

	vc: {	// 图片验证码
		value: "",	// 验证码的值
		doe: null,	// 

		/**生成一个随机数**/
		randomNum: function (min,max) {
			return Math.floor( Math.random()*(max-min)+min);
		},

		/**生成一个随机色**/
		randomColor: function (min,max) {
			var r = this.randomNum(min,max);
			var g = this.randomNum(min,max);
			var b = this.randomNum(min,max);
			return "rgb("+r+","+g+","+b+")";
		},

		/**绘制验证码图片**/
		draw: function (canvas) {
			if (!this.doe) return;
			var canvas = this.doe;
			var width=canvas.scrollWidth;
			var height=canvas.scrollHeight;
			canvas.width = width;
			canvas.height = height;
			var ctx = canvas.getContext('2d');
			this.value = "";
			ctx.textBaseline = 'bottom';

			/**绘制背景色**/
			ctx.fillStyle = this.randomColor(180,240); //颜色若太深可能导致看不清
			ctx.fillRect(0,0,width,height);
			/**绘制文字**/
			var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
			for(var i=0; i<4; i++){
				var txt = str[this.randomNum(0,str.length)];
				this.value += txt;
				var fontSize = this.randomNum(7,10) / 10 * height;
				ctx.fillStyle = this.randomColor(50,160);  //随机生成字体颜色
				ctx.font = fontSize+'px SimHei'; //随机生成字体大小
				var x = 10+i*0.22*width;
				var y = this.randomNum(fontSize + 5, height - 5);
				var deg = this.randomNum(-30, 30);
				//修改坐标原点和旋转角度
				ctx.translate(x,y);
				ctx.rotate(deg*Math.PI/180);
				ctx.fillText(txt, 0,0);
				//恢复坐标原点和旋转角度
				ctx.rotate(-deg*Math.PI/180);
				ctx.translate(-x,-y);
			}
			/**绘制干扰线**/
			for(var i=0; i<2; i++){
				ctx.strokeStyle = this.randomColor(40,180);
				ctx.beginPath();
				ctx.moveTo( this.randomNum(0,width), this.randomNum(0,height) );
				ctx.lineTo( this.randomNum(0,width), this.randomNum(0,height) );
				ctx.stroke();
			}
			/**绘制干扰点**/
			for(var i=0; i<20; i++){
				ctx.fillStyle = this.randomColor(0,255);
				ctx.beginPath();
				ctx.arc(this.randomNum(0,width),this.randomNum(0,height), 1, 0, 2*Math.PI);
				ctx.fill();
			}
		}
	},

	run: function () {
		var u = dco.rout + "login/";
		if (usrDoe.value) {
			if (pswDoe.value) {
				if (vcDoe.value.toUpperCase() === dco.vc.value) {
					memoDeo.innerHTML = "登录中，请稍候 ...";
					vcDoe.value = "";
					dco.vc.draw();
					var o = dco.ajx.post(u, {t:dco.utJson.toSeJson({u:usrDoe.value, p:pswDoe.value, t: Date.now()})});
					o = dco.utJson.toObj(o);
					if (o.ok) {
						memoDeo.innerHTML = "登录成功！";
						location.href = dco.bcu;
					} else {
						memoDeo.innerHTML = o.msg;
					}
				} else {
					memoDeo.innerHTML = "验证码错误！";
					vcDoe.value = "";
					dco.vc.draw();
				}
			} else {
				memoDeo.innerHTML = "密码不能为空！";
			}
		} else {
			memoDeo.innerHTML = "用户名不能为空！";
		}
	}
};
