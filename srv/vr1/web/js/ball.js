// Copyright (C) 2019 犟子工作室 https://www.ziniulian.tk/

function init () {
	dco.bo.init(boDom, dco.rout + "img/qj.jpg");
	tls.showFlv(voDom, "a.flv", true, true, {
		width: "100%",
		height: "100%"
	});
}

var dco = {
	bo: {
		scene: new THREE.Scene(),		// 场景
		camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000),		// 相机
		renderer: new THREE.WebGLRenderer({antialias: true}),		// 渲染器
		controls: undefined,		// 控制器

		init: function (doe, pic) {
			// 相机
			this.camera.position.set(30, 80, -100);
			this.camera.lookAt(new THREE.Vector3(0, 0, 0));

			// 渲染器
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			doe.appendChild(this.renderer.domElement);

			// 控制器
			this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
			this.controls.minDistance = 1;
			this.controls.zoomSpeed = 5;
			this.controls.maxDistance = 400;
			this.controls.noPan = true;

			// 添加全景图球体
			this.initContent(pic);

			// 监听事件
			window.addEventListener("resize", this.onWindowResize(), false);

			// 开始循环渲染
			this.animate();
		},

		// 窗口变动触发
		onWindowResize: function () {
			var self = this;
			return function () {
				self.camera.aspect = window.innerWidth / window.innerHeight;
				self.camera.updateProjectionMatrix();
				self.renderer.setSize(window.innerWidth, window.innerHeight);
			};
		},

		// 循环渲染
		animate: function () {
			var self = this;
			var run = function () {
				requestAnimationFrame(run);
				self.renderer.render(self.scene, self.camera);
			};
			run();
		},

		// 场景中的内容
		initContent: function (pic) {
			// 箭头
			// var dir = new THREE.Vector3( 0, 2, 0 );
			// dir.normalize();
			// var origin = new THREE.Vector3( 0, 0, 0 );
			// var length = 5;
			// var hex = 0xff0000;
			// var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
			// this.scene.add( arrowHelper );

			var texture = new THREE.TextureLoader().load(pic);

			var sphereGeometry = new THREE.SphereGeometry(1000, 50, 50);
			sphereGeometry.scale(-1, 1, 1);

			var sphereMaterial = new THREE.MeshBasicMaterial({map: texture});

			var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

			this.scene.add(sphere);
		}
	},

	cuw: 0,		// 当前窗口
	rout: "",	// 根目录

	// 显示窗口
	show: function (w) {
		var o;
		if (this.cuw) {
			o = this.getw(this.cuw);
			o.b.className = "bal_btn sfs";
			o.d.className = "Lc_nosee";
			if (this.cuw === w) {
				this.cuw = 0;
				return;
			}
		}

		o  = this.getw(w);
		o.b.className = "bal_btn bal_btn_scd sfs";
		o.d.className = "bal_dw mfs";
		switch (w) {
			case 2:
				o.d.className += " bal_dw_txt";
				break;
		}
		this.cuw = w;
	},

	// 获取弹出窗
	getw: function (w) {
		switch (w) {
			case 1:
				return {
					b: voBtnDom,
					d: voDom
				};
			case 2:
				return {
					b: txtBtnDom,
					d: txtDom
				};
			default:
				return null;
		}
	}
};
