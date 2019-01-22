function init () {
	var o = tls.getUrlReq();
	dat.nam = o.nam;
	dat.sub = o.sub;
	dat.flush();
}

var testTxt = "利用虚拟现实技术，以新颖直观可视化的互动界面提供重大公共卫生事件应急处理（以重金属污染为例）综合实验系统。学生通过情景案例式的虚拟仿真教学方式，了解并掌握，当发生重大公共卫生事件时，需要掌握的（相关现场流行病学调查、环境调查、食品调查、职业调查等）教学实验知识和技能。并通过智能评分系统考核学生的相关知识掌握水平，能够满足相应的实验课时安排要求，提高学生对重大公共卫生事件应急处理能力的了解和掌握，满足公共卫生教学的要求。";
var testTxt2 = "<div class=\"ohm_pic ohm_pic_1\"></div><br/><div>某老师</div><br/><div>利用虚拟现实技术，以新颖直观可视化的互动界面提供重大公共卫生事件应急处理（以重金属污染为例）综合实验系统。学生通过情景案例式的虚拟仿真教学方式，了解并掌握，当发生重大公共卫生事件时，需要掌握的（相关现场流行病学调查、环境调查、食品调查、职业调查等）教学实验知识和技能。并通过智能评分系统考核学生的相关知识掌握水平，能够满足相应的实验课时安排要求，提高学生对重大公共卫生事件应急处理能力的了解和掌握，满足公共卫生教学的要求。</div>";

var dat = {
	nam: null,
	sub: null,
	tree: {
		"项目描述": {
			id: "doeTb1",
			txt: testTxt
		},
		"实验教学项目": {
			subs: {
				"实验目的": testTxt,
				"实验原理": testTxt,
				"实验仪器设备": testTxt,
				"实验材料": testTxt,
				"实验教学方法": testTxt,
				"实验方法与步骤": testTxt,
				"实验结果与结论": testTxt,
				"实验考核要求": testTxt,
				"面向学生要求": testTxt
			}
		},
		"服务团队": {
			id: "doeTb2",
			subs: {
				"老师1": testTxt2,
				"老师2": testTxt2,
				"老师3": testTxt2,
				"老师4": testTxt2,
				"老师5": testTxt2,
				"老师6": testTxt2,
				"老师7": testTxt2,
				"老师8": testTxt2
			}
		},
		"网络要求": {
			id: "doeTb3",
			subs: {
				"有效链接": testTxt,
				"网络条件要求": testTxt,
				"系统要求": testTxt,
				"非操作系统软件配置": testTxt,
				"硬件配置要求": testTxt,
				"特殊外置硬件要求": testTxt
			}
		},
		"架构研发": {
			id: "doeTb4",
			txt: testTxt
		},
		"项目特色": {
			id: "doeTb5",
			txt: testTxt
		},
		"持续建设": {
			id: "doeTb6",
			txt: testTxt
		},
		"申请书": {
			id: "doeTb7",
			txt: testTxt
		}
	},

	flush: function () {
		var o, d, b, s;
		if (dat.nam) {
			o = dat.tree[dat.nam];

			// 菜单被选中样式
			d = document.getElementById(o.id);
			if (d) {
				d.className += " hom_head_btn_scd";
			}

			// 标题
			bnamDoe.innerHTML = dat.nam;
			document.title = dat.nam;
			if (dat.sub) {
				dnamDoe.innerHTML = dat.sub;
				dtxtDoe.innerHTML = o.subs[dat.sub];
				document.title += "_" + dat.sub;
			} else {
				dnamDoe.innerHTML = dat.nam;
				dtxtDoe.innerHTML = o.txt;
			}

			// 创建子菜单
			if (o.subs) {
				b = true;
				for (s in o.subs) {
					d = document.createElement("a");
					d.className = "ohm_bar_sub sfs";
					d.innerHTML = s;
					d.href = "home.html?nam=" + dat.nam + "&sub=" + s;
					if (b) {
						b = false;
						d.className += " ohm_bar_sub_0";
					}
					if (s === dat.sub) {
						d.className += " ohm_bar_scd";
					}
					boutDoe.appendChild(d);
				}
			}
		}
	}
};
