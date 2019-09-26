// 数据库
module.exports = {
	nam: "重大公共卫生事件应急处置的仿真教学（以环境重金属污染为例）",
	menu: ["home", "info", "team", "net", "stc", "df", "bld", "book"],	// 菜单
	ilib: {	// 实验平台接口参数
		host: "http://www.ilab-x.com",
		url: "http://www.ilab-x.com/details/v5?id=3829",	// 实验项目链接
		iid: 101039,	// issuerId , 实验项目编号
		sk: "58ycaz",	// Secret Key
		ak: "SCusvKeU4wHVgGg/veXqFQAKjsskkvOlzDaeRPJcQnI=",	// Aes Key
		nam: "“重大公共卫生事件应急处置”的仿真教学（以环境重金属污染为例）",	// 实验名称，必须与实验平台的名称一致
		subNam: "重大公共卫生事件应急处置",	// 子实验名称
		nonce: "0F2785E6ED1B59AC",	// 盐1
		cnonce: "F5A981C203030722"	// 盐2
	},
	hom: {	// 首页
		home: {
			nam: "首页",	// 名称
			a: ""	// 链接
		},
		info: {
			nam: "项目描述",	// 名称
			sub: [
				{
					nam: "实验目的",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>（一）通过对一次群体性不明原因重大公共卫生事件应急响应过程的情景式仿真再现，掌握应对重大公共卫生事件的基本流程和注意事项，讨论分析影响重大公共卫生事件处置效率的因素；</div><div>（二）结合重大公共卫生事件应急响应的基本流程，讨论如何促进该类事件成因发现的效率，评价现场流行病学调查在群体性不明原因重大公共卫生事件病因发现中的作用。</div><br/><b>二、环境重金属污染状况调查的仿真</b><div>（一）环境样品的采集</div><div>通过对大气、土壤、水体等环境样品中重金属污染物的采集，掌握环境污染物的采集方法，讨论不同采集方法在实际应用中的优缺点。通过对大气、土壤、水体中重金属污染的来源、危害及有关卫生标准的查阅和分析，加深对实验原理的理解，并结合实际实验加强学生对重金属污染程度卫生学评价的学习。</div><div>（二）电感耦合等离子质谱仪（ICP-MS）定量检测环境重金属污染物</div><div>掌握应用ICP-MS进行不同环境样品前处理方法；熟悉ICP-MS检测不同环境样品中重金属浓度的实验方法。</div>"
				},
				{
					nam: "实验原理",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>病例对照研究的基本原理是以当前已经确诊的罹患某特定疾病的患者作为病例组，以不患有该病的个体（经均衡匹配）作为对照组，通过询问、实验室检查或复查病史，搜集研究对象既往各种可能的危险因素暴露史，检测并比较两组各因素暴露比例的差异是否具有统计学意义，如果病例组的暴露比例高于对照组，说明该暴露可能会增加疾病发生的风险，反之，暴露组的暴露比例低于对照组，则该暴露可能会降低疾病发生的风险。然后评估各种偏倚对研究结果的影响，并借助病因推断技术，判断某个或某些暴露因素是否为疾病的危险因素，从而达到探索和检验病因假说的目的。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>（一）环境样品的采集</div><div>在环境重金属污染状况调查中，针对大气、土壤、水体等环境重金属污染物，选择合理的采集方法对样品进行采集和检测，依据检测结果判断该环境中重金属污染的来源及危害，并做出合理的卫生学评价。</div><div>（二）ICP-MS定量检测突发金属污染物</div><div>ICP-MS是一种利用高温等离子体作为离子源，用质谱分析器检测产生离子的多元素分析技术。该仪器可同时测定元素周期表中大多数元素，有极好的灵敏度和高效的样品分析能力。利用仿真技术，还原ICP-MS定量检测重金属污染物的实操过程。</div><br/><b>知识点：共<span class=\"ohm_ultxt\"> 10 </span>个</b><div>1. 重大公共卫生事件应急响应流程；</div><div>2. 环境中重金属污染物的采集、测定方法及影响因素；</div><div>3. 滤料采样法采集空气颗粒物的原理及流程；</div><div>4. 环境中重金属污染的来源、危害及有关卫生标准；</div><div>5. 大气环境重金属污染物采样科学布点方法；</div><div>6. 大气环境重金属污染物的测定及前处理方法；</div><div>7. 河水采样点设置；</div><div>8. 污水管道水的采样方法。</div><div>9. 环境土壤的采集；</div><div>10. 根据测定结果进行卫生学评价；</div>"
				},
				{
					nam: "实验仪器设备",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>1. 防护用品：工作服、普通口罩、工作服等；</div><div>2. 调查用品：调查用表、档案袋、笔等；</div><div>3. 取证工具：照相机、录音机、摄像机等；</div><div>4. 个人电脑；</div><div>5. SPSS/SAS/R、EpiData软件。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>1. 工具类：采样器；</div><div>2. 器材类：GPS、照相机、玻璃纤维滤膜（40mm）、镊子、滤膜盒、土壤采样器等；</div><div>3. 文具类：样品标签、采样记录表、铅笔、资料夹等；</div><div>4. 安全防护用品：工作服、工作鞋、安全帽、药品箱等；</div><div>5. 采样用车辆；</div><div>6. ICP-MS；</div><div>7. 微波消解仪。</div>"
				},
				{
					nam: "实验材料",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>1. 生物样本采样材料：粪便样本采集盒、尿液样本采集盒、真空采血管；</div><div>2. 调查样本数据；</div><div>3. 软件版本号：SAS（8.1以上）/R（3.1以上）/SPSS（18.0以上）、EpiData（3.1）。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>1. 小流量TSP颗粒物采样器（青岛路博LB-120F颗粒物采样器；采样夹可装直径40 mm的滤纸或滤膜，采气流量20～30 L/min，选择可充电式采样器）；</div><div>2. 微波消解仪型号为TOPEX（PreeKem, China）；</div><div>3. ICP-MS型号为：X Series 2（Thermo Fisher, USA）。</div>"
				},
				{
					nam: "实验教学方法",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>1. 首先通过课堂讲授突发事件、突发公共卫生事件和卫生应急响应的概念，以及不同卫生应急机构在突发公共卫生事件中的职责，掌握应急响应过程中的程序和报告时限，回顾病例对照研究设计与实施方法和资料整理与分析方法；</div><div>2. 通过对群体不明原因突发公共卫生事件的报告、应急响应组织和现场流行病学调查的过程仿真，促进学生对突发公共卫生事件应急处置流程和病例对照实施方法的进一步理解，加深理论与仿真实践之间的密切联系；</div><div>3. 实验仿真结束后，积极引导学生讨论影响突发公共卫生事件处置效率的因素，并根据现场流行病学调查的结果分析此次群体性不明原因突发公共卫生事件发生的潜在成因，并对进一步的病因验证和应急处置给出有针对性的建议。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>1. 首先通过课堂讲授介绍环境中重金属污染的基本概念，常见的环境采样方法以及运用其进行环境采样实验的主要步骤，并讲解针对环境重金属污染的“滤料采样法”基本原理及流程；</div><div>2. 通过对环境重金属污染的来源、危害及有关卫生标准的查阅，促使学生回顾实验内容，通过实验加强学生对该区重金属污染程度卫生学评价的学习，加深学生对课堂讲授知识的理解与掌握；</div><div>3. 详细讲解大气、食品及土壤样本的前处理过程（如微波消解法）；</div><div>4. 课堂讲授环境因素与健康相关的基础知识与概念，同时介绍ICP-MS定量检测突发金属污染物的基本原理与理论；</div><div>5. 指导学生查阅ICP-MS相关的实验文献，并针对某样本进行金属污染物定量检测的计算机仿真模拟，讲解ICP-MS仿真的主要步骤与关键参数的设置方法；</div><div>6. 在对实验进行仿真后引导学生修改仿真条件及参数，探讨不同检测样品（大气、土壤、水样及食品）、实验条件参数对于ICP-MS数据结果的影响，验证《预防医学综合创新型实验》课中讲授的结论，加深学生对与课堂讲授知识的理解与掌握。</div>"
				},
				{
					nam: "实验方法与步骤",
					txt: "<br/><b>一、实验方法描述</b><div><b>（一）群体不明原因重大公共卫生事件应急响应过程仿真</b></div><div>1. 根据突发公共卫生事件应急响应的基本流程，按照系统提示，逐步对本次事件的应急响应过程进行模拟。要求：从提高处置时间效率的角度上，分析处置过程是否有改进的地方；</div><div>2. 选择现场调查需要准备的材料与设备。要求：根据医院对接诊病人的描述，判断可能的病因，并据此选择确定调查所需的设备与材料；</div><div>3. 根据本次事件的基本描述，尝试线下设计调查表，制作EpiData数据录入表。要求：根据潜在的病因，考虑病因有哪些暴露和结局的测量方式，影响暴露与事件发生关联关系的因素，据此设计调查表；</div><div>4. 以报告病例所在确定流行病学的调查现场，根据现场的具体情况，按照病例对照的设计原则，利用社区医院确定调查现场与报告病例相似的病例和疑似病例，并对病例和疑似病例及其家属、邻居进行现场调查。要求：启发学生为什么选择病例和意思病例的家属和邻居作为对照；</div><div>5. 根据调查所得样本数据，线下利用统计软件SPSS/SAS/R软件分析结果并得到初步的病因结论。要求：利用统计软件，整理数据，分析计算潜在病因与结局之间的关联强度及其可信区间，分析协变量对暴露与结局关联关系的影响。</div><div><b>（二）环境重金属污染状况调查仿真</b></div><div><b>1. 环境重金属污染物样品采集的仿真</b></div><div>（1）大气采用同心圆的布点方法，以污染源为中心作半径为5000 m的同心圈，在八个方位作射线，设置9个采样点。采样时间为连续采样8 h/天，连续采样3天。大气预先将采样滤膜进行干燥24 h，称量，并记录滤膜原始重量和编号；对颗粒物采样器进行校准，包括采样流量等；将采样器等设备带至预选好地点（一般选择于空旷，周围无遮掩物的位置，采样高度为1.5 m），支好三角夹，接好采样滤头，用镊子将滤膜放于采样头内，拧紧；设置采样流量为10 L/min，记录采样开始时间、天气情况等信息，开启采样；采样结束时，记录采样结束时间、天气情况等信息；关闭采样器，用镊子取出滤膜，沿对角线朝内折叠两次（要避免镊子对滤膜造成损坏），将滤膜放于滤膜盒内，低温保存，同时取未采集大气样品的滤膜作为空白对照。打开滤膜盒，取出滤膜放入消解管中，加入5 mL浓硝酸，盖好盖子放入石墨消解仪。打开石墨消解仪，设定时间温度，加盖消解至完全，然后去盖赶酸。在消解完成并冷却的消解管中加入去离子水，少量多次冲洗入10 mL容量瓶，定容后倒入离心管，准备一个平行样、一个空白样共3个样品，放入ICP-MS样品架待测；</div><div>（2）污水管道水采样采样点一律设在车间或车间处理设施的排放口或专门处理此类污染物设施的排放口；按照排污厂的工作周期进行周期性采样，1个生产周期内每隔1 h采集一次。鱼塘水样采集，平均水深小于10 m时，水面下0.5 m，并距湖底不小于0.5 m处设一取样点，连续采集3次，选择混合采样方式。水样选用瞬时采样和综合采样结合的方式，对每个断面的所有采样点的水样进行混合，连续采样3次；</div><div>（3）土壤采样选取3～5个采样点。在每个采样点，用土壤采样器采取表层土（0～20 cm），每个样点采集5个子样本，用四分法合成混合样品。选择3～5个采样区，在每个采样区选择5个采样点，在距离地面1.5 m处用小流量TSP颗粒物采样器采集大气样品；</div><div>（4）食物样品的采集，在发生公共卫生事件地区走访居民，选取10户居民住宅作为采样点，采集粮食和蔬菜样品，只采集可食用部位的食物样品。将样品装入聚乙烯自封袋，带回实验室。</div><div><b>2. ICP-MS定量检测突发金属污染物的仿真实验</b></div><div>（1）样品前处理：土壤样品带回实验室后，在实验台上自然风干。将风干的土壤样品用研钵研碎后过100目的尼龙网筛后等待消解。将采集大气样品的玻璃纤维滤膜带回实验室，同时取未采集大气样品的滤膜作为空白对照。将食物样品带回实验室后，用自来水和去离子水依次清洗干净后烘干，用粉碎机粉碎。土壤和食物样品均采用统一的微波消解方法消解成溶液。大气滤膜采用石墨消解仪进行消解。水样品加入消解罐中，加入5 mL硝酸，用微波消解仪进行消解。大气滤膜放入消解管，加入5 mL浓硝酸，盖好盖子放入石墨消解仪进行消解；</div><div>（2）样品中重金属浓度的测定：开机、点火：检查电路总开关、电源、气源、气路连结、氩气分压、通风系统、仪器环境湿度、冷却水温度等正常后开机。再次确认真空度和冷却水等外围设备的条件达到点火要求。把进样毛细管插入纯水中，单击“ON”→ YES，等待5 min左右完成点火进程，状态显示Operate时，则点火成功；</div><div>（3）样品的测定：根据不同的测试样品，设置仪器参数。仪器开始稳定运行后，可进行仪器测试条件调试或样品测定，每测定一个样品依次用2% HNO3和去离子水清洗进样器。</div><br/><b>二、学生交互性操作步骤说明</b><div><b>（一）群体不明原因重大公共卫生事件应急响应过程仿真</b></div><div><b>1. 应急报告</b></div><div>（1）急诊科护士将接诊案例的基本特征向该医院主管领导汇报，该医院领导向县（区）卫健委和疾病预防控制中心（CDC）应急办报告；</div><div>（2）事件信息依次在县（区）CDC应急办、CDC主管领导、上级卫健委和上级人民政府上报；上级卫生行政主管部门初步判断此次事件为重大突发公共卫生事件，并建议启动突发公共卫生事件应急预案，省级上级人民政府批准突发公共卫生应急预案的启动建议，并下达可能影响范围各县（区）卫健委和CDC；</div><div>（3）县（区）CDC按照《X县（区）突发公共卫生事件应急预案》启动应急响应。</div><div><b>2. 应急响应</b></div><div>（1）县（区）CDC按照《应急预案》，成立针对本次事件的应急处置队伍，包括综合协调组、个案（流行病学）调查组和现场卫生调查组；</div><div>（2）个案调查组进行流行病学调查和生物样本采集，现场卫生调查组据此进行空气、水源、食物的采样和分析处理；</div><div>（3）综合协调组根据调查和分析的结果，确定本次突发事件为环境镉污染导致，并上报本级卫健委和人民政府，填报《突发公共卫生事件报告管理信息系统》。</div><div><b>3. 应急调查</b></div><div>（1）流行病学调查组快速根据报告病例所在村确定调查现场，并分组进行现场调查，第一组对报告病例进行流行病学调查和生物样本采集，第二组在获得报告病例所在社区医院的帮助下，搜集与报告病例相似病例和疑似病例，并针对病例与疑似病例的家属和凝聚并进行流行病学调查，采集调查对象的生物样本；</div><div>（2）调查结束后，调查组利用Epidata和SPSS/R/SAS软件完成调查结果的快速录入和结果分析；</div><div>（3）根据分析结果，撰写并报告初步的流行病学调查结果。</div><div><b>（二）环境重金属污染状况调查仿真</b></div><div><b>1. 背景介绍及所需仪器、材料准备</b></div><div>指导学生了解事件发生的背景，确定污染源主导风向及居民区与冶炼区的相对位置，掌握环境重金属污染状况调查检测所需仪器、材料以及安全防护措施。</div><div><b>2. 确定布点和采样时间</b></div><div>指导学生根据污染区背景对环境污染物状况进行快速预判以及在野外采用的布点方法，根据污染状况确定采样时间。提问学生在本次调查中对于该污染源采样应采用的布点方式。</div><div><b>3. 采样</b></div><div>指导学生掌握应用采样器釆集环境中大气、水、土壤和食品样品的方法及注意事项，提问学生釆集环境中样品前应确认事项；指导学生应用石墨消解仪对滤膜进行消解，提问学生颗粒物样品在进行ICP-MS检测前应该如何设置平行样和空白样。</div>"
				},
				{
					nam: "实验结果与结论",
					txt: "<br/>一、是否记录每步实验结果： ☑ 是 &nbsp; ☐ 否<br/>二、实验结果与结论要求：☑ 实验报告 &nbsp; ☐ 心得体会 其他            <br/>三、其他描述：<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>本次公共卫生事件的应急处置过程的综合性评价，并填报突发公共卫生事件报告管理信息系统；根据现场流行病学调查报告，分析潜在病因，确定本次事件的高危人群特征，能利用恰当的方式制作图表，并对进一步的病因验证和下一步的应急处置给出有针对性的建议。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>通过对大气、水体、土壤和食物等环境重金属污染的来源、危害及有关卫生标准的查阅，对该地区重金属污染程度给予卫生学评价。</div><div>本项目强调应急处置过程性评价，采用线上线下交互，学生自评与互评相结合，线上操作和实训操作共同完成统一的实验报告（即根据环境重金属污染状况的卫生学评价结果，为当地政府制定环境污染治理政策提供合理化建议）。</div>"
				},
				{
					nam: "实验考核要求",
					txt: "<br/><b>一、群体不明原因重大公共卫生事件应急响应过程仿真</b><div>1. 熟知应急响应过程的报告流程及其时限，并根据调查结果填报突发公共卫生事件报告管理信息系统；</div><div>2. 选择恰当的流行病学设计类型，确定样本量大小，并选择适宜的对照。</div><br/><b>二、环境重金属污染状况调查仿真</b><div>1. 熟练掌握大气、土壤、水样和食品污染物的采集方法及测定方式；</div><div>2．通过对大气、土壤、水样和食品重金属污染的来源、危害及有关卫生标准的查阅，对该区重金属污染程度给予卫生学评价。</div>"
				},
				{
					nam: "面向学生要求",
					txt: "<br/><b>一、专业与年级要求：</b><div>专业：预防医学</div><div>年级：大学本科四年级下学期（预防医学专业）</div><br/><b>二、基本知识和能力要求：</b><div>学习过预防医学专业《环境卫生学》课程，掌握环境流行病学、环境卫生学和ICP-MS定量检测方法等相关的知识；同时与《环境卫生学创新综合实验教程》的实验课程同步进行仿真教学。</div>"
				}
			]
		},
		team: {
			nam: "服务团队",
			sub: [
				{
					nam: "王俊玲",
					img: "img/pic1.png",
					txt: '<font><p><font><font face="Tahoma 宋体">王俊玲，女，</font>1974年11月生，中共党员，动物学专业博士研究生，教授，硕士生导师，兰州大学公共卫生学院副院长，中国毒理学会教育专业委员会委员，主要研究方面为环境毒理学。</font></p><p><font><b><font face="Tahoma 宋体">学习简历</font>:</b><b></b></font></p><p></p><table class="ohm_team_table"><tbody><tr><td valign="top"><p><font>1993.9-1998.7</font></p></td><td valign="top"><p><font>兰州医学院预防医学系</font></p></td><td valign="top"><p><font>本科学习</font></p></td></tr><tr><td valign="top"><p><font>2001.9-2004.7</font></p></td><td valign="top"><p><font>兰州大学公共卫生学院毒理学专业</font></p></td><td valign="top"><p><font>硕士研究生学习</font></p></td></tr><tr><td valign="top"><p><font>2007.9-2010.7<font face="Tahoma"> &nbsp;</font></font></p></td><td valign="top"><p><font>兰州大学生命科学院动物学专业</font></p></td><td valign="top"><p><font>博士研究生学习</font></p></td></tr></tbody></table><p></p><p><font><b><font face="Tahoma 宋体">工作和进修简历</font>:</b><b></b></font></p><p></p><table class="ohm_team_table"><tbody><tr><td valign="top"><p><font>1998.7-2003.12<font face="Tahoma">&nbsp;&nbsp;&nbsp;</font></font></p></td><td valign="top"><p><font>兰州大学公共卫生学院</font></p></td><td valign="top"><p><font>助教</font></p></td></tr><tr><td valign="top"><p><font>2004.1-2009.4</font></p></td><td valign="top"><p><font>兰州大学公共卫生学院</font></p></td><td valign="top"><p><font>讲师</font></p></td></tr><tr><td valign="top"><p><font>2009.5-2018.4<font face="Tahoma">&nbsp;</font></font></p></td><td valign="top"><p><font>兰州大学公共卫生学院</font></p></td><td valign="top"><p><font>副教授，硕士研究生导师</font></p></td></tr><tr><td valign="top"><p><font>2013.3-2013.10<font face="Tahoma">&nbsp;&nbsp;</font></font></p></td><td valign="top"><p><font>新疆维吾尔自治区疾病预防控制中心</font></p></td><td valign="top"><p><font>挂职主任助理</font></p></td></tr><tr><td valign="top"><p><font>2013.12-2015.1</font></p></td><td valign="top"><p><font>美国加州大学伯克利分校公共卫生学院</font></p></td><td valign="top"><p><font>访问学者</font></p></td></tr><tr><td valign="top"><p><font>2018.5-至今 &nbsp;&nbsp;</font></p></td><td valign="top"><p><font>兰州大学公共卫生学院</font></p></td><td valign="top"><p><font>教授，硕士研究生导师</font></p></td></tr></tbody></table><p></p><p><b><font face="Tahoma 宋体">主要教学和科研简历：</font></b></p><p><font><font face="Tahoma 宋体">主持或完成国家自然科学基金委海外及港澳学者合作研究基金项目</font>1项和主任基金项目1项、美国加州大学伯克利分校女性科学家基金项目2<font face="Tahoma 宋体">项、兰州市科技局科技计划项目社会发展类项目</font>1项、横向课题2项、兰州大学交叉学科青年创新研究基金项目1项、中央高校基本科研业务费专项资金自由探索项目2项。参与国家自然科学基金项目3<font face="Tahoma 宋体">项、兰州市城关区科技局科技攻关项目</font>1项、兰州市红古区科技局科技攻关项目1项、横向课题2项，获甘肃省高校科技进步三等奖、兰州市科技进步三等奖和第十届发展中国家毒理学大会资助奖。以第一作者或通讯作者在Toxicology Research、</font><a href="http://www.baidu.com/link?url=VYJrsJ1UIOSqxlQFUCZCL2jM1oPXGPSArUX6jXzpj6WVdvshAfx6MKa240UEztN-VihJ_9y2r7_QLLMP8N2L3q&amp;wd=&amp;eqid=ff3b897600019516000000035a9cb865"><font>Environmental Science and Pollution Research、</font></a><font>Toxicology Mechanisms and Methods、Fluoride、Toxicological &amp; Environmental Chemistry<font face="Tahoma">&nbsp;</font><font face="Tahoma 宋体">和Waste Management&amp; Research 等SCI杂志上发表论文</font>9<font face="Tahoma 宋体">篇，在中华地方病学杂志、毒理学杂志等</font>CSCD 杂志上发表论文十余篇。主持兰州大学教学改革项目1项，2017年获得兰州大学教学成果一等奖，在国家级和省级杂志发表教学论文5篇。主要承担预防、卫生事业管理和临床专业本科生和预防医学研究生的《预防医学》、《毒理学基础》、《医学史》和《医学科研设计》的教学工作。</font></p><p><font><font face="Tahoma 宋体">联系方式：</font>wangjl@lzu.edu.cn</font></p><div>&nbsp;</div></font>'
				},
				{
					nam: "罗斌",
					img: "img/pic2.png",
					txt: '<font face="宋体"><p><font><font face="宋体">罗斌，</font>1983<font face="宋体">年生，四川内江人，中共党员，博士，硕士研究生导师，副教授。</font></font></p><p><font><b><font face="宋体">主要学习</font></b><b><font face="宋体">与工作</font></b><b><font face="宋体">经历</font></b><b></b></font></p><p><font>2019.3<font face="宋体">至今 </font><font face="宋体">兰州大学公共卫生学院，劳动卫生与环境卫生研究所</font><font face="宋体">，所长</font> </font></p><p><font>2016.12-2017.12<font face="宋体">，</font><font face="宋体">美国加州大学伯克利分校</font><font face="宋体">（</font>UCB<font face="宋体">）</font><font face="宋体">公共卫生学院环境与健康科学系</font>(EHS)<font face="宋体">，访问学者</font></font></p><p><font>2015.5<font face="宋体">至今</font><font face="宋体">，</font><font face="宋体">兰州大学公共卫生学院，劳动卫生与环境卫生研究所，副教授</font><font face="宋体">，硕士研究生导师</font></font></p><p><font>2013.7-2015.4<font face="宋体">，</font><font face="宋体">兰州大学公共卫生学院</font> <font face="宋体">劳动卫生与环境卫生研究所，讲师</font></font></p><p><font>2010.9-2013.6<font face="宋体">，</font><font face="宋体">南京信息工程大学，城市气象学（健康气象方向），理学博士</font></font></p><p><font>2007.9-2010.6<font face="宋体">，</font><font face="宋体">兰州大学公共卫生学院，环境卫生学，医学硕士</font></font></p><p><font>2002.9-2007.6<font face="宋体">，</font><font face="宋体">兰州大学公共卫生学院，预防医学，医学学士</font></font></p><p><font><b><font face="宋体">主要研究领域</font></b><b><font face="宋体">与方向</font></b><b></b></font></p><p><font><font face="宋体">环境与健康（大气污染与健康；极端气象条件与健康</font><font face="宋体">；极端环境的机体适应性与健康</font><font face="宋体">）</font><font face="宋体">；职业与健康（职业紧张与健康）</font><font face="宋体">。</font></font></p><p><font><b><font face="宋体">主要</font></b><b><font face="宋体">科研情况</font></b><b></b></font></p><p><font>1.&nbsp;<font face="宋体">主持国家自然科学基金面上项目，寒冷刺激影响肠道微生物及代谢改变与诱发高血压的关系和机制研究</font>(2019-2022)<font face="宋体">，</font><font face="Times New Roman">62</font><font face="宋体">万，主持；</font></font></p><p><font>2.&nbsp;<font face="宋体">国家自然基金青年</font><font face="宋体">项目</font><font face="宋体">，寒潮</font>/<font face="宋体">热浪对呼吸系统影响的机制研究</font><font face="宋体">（</font>2015-2017<font face="宋体">）</font><font face="宋体">，</font>25<font face="宋体">万，主持；</font></font></p><p><font>3.&nbsp;<font face="宋体">兰州大学中央高校基本科研业务费项目</font><font face="宋体">，不同粒径大气颗粒物短期暴露的心血管疾病危险性研究（</font>2017-2018<font face="宋体">），</font>9<font face="宋体">万，主持；</font></font></p><p><font>4.&nbsp;<font face="宋体">兰州大学中央高校基本科研业务费项目</font><font face="宋体">，低温及</font>PM2.5<font face="宋体">对大鼠肺泡巨噬细胞的影响及机制研究</font><font face="宋体">（</font>2015-2016<font face="宋体">），</font>5<font face="宋体">万，主持；</font></font></p><p><font>5.&nbsp;<font face="宋体">兰州大学中央高校基本科研业务费项目</font><font face="宋体">，低温及</font>PM2.5<font face="宋体">对呼吸系统的影响研究</font><font face="宋体">（</font>2014-2015<font face="宋体">），</font>4<font face="宋体">万，主持；</font></font></p><p><font>6.&nbsp;<font face="宋体">国家自然科学基金面上项目，镉生物标志在低水平环境暴露人群中应用的可靠性研究（</font>2019-2022<font face="宋体">），</font>57<font face="宋体">万，第三参与；</font></font></p><p><font>7.&nbsp;<font face="宋体">国家自然科学基金面上项目，高温热浪对心血管系统的影响及机制研究（</font>2013-2016<font face="宋体">），</font>80<font face="宋体">万，第二参与；</font></font></p><p align="justify"><font>8.&nbsp;<font face="宋体">国家自然科学基金青年项目，</font>TGF-β1<font face="宋体">介导的信号通路诱发</font><font face="Times New Roman">EMT</font><font face="宋体">在纳米氧化镍致肺纤维中的作用</font><font face="宋体">（</font>2017-2019<font face="宋体">）</font><font face="宋体">，</font>21<font face="宋体">万，参与；</font></font></p><p align="justify"><font>9.&nbsp;<font face="宋体">国家自然科学基金应急项目，</font><font face="宋体">高胆红素血症致神经损害的表观遗传机理研究（</font>201501-201512<font face="宋体">）</font><font face="Times New Roman">,10</font><font face="宋体">万，参与；</font></font></p><p align="justify"><font>10.&nbsp;<font face="宋体">国家气象行业公益项目，</font>“天气敏感性疾病发病和流行诱发机制及预报技术”，参与；</font></p><p align="justify"><font>11.&nbsp;<font face="宋体">主持美国</font>NIH/NIEHS<font face="宋体">国际合作项目“</font><font face="Times New Roman">Research in Environmental Health Sciences</font><font face="宋体">”（</font><font face="Times New Roman">2 P30 ES000260-48A1</font><font face="宋体">）子课题，参与；</font></font></p><p><b><font face="宋体">主要获奖</font></b><b></b></p><p><font>1.&nbsp;<font face="宋体">《健康气象及其预报技术研究》</font> <font face="宋体">获得</font>2016<font face="宋体">年河北省科技进步二等奖（</font><font face="Times New Roman">3/7</font><font face="宋体">）</font><font face="宋体">；</font></font></p><p><font>2.&nbsp;<font face="宋体">《环境气象与大气污染对心血管、呼吸系统的影响及其预报技术研究》</font>2017<font face="宋体">年河北省科技进步三等奖（</font><font face="Times New Roman">3/5</font><font face="宋体">）</font><font face="宋体">。</font></font></p><p><b><font face="宋体">社会服务</font></b><b></b></p><p><font><font face="宋体">为</font>Environmental&nbsp;Toxicology<font face="宋体">、</font>Journal of Hazardous Materials<font face="宋体">、</font>Int. J. Environ. Res. Publ. Health<font face="宋体">及环境科学技术等杂志审稿专家。</font></font></p><p><font><b><font face="宋体">代表性</font></b><b><font face="宋体">论文</font></b><b></b></font></p><p><font><b>1.<font face="宋体">英文（近</font><font face="Times New Roman">5</font><font face="宋体">年）</font></b><b></b></font></p><p><font>(1)&nbsp;<b>Luo B</b>, Shi H, Zhang K, Wei Q, Niu J, Wang J, Hammond SK, Liu S. Cold stress provokes lung injury in rats co-exposed to fine particulate matter and lipopolysaccharide[J]. Ecotoxicology and Environmental Safety,168, 9-16; </font></p><p><font>(2)&nbsp;Zhang K, Guo L, Wei Q, Song Q, Liu J, Niu J, Zhang L, Ruan Y,<b>&nbsp;Luo B.</b><b>&nbsp;</b>COPD rat model is more susceptible to cold stress and PM2.5 exposure and the underlying mechanism[J]. Environ Pollut, 2018, 241: 26-34.&nbsp;(<font face="宋体">通讯作者</font><font face="Times New Roman">)</font></font></p><p><font>(3)&nbsp;<b>Luo, B.,</b>&nbsp;Liu, J., Fei, G., Han, T., Zhang, K., Wang, L., Shi, H., Zhang, L.,Niu, J. Impact of Probable Interaction of Low Temperature and Ambient Fine&nbsp;particulate matter on the Function of Rats Alveolar Macrophages. Environmental&nbsp;Toxicology and Pharmacology. 2017, 49, 172-178.</font></p><p><font><font face="宋体">（</font>4<font face="宋体">）</font><b>Luo B.</b>, Shi HX, Wang LN, Wan YX., Rat lung response to PM2.5 underdifferent cold stresses. Int. J. Environ. Res. Publ. Health. 2014.11(12):12915-26.</font></p><p align="justify"><font><b>2.<font face="宋体">中文</font><font face="Times New Roman">(</font><font face="宋体">近五年</font><font face="Times New Roman">)</font></b><b></b></font></p><p align="justify"><font>(1)<b><font face="宋体">罗斌</font></b><font face="宋体">，刘江涛</font>#<font face="宋体">，费高强，韩婷，王丽娜，晚亚雄，张凯，王任洪</font><font face="Times New Roman">.</font><font face="宋体">不同温度刺激与大气</font><font face="Times New Roman">PM2.5</font><font face="宋体">对大鼠肺泡巨噬细胞的交互毒性作用研究</font><font face="Times New Roman">.</font><font face="宋体">中国应用生理学杂志</font><font face="Times New Roman">, 2017, 33(1), 40-47</font></font></p><p align="justify"><font><font face="宋体">（</font>2<font face="宋体">）张凯，费高强，李兴杰，石红霞，刘江涛，郭蕾，牛静萍，</font><b><font face="宋体">罗斌</font></b>. <font face="宋体">高温及低温时大气</font><font face="Times New Roman">PM2.5</font><font face="宋体">对大鼠肺泡巨噬细胞的毒性作用</font><font face="Times New Roman">, </font><font face="宋体">环境与健康杂志，</font><font face="Times New Roman">2017</font><font face="宋体">（</font><font face="Times New Roman">5</font><font face="宋体">）</font><font face="Times New Roman">, 394-397</font><font face="宋体">（通讯作者）</font></font></p><p align="justify"><font>(3)<font face="宋体">晚亚雄</font><font face="Times New Roman">, </font><b><font face="宋体">罗斌</font></b>, <font face="宋体">石艳荣</font><font face="Times New Roman">, </font><font face="宋体">陈美池</font><font face="Times New Roman">, </font><font face="宋体">王丽娜</font><font face="Times New Roman">, </font><font face="宋体">王任洪</font><font face="Times New Roman">, </font><font face="宋体">牛静萍</font><font face="Times New Roman">.</font><font face="宋体">冷空气与沙尘天气对人体尿液中</font><font face="Times New Roman">IL-6</font><font face="宋体">、</font><font face="Times New Roman">8-iso-PGF_(2</font><font face="宋体">α</font><font face="Times New Roman">)</font><font face="宋体">和</font><font face="Times New Roman">11-DH-TXB_2</font><font face="宋体">含量的影响，中国应用生理学杂志</font><font face="Times New Roman">, 2016, 32(1), 5-7</font><font face="宋体">（通讯作者）</font></font></p><p align="justify"><font>(4)<b><font face="宋体">罗斌</font></b>, <font face="宋体">王丽娜</font><font face="Times New Roman">, </font><font face="宋体">晚亚雄</font><font face="Times New Roman">, </font><font face="宋体">石艳荣</font><font face="Times New Roman">, </font><font face="宋体">牛静萍</font><font face="Times New Roman">, </font><font face="宋体">罗小峰</font><font face="Times New Roman">. </font><font face="宋体">低温条件下大气</font><font face="Times New Roman">PM2.5</font><font face="宋体">对大鼠心脏抗氧化能力及炎症反应的影响</font><font face="Times New Roman">. </font><font face="宋体">中国应用生理学杂志</font><font face="Times New Roman">, 2015, 31(1), 11-13</font></font></p><p><b><font face="宋体">联系方式</font></b><b></b></p><p><font><b>Email<font face="宋体">：</font></b>luob@lzu.edu.cn<b></b></font></p></font>'
				},
				{
					nam: "苏莉",
					img: "img/pic3.png",
					txt: '<font><p><font face="宋体"><font>苏莉，</font><font><font face="宋体">博士，副教授，硕士生导师，并任中国毒理学会毒理学替代法与转化毒理学专业委员会青年委员，甘肃省营养学会理事。自参加工作以来，以第一作者或通讯作者发表</font>SCI<font face="宋体">论文</font><font face="Times New Roman">5</font><font face="宋体">篇，核心期刊论文</font><font face="Times New Roman">10</font><font face="宋体">余篇，参与发表国家核心及以上论文</font><font face="Times New Roman">10</font><font face="宋体">余篇。主持或参与国家自然科学基金青年基金项目</font><font face="Times New Roman">1</font><font face="宋体">项，主持或完成中央高校基本科研业务费自由探索项目</font><font face="Times New Roman">4</font><font face="宋体">项，企事业合作项目</font><font face="Times New Roman">4</font><font face="宋体">项，兰州大学交叉学科青年创新研究基金</font><font face="Times New Roman">1</font><font face="宋体">项。指导研究生论文获得</font><font face="Times New Roman">2018</font><font face="宋体">年甘肃省优秀硕士学位论文和兰州大学优秀硕士学位论文，指导本科生参加</font><font face="Times New Roman">2015</font><font face="宋体">年兰州大学“国家级大学生创新创业训练计划”获优秀项目结项。</font></font></font></p><font face="宋体"><p><font face="宋体"><strong>学习经历</strong>：</font></p><p><font>1996<font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月</font><font face="Times New Roman">-2001</font><font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月，在兰州医学院预防医学系进行本科学习。</font></font></p><p><font>2001<font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月</font><font face="Times New Roman">-2004</font><font face="宋体">年</font><font face="Times New Roman">7</font><font face="宋体">月，在兰州医学院卫生毒理学专业攻读硕士学位。</font></font></p><p><font>2008<font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月</font><font face="Times New Roman">-2011</font><font face="宋体">年</font><font face="Times New Roman">6</font><font face="宋体">月，在兰州大学生命科学学院动物学专业遗传毒理学方向攻读博士学位。</font></font></p><p><font face="宋体"><strong>工作经历</strong>：</font></p><p><font>2004<font face="宋体">年</font><font face="Times New Roman">7</font><font face="宋体">月</font><font face="Times New Roman">-2007</font><font face="宋体">年</font><font face="Times New Roman">4</font><font face="宋体">月，兰州大学公共卫生学院卫生毒理学研究所助教。</font></font></p><p><font>2007<font face="宋体">年</font><font face="Times New Roman">4</font><font face="宋体">月</font><font face="Times New Roman">-2012</font><font face="宋体">年</font><font face="Times New Roman">5</font><font face="宋体">月，兰州大学公共卫生学院卫生毒理学研究所讲师。</font></font></p><p><font>2012<font face="宋体">年</font><font face="Times New Roman">5</font><font face="宋体">月</font><font face="Times New Roman">-2019</font><font face="宋体">年</font><font face="Times New Roman">3</font><font face="宋体">月，兰州大学公共卫生学院卫生毒理学研究所副教授。</font></font></p><p><font><font face="Times New Roman">2016</font><font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月</font><font face="Times New Roman">-2017</font><font face="宋体">年</font><font face="Times New Roman">9</font><font face="宋体">月，在美国</font><font face="Times New Roman">Louisville</font><font face="宋体">大学健康医学中心访问学者。</font></font></p><p><font>2019<font face="宋体">年</font><font face="Times New Roman">3</font><font face="宋体">月</font><font face="Times New Roman">-</font><font face="宋体">至今，兰州大学公共卫生学院儿少卫生与妇幼保健学研究所副教授、所长。</font></font></p><p><font><strong><font face="宋体">主要的科研论文（近</font>5</strong><font face="宋体"><strong>年）：</strong> </font></font></p><p><font>1. Xiaotian Zhang, Xiaoqin&nbsp;Gan, Qiannan&nbsp;E, Qiong Zhang, Yixing Ye, Yunyu&nbsp;Cai , Aijie Han, Minmin Tian, Yixuan Wang, Caixia Wang, Li Su*, Changhao Liang. Ameliorative effects of nano-selenium against NiSO4-induced apoptosis in rat testes[J].&nbsp;Toxicology mechanism and methods, 2019, 5(3), 1-11.&nbsp;<font face="宋体">通讯作者</font> </font></p><p><font>2.&nbsp;Xiaoqin&nbsp;Gan,&nbsp;Xiaotian&nbsp;Zhang, Qiannan&nbsp;E, Qiong Zhang, Yixing Ye, Yunyu&nbsp;Cai, Aijie Han, Minmin Tian, Caixia Wang, Zheng Su, Li Su*, Changhao Liang. Nano-selenium attenuates nickel-induced testosterone&nbsp;synthesis disturbance through inhibition of MAPK pathways&nbsp;in Sprague-Dawley rats[J]. Environmental Toxicology, 2019, 4(22), 1-11. <font face="宋体">通讯作者</font></font></p><p><font>3. Aijie Han, Lingyue Zou, Xiaoqin Gan, Yu Li, Fangfang Liu, Xuhong Chang, Xiaotian Zhang, Minmin Tian, Sheng Li, Li Su*,&nbsp;Yingbiao Sun*. ROS generation and MAPK activation contribute to the NiSO4-induced testosterone synthesis disturbance in rat Leydigcells[J]. Toxicology&nbsp;Letters, 2018, 290(15), 36-45.&nbsp;<font face="宋体">通讯作者</font></font></p><p><font>4. Lingyue Zou#, Li Su#, Yifan Sun, Aijie Han, Xuhong Chang, An Zhu, Fangfang Liu, Jin Li, Yingbiao Sun*, Nickel sulfate induced apoptosis via activating ROS-dependent mitochondria and endoplasmic reticulum stress pathways in rat Leydig cells[J], Environmental&nbsp;Toxicology, 2017, 32(7), 1918-1926. <font face="宋体">共同第一作者</font></font></p><p><font>5. Li Su, Yuantao Deng, Yingmei Zhang*, Chengyun Li, Rui Zhang, Yingbiao Sun, Ke Zhang, Jin&nbsp;Li, Shixia Yao, Protective Effects of Grape Seed Proancyanid in Extracts against Nickel Sulfate-induced Apoptosis and Oxidative Stress in Rat Testes[J], Toxicology mechanism and methods, 2011, 21(6), 487-494.&nbsp;</font></p><p><font>6. Wei Zhou, Li Su, Xingyu Duan, Xi Chen, Aislinn Hays, Satya Upadhyayula, Juili Shivde,&nbsp;Huizhi Wang, Yong Li, Dingming Huang, Shuang Liang, MicroRNA-21 down-regulates inflammation and inhibits periodontitis[J]. Molecular Immunology, 2018, 1(23), 1-7.</font></p><p><font>7. Aislin&nbsp;Hays,&nbsp;Xingyu&nbsp;Duan, Jianxin Zhu, Wei&nbsp;Zhou, Satya Upadhyayula, Juili Shivde, Li&nbsp;Song, Huizhi Wang, Li&nbsp;Su, Xuyu&nbsp;Zhou, Shuang&nbsp;Liang. Down-regulated Treg cells in exacerbated periodontal disease during pregnancy[J]. International Immunopharmacology,&nbsp;2019, 69(2019):299-306. </font></p><p><font>8. Fang&nbsp;Guo, Yingbiao&nbsp;Sun, Li&nbsp;Su, Sheng&nbsp;Li, Zhifei&nbsp;Liu, Jian&nbsp;Li, Xiaoting&nbsp;Hu, Jin&nbsp;Li, Losartan attenuates paraquat-induced&nbsp;pulmonary fibrosis in rats[J]. Human and Experimental Toxicology, 2015, 34(5) 497-505.</font></p><p><font>9. Xuhong&nbsp;Chang, An&nbsp;Zhu,&nbsp;Fangfang&nbsp;Liu,&nbsp;Lingyue&nbsp;Zou,&nbsp;Li&nbsp;Su, ShaoKun&nbsp;Liu,&nbsp;Honghua&nbsp;Zhou,&nbsp;Yanyan&nbsp;Sun,&nbsp;Aijie&nbsp;Han,&nbsp;Yifan&nbsp;Sun,&nbsp;Sheng&nbsp;Li,&nbsp; Ji Li,&nbsp;YingBiao&nbsp;Sun, Nickel oxide nanoparticles induced pulmonary fibrosis via TGF- β1 activation in rats[J], Human&nbsp;Experimental&nbsp;Toxicology, 2017, 36(8), 802-812.</font></p><p><font>10. <font face="宋体">张晓田</font>, <font face="宋体">甘小琴</font>, <font face="宋体">俄倩男</font>, <font face="宋体">叶一星</font>, <font face="宋体">王彩霞</font>, <font face="宋体">张莉</font>, <font face="宋体">苏莉</font>*, <font face="宋体">梁长浩</font>. <font face="宋体">纳米硒对硫酸镍致大鼠睾丸损伤的保护作用</font>[J]. <font face="宋体">毒理学杂志</font>, 2019, 33(2): 142-146. <font face="宋体">通讯作者</font></font></p><p><font>11. <font face="宋体">苏莉</font><font face="Times New Roman">, </font><font face="宋体">邓渊韬</font><font face="Times New Roman">, </font><font face="宋体">张瑞</font><font face="Times New Roman">, </font><font face="宋体">李成云</font><font face="Times New Roman">, </font><font face="宋体">李晋</font><font face="Times New Roman">. </font><font face="宋体">原花青素对硫酸镍诱导大鼠生殖损伤的拮抗作用</font><font face="Times New Roman">[J], </font><font face="宋体">工业卫生与职业病</font><font face="Times New Roman">, 2015, 41(1), 16-18.</font></font></p><p><font>12. <font face="宋体">甘小琴</font><font face="Times New Roman">, </font><font face="宋体">苏莉</font><font face="Times New Roman">, </font><font face="宋体">王旭霞</font><font face="Times New Roman">, </font><font face="宋体">张晓田</font><font face="Times New Roman">, </font><font face="宋体">俄倩男</font><font face="Times New Roman">. </font>5 <font face="宋体">岁以下儿童社区获得性肺炎病原谱及疾病负担研究进展</font>[J]. <font face="宋体">中国公共卫生</font><font face="Times New Roman">, 2018, 34(11), 1471-1475.</font></font></p><p><font face="宋体"><strong>参编著作及教材：</strong></font></p><p><font>1. <font face="宋体">心血管毒理学</font><font face="Times New Roman">, </font><font face="宋体">北京大学医学出版社</font><font face="Times New Roman">, 2018</font><font face="宋体">（编委，</font><font face="Times New Roman">10</font><font face="宋体">万字）</font></font></p><p><font>2. <font face="宋体">毒理学</font><font face="Times New Roman">, </font><font face="宋体">人民卫生出版社</font><font face="Times New Roman">, 2017</font></font></p><p><font>3. <font face="宋体">临床毒理学</font><font face="Times New Roman">, </font><font face="宋体">人民卫生出版社</font><font face="Times New Roman">, 2017</font></font></p><p><font>4. <font face="宋体">毒理学基础综合实验教程（第一版）</font><font face="Times New Roman">, </font><font face="宋体">科学出版社</font><font face="Times New Roman">, 2017</font></font></p><p><font>5. <font face="宋体">内分泌毒理学</font><font face="Times New Roman">, </font><font face="宋体">北京大学医学出版社</font><font face="Times New Roman">, 2016</font><font face="宋体">（编委，</font><font face="Times New Roman">10</font><font face="宋体">万字）</font></font></p><p><font>6. <font face="宋体">预防医学</font><font face="Times New Roman">(</font><font face="宋体">第一版</font><font face="Times New Roman">)-</font><font face="宋体">全国高等医学院校规划教材</font><font face="Times New Roman">, </font><font face="宋体">科学出版社</font><font face="Times New Roman">,</font>&nbsp;2007</font></p><p><font>7. <font face="宋体">营养医学与食品卫生学</font><font face="Times New Roman">, </font><font face="宋体">中国协和医科大学出版社</font><font face="Times New Roman">, 2003</font></font></p><p><font>8. <font face="宋体">营养与食品卫生学实验指导</font><font face="Times New Roman">(</font><font face="宋体">第五版</font><font face="Times New Roman">), </font><font face="宋体">人民卫生出版社</font><font face="Times New Roman">, 2003</font></font></p><p><font face="宋体"><strong>科研奖励：</strong></font></p><p><font>1.&nbsp;“裕固族、东乡族、保安族3-6<font face="宋体">岁儿童锌、维生素</font>A<font face="宋体">、</font><font face="Times New Roman">B2</font><font face="宋体">、</font><font face="Times New Roman">C</font><font face="宋体">缺乏病调查及综合营养干预研究</font>”项目，<font face="宋体">获</font>2009<font face="宋体">年度</font>“<font face="宋体">宋庆龄儿科医学成果奖</font><font face="Times New Roman">”</font><font face="宋体">和</font>2008<font face="宋体">年度甘肃省科技进步三等奖（</font>4/7<font face="宋体">）。</font></font></p><p><font>2.&nbsp;“维生素A<font face="宋体">和锌摄入对大鼠及特定人群影响的系列研究</font>”项目，获<font face="Times New Roman">2009</font><font face="宋体">年度甘肃省科学技术进步三等奖（</font><font face="Times New Roman">3/7</font><font face="宋体">）。</font></font></p><p><font face="宋体"><strong>承担科研项目情况：</strong></font></p><p><font>1. ROS<font face="宋体">和</font>MAPK<font face="宋体">信号通路在镍致睾酮合成障碍中的调控机理研究，</font>“国家自然科学基金青年科学基金”项目，主持。</font></p><p><font>2. MicroRNA<font face="宋体">在镍致</font><font face="Times New Roman">Leydig</font><font face="宋体">细胞睾酮合成障碍中的调控作用研究，“中央高校基本科研业务费专项资金”自由探索项目，主持。</font></font></p><p><font>3. LncRNA<font face="宋体">调控</font><font face="Times New Roman">TGF-</font>β1<font face="宋体">在纳米</font><font face="Times New Roman">NiO</font><font face="宋体">致肺纤维化中的作用及分子机制，“国家自然科学基金”面上项目，参与。</font></font></p><p><font>4. 5<font face="宋体">岁以下儿童社区获得性肺炎</font><font face="宋体">病例流行病学研究</font><font face="宋体">，甘肃省疾病预防控制中心委托项目，主持。</font></font></p><p><font>5. <font face="宋体">镍致</font><font face="Times New Roman">Leydig</font><font face="宋体">细胞内质网应激</font><font face="Times New Roman">/</font><font face="宋体">线粒体凋亡的作用机理研究，“中央高校基本科研业务费专项资金”自由探索项目（</font><font face="Times New Roman">No.lzujbky-2015-182</font><font face="宋体">），主持。</font></font></p><p><font>6. <font face="宋体">镍对大鼠精原细胞</font><font face="Times New Roman">mtDNA</font><font face="宋体">损伤及修复的机制研究，“中央高校基本科研业务费专项资金”自由探索项目，主持。</font></font></p><p><font>7. <font face="宋体">镍对大鼠睾丸细胞铁稳态和能量代谢影响的实验研究，“中央高校基本科研业务费专项资金”自由探索项目，主持。</font></font></p><p><font>8. <font face="宋体">镍的生殖毒性及葡萄籽原花青素的保护作用研究，兰州大学交叉学科青年创新研究基金项目，主持。</font></font></p><p><font>9. <font face="宋体">家用净水器（水）的水质净化性能及其急性毒性研究</font><font face="宋体">，企事业单位委托项目，主持。</font></font></p><p><font>10. <font face="宋体">减肥产品消费者的群体特征及其影响因素研究</font><font face="宋体">，企事业单位委托项目，主持。</font></font></p><p><font><strong><font face="宋体">主要的表彰</font>/<font face="宋体">奖励：</font></strong></font></p><p><font>1. 2018<font face="宋体">年兰州大学大学生创新创业行动计划优秀指导教师</font></font></p><p><font>2. 2016<font face="宋体">年兰州大学大学生创新创业行动计划优秀指导教师</font></font></p><p><font>3. 2015<font face="宋体">年第十届“挑战杯”甘肃省大学生课外学术科技作品竞赛优秀指导教师奖</font></font></p><p><font>4. 2019<font face="宋体">年兰州大学医学院首届教师案比赛二等奖</font></font></p><p><font>5. 2018<font face="宋体">年兰州大学医学院第五届青年教师讲课比赛三等奖</font>&nbsp;&nbsp;&nbsp;</font></p><p><font><strong><font face="宋体">邮箱：</font>sul@lzu.edu.cn</strong> </font></p></font></font>'
				},
				{
					nam: "胡晓斌",
					img: "img/pic4.png",
					txt: '<div><div><font face="宋体">胡晓斌，副教授，硕士生导师，美国耶鲁大学访问副教授，现任兰州大学公共卫生学院副院长、流行病与卫生统计学研究所副所长。中国卫生经济学会卫生费用核算与政策专业委员会常委、</font><font face="宋体">中华预防医学会流行病学分会青年委员，中华预防医学会伤害预防与控制分会青年常委，中华预防医学会出生缺陷预防与控制专业委员会青年委员、甘肃省医师协会临床流行病学专业委员会常委、甘肃省人口学会理事。</font></div><div><b><font face="黑体">教学工作</font></b><b><font face="黑体">：</font></b><b></b></div><div><font face="宋体">甘肃省精品课程</font>“流行病学“主讲教师之一；主要从事本科生《流行病学》《临床流行病学》《医学伦理学》《健康行为学》；研究生《现代流行病学》《临床流行病学》《医学现场调查技术》等教学工作。</div><div><b><font face="黑体">教学获奖</font></b><b><font face="黑体">：</font></b><b></b></div><div>2008年荣获兰州大学隆基教育教学新秀奖</div><div>2011年指导学生荣获第八届"挑战杯"甘肃省大学生课外学术竞赛特等奖，授予优秀指导教师</div><div>2014年荣获兰州大学医学院第一届青年教师讲课基本功比赛第1名</div><div>2014年荣获<font face="宋体">第四届全国高等医药院校青年教师讲课比赛三等奖</font></div><div>2015年荣获兰州大学隆基教育教学骨干奖</div><div>2015年<font face="宋体">兰州大学</font>“立德树人、润物无声”第四届我最喜欢的十大教师提名</div><div>2016年<font face="宋体">《基于中美对比的创新型人才培养体系构建与实践》</font><font face="宋体">荣获甘肃教学成果一等奖</font><font face="宋体">，</font><font face="宋体">排名第</font>2</div><div><b><font face="黑体">编写教材</font></b><b><font face="黑体">：</font></b><b></b></div><div>1.<font face="宋体">《医学统计学与</font>SPSS<font face="宋体">》编委，兰州大学出版社，</font>2011年8月</div><div>2.<font face="宋体">《管理流行病学》编委，十二五国家规划教材，人民卫生出版社，</font>2014年2月</div><div>3.<font face="宋体">《预防医学》编委，国家卫生计生委住院医师规范化培训规划教材，人民卫生出版社，</font>2015年7月</div><div>4<font face="宋体">．《全球健康研究方法》编委，十三五国家规划教材，人民卫生出版社，</font>2018年4月</div><div><b><font face="黑体">科研工作：</font></b><b></b></div><div><font face="宋体">研究兴趣为慢性病流行病学、卫生总费用核算研究、疾病负担评价、出生缺陷流行病学、行为与伤害流行病学等领域。在</font>“J REPROD MED”、“BMC PEDIATR”、“BIOMED ENVIRON SCI”、“中华流行病学”、“卫生研究”、“中国公共卫生”、“中国卫生统计”“中国卫生经济”“中国卫生资源”等发表论文150余篇，<font face="宋体">副主编出版专著</font>1部。参加包括1项国家科技重大专项、2项国家科技支撑计划、2项国家自然科学基金、3项国际合作项目在内的科研项目10项，主持国家卫生发展研究中心、甘肃省卫计委、中央高校等项目16<font face="宋体">项。</font></div><div><b><font face="黑体">科研获奖</font></b><b><font face="黑体">：</font></b><b></b></div><div>2005<font face="宋体">年《甘肃省出生缺陷致病因素的调查研究》甘肃省科技进步二等奖，排名第四</font></div><div>2006年《甘肃省出生缺陷致病因素研究》全国人口与计划生育科技成果二等奖，排名第五</div><div>2007年《甘肃省卫生服务研究》甘肃省科技进步三等奖，排名第五</div><div>2012年《公共卫生问题确定中疾病负担趋势分析及预测研究》甘肃省科技进步二等奖，排名第二</div><div>2013年<font face="宋体">《兰州铁路局沿线安全供水趋势分析及对策研究》甘肃省环境科学技术三等奖，排名第三</font></div><div>2017年<font face="宋体">《</font>NX<font face="宋体">方案在局部晚期乳腺癌新辅助化疗中的应用研究</font><font face="宋体">》兰州市科技进步二等奖，排名第四</font></div><div><b><font face="黑体">联系方式</font></b><b><font face="黑体">：</font></b><b></b></div><div><font face="宋体">电话</font><font face="宋体">：</font>0931-8915604</div><div><font face="宋体">邮箱</font><font face="宋体">：</font>huxiaobin@lzu.edu.cn</div></div>'
				},
				{
					nam: "张莹",
					img: "img/pic5.png",
					txt: '<div><font><font face="宋体">张莹，女，汉族，</font>1985<font face="宋体">年生，博士，讲师，公共卫生专业学位硕士生导师。</font><font face="宋体">教学及研究方向</font><font face="宋体">为</font><font face="宋体">营养与食品卫生学，</font><font face="宋体">青藏高原乳酸菌种质资源发掘、创新与利用</font><font face="宋体">。近五年</font><font face="宋体">主持和</font><font face="宋体">参与科研项目</font>9<font face="宋体">项</font><font face="宋体">，</font><font face="宋体">其中</font><font face="宋体">主持</font>1<font face="宋体">项国家自然基金</font><font face="宋体">和</font>3<font face="宋体">项中央高校基本科研业务</font><font face="宋体">费</font><font face="宋体">，参与国际合作项目</font>2<font face="宋体">项，其余项目</font>3<font face="宋体">项；</font><font face="宋体">发表学术论文</font>10<font face="宋体">余篇，其中以第一作者发表</font>SCI<font face="宋体">论文</font>4<font face="宋体">篇，</font>CSCD 2<font face="宋体">篇</font><font face="宋体">。</font></font></div><div></div><div><font>&nbsp;</font></div><div><font><b><font face="宋体">主要学习工作简历：</font></b><b></b></font></div><div><font>2003.9-2007.6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">甘肃农业大学 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;草业科学 &nbsp;学士</font></font></div><div><font>2007.9-2010.6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">兰州大学</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">草业科学</font><font face="宋体">（动物营养方向）</font>&nbsp;&nbsp;<font face="宋体">硕士</font></font></div><div><font>2010.6-2010.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">马来西亚博特拉大学（</font>UPM) &nbsp;<font face="宋体">生命科学院 &nbsp;</font><font face="宋体">交流访学</font></font></div><div><font>2010.9-2014.6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">兰州大学</font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">草业科学（动物营养方向）</font> &nbsp;<font face="宋体">博士</font></font></div><div><font>2012.9-2013.9&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">美国农业部南方农业研究中心 &nbsp;<font face="宋体">解毒微生物方向</font>&nbsp;&nbsp;&nbsp;<font face="宋体">联合</font><font face="宋体">培养博士</font></font></font></div><div><font>2014.7-至今 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font face="宋体">兰州大学公共卫生学院营养与食品卫生学</font>&nbsp;&nbsp;&nbsp;<font face="宋体">研究所</font>&nbsp;&nbsp;&nbsp;<font face="宋体">讲师</font></font></div><div><font><font face="宋体">&nbsp;</font></font></div><div><font><font face="宋体">&nbsp;</font></font></div><div><font><font face="宋体"><b><font face="宋体">教学科研工作及成果：</font></b><b></b></font></font></div><div><font><font face="宋体"><font face="宋体">主要</font><font face="宋体">承担本科生</font><font face="宋体">《营养与食品卫生学》</font><font face="宋体">、《食物、营养与健康》、</font><font face="宋体">《食品安全与人体健康》以及《秘书学》等</font><font face="宋体">课程。</font><font face="宋体">目前正在开展有关乳酸菌果蔬保鲜以及少数民族营养状况与影响因素等方面的研究。</font></font></font></div><div><font><font face="宋体">&nbsp;</font></font></div><div><font><font face="宋体"><font face="宋体">发表论文：</font></font></font></div><div><font><font face="宋体">1)&nbsp;<b>Y. Zhang</b>, R. J. Long, R. C. Anderson*, M. E. Hume, J. A. Coverdaled, E. A. Latham, D. J. Nisbet (2016). Characterization of Nitrate-Reducing and Amino Acid-Utilizing Bacteria Prominent in Nitrotoxin-Enriched Equine Cecal Populations. <b><i>Journal of Equine Veterinary Science.</i></b>&nbsp;doi: 10.1016/j.jevs.2016.04.007.</font></font></div><div><font><font face="宋体">2)<b>&nbsp;</b><b>Y. Zhang</b>, R. J. Long, C. M. Warzecha, J. A. Coverdaled, E. A. Latham, M. E. Hume, T. R. Callaway, M. R. O’ Neile, R. C. Anderson, D. J. Nisbet (2013). Characterization of bovine ruminal and equine cecal microbial populations enriched for enhanced nitro-toxin metabolizing activity. <b><i>Anaerobe</i></b>. 26, 7-13.</font></font></div><div><font><font face="宋体">3)&nbsp;<b>Y. Zhang</b>, J.W. Zhou, X.S. Guo, G.X. Cui, L.M. Ding, H.C. Wang, L.W. Li and R.J. Long (2012). Influences of dietary nitrogen and non-fiber carbohydrate levels on apparent digestibility, rumen fermentation and nitrogen utilization in growing yaks fed low quality forage based-diet. <b><i>Livestock Science</i></b>. 147, 139-147.</font></font></div><div><font><font face="宋体">4)&nbsp;X. S. Guo,<b>&nbsp;Y. Zhang</b>, J. W. Zhou, R. J. Long, G. S. Xin, B. Qi, L. M. Ding and H. C. Wang (2012). Nitrogen metabolism and recycling in yaks (<i>Bos grunniens</i>) offered a forage–concentrate diet differing in N concentration. <b><i>Animal Production Science</i></b>. 52, 287-296. <b><font face="宋体">共同一作</font></b></font></font></div><div><font><font face="宋体">5)<b>&nbsp;</b>C. L. Zhong, J. P. Kang, G. S. Stewart, J. W. Zhou<font face="宋体">，</font><font face="Arial">X. D. Huang, J. D. Mi,J. Liu, C. Yang , </font><b>Y. Zhang </b>and R. J. Long (2016). Comparison of aquaporin-1 expression between yak (<i>Bos grunniens</i>) and indigenous cattle (<i>Bos taurus</i>) in the Qinghai<font face="宋体">–</font><font face="Arial">Tibetan Plateau. </font><b><i>Animal Production Science</i></b>. http://dx.doi.org/10.1071/AN15702. </font></font></div><div><font><font face="宋体">6)&nbsp;Ding L.M., Wang Y.P., Kreuzer M., Guo X.S., Mi J.D., Gou Y.J., Shang Z.H.,<b>&nbsp;Zhang Y.</b>, Zhou J.W., Wang H.C., Long R.J. 2013. Seasonal variations in the fatty acid profile of milk from yaks grazing on the Qinghai-Tibetan plateau. <b><i>Journal of Dairy Research</i></b>, 80:410-417. </font></font></div><div><font><font face="宋体">7)&nbsp;X. S. Guo, Ruijun Long, Michael Kreuzer, Luming Ding, Zhanhuan Shang, <b>Ying Zhang</b>, Yang Yang and Guangxin Cui (2011). Importance of functional ingredients in yak milk derived food from alpine region on health of Tibetan nomads living under high altitude stress. <b><i>Critical Reviews in Food Science and Nutrition</i></b>. (in press, doi: 10.1080/10408398.2011.58413) </font></font></div><div><font><font face="宋体">8)&nbsp;X.S. Guo, W. Cheng,<b>&nbsp;Y. Zhang</b>, F.Y. Yang, H. Zhou (2011). Contribution of Endopeptidase to the Formation of Nonprotein Nitrogen during the Ensiling process of Alfalfa. <b><i>Animal Feed Science and Technology</i></b>, 168, 42-50. </font></font></div><div><font><font face="宋体">9)&nbsp;T. Sun, RJ Long, ZY Liu, WR Ding and <b>Y Zhang</b>&nbsp;(2012). Aspects of lipid oxidation of meat from free-range broilers consuming a diet containing grasshoppers on alpine steppe of the Tibetan Plateau. <b><i>Poultry Science</i></b>. 91/1:224-231. </font></font></div><div><font><font face="宋体">10)&nbsp;<b><font face="宋体">张莹</font></b><font face="宋体">，</font><font face="宋体">郭旭生，龙瑞军，周建伟，朱玉环，米见对</font>. <font face="宋体">饲粮氮水平对牦牛瘤胃发酵及营养物质消化代谢特征的影响</font><font face="Arial">. </font><b><font face="宋体">动物营养学报</font></b>. 2011<font face="宋体">，</font><font face="Arial">23</font><font face="宋体">（</font><font face="Arial">6</font><font face="宋体">）</font><font face="Arial">:956-964.</font></font></font></div><div><font><font face="宋体">11)&nbsp;<b><font face="宋体">张莹</font></b><font face="宋体">，郭旭生，丁路明，龙瑞军</font>. <font face="宋体">反刍动物尿素氮再循环利用的研究进展</font><font face="Arial">. </font><b><font face="宋体">动物营养学报</font></b>. 2009<font face="宋体">，</font><font face="Arial">21</font><font face="宋体">（</font><font face="Arial">5</font><font face="宋体">）</font><font face="Arial">:609-616.</font></font></font></div><div><font><font face="宋体">12)&nbsp;<font face="宋体">米见对，郭旭生，周建伟，辛国省，</font><b><font face="宋体">张莹</font></b><font face="宋体">，朱玉环，龙瑞军</font>. <font face="宋体">日粮氮水平对牦牛瘤胃发酵参数和氮组分的影响</font><font face="Arial">. </font><b><font face="宋体">中国农业科学</font></b><font face="宋体">，</font>2011<font face="宋体">，</font><font face="Arial">44</font><font face="宋体">（</font><font face="Arial">22</font><font face="宋体">）</font><font face="Arial">:4678-4686.</font></font></font></div><div><font><font face="宋体">13)&nbsp;<b>Y. Zhang</b>, R. J. Long, R. C. Anderson, M. E. Hume, J. A. Coverdaled, E. A. Latham, D. J. Nisbet (2015). Characterization of Prominent Nitrate-Reducing and Amino Acid-Utilizing Bacteria from Nitrotoxin-Enriched Equine Cecal Populations. Proceedings of the Fifth International Conference on Sustainable Animal Agriculture for Developing Countries (SAADC 2015), 26-29 October 2015, Pattaya, Thailand, pg. 277</font></font></div><div><font><font face="宋体">14)&nbsp;<b>Y. Zhang,</b>&nbsp;R. C. Anderson, R. J. Long, D. J. Nisbet (2013). Effects of Gas Phase, Formate and Nitrate on Nitropropionic Acid Metabolizing Activity of Mixed Populations of Bovine Ruminal and Equine Cecal Microbes. Proceedings of Congress on Gastrointestinal Function, 15-17 April 2013, Chicago, USA, pg. 33</font></font></div><div><font><font face="宋体">15)&nbsp;<b>Y. Zhang</b>, X. S. Guo, X. D. Huang, R. J. Long (2010). Adaptation of Nitrogen Metabolism in Yak to the Harsh Foraging Environment of the Qinghai-Tibetan Plateau. Proceedings of the 14th AAAP Animal Science Congress,&nbsp;23-27 August 2010, Pingtung, Taiwan, p. 546</font></font></div><div><font><font face="宋体">&nbsp;</font></font></div><div><font><font face="宋体">EMALL<font face="宋体">：</font>yingz@lzu.edu.cn </font></font>'
				},
				{
					nam: "代鹏",
					img: "img/pic6.png",
					txt: "<div>兰州翼途动漫文化传播有限公司技术总监。</div><div><br/><b>工作简历：</b></div><div>兰州翼途动漫文化传播有限公司2009年工作至今</div><div>文化旅游部文化产业创业创意人才</div><div><br/><b>社会职务：</b></div><div>2017年兰州市百佳“兰州好人”称号</div><div>甘肃农业大学创业导师</div><div>甘肃省文化产业协会 理事</div><div>甘肃省动漫产业协会 理事</div><div>兰州设计师协会 副会长</div><div>甘肃省新媒体艺术协会 会员</div>"
				},
				{
					nam: "常旭红",
					img: "img/pic7.png",
					txt: '<font><div><font>常旭红，兰州大学公共卫生学院卫生毒理学研究所，副教授，博士，硕士研究生导师，主要从事纳米氧化镍毒效应及慢性病危险因素防控研究。邮箱：<a href="mailto:changxh@lzu.edu.cn">changxh@lzu.edu.cn</a></font></div><div><font><b></b></font>&nbsp;</div><div><font><b>一、</b><b>学习</b><b>经历</b><b></b></font></div><div><font>2011/3-2014/6，东南大学公共卫生学院，流行病与卫生统计学，医学博士</font></div><div><font>2006/9-2009/6，兰州大学公共卫生学院，卫生毒理学，医学硕士</font></div><div><font>2001/9-2006/6，兰州大学公共卫生学院，预防医学，医学学士</font></div><div><font><b></b></font>&nbsp;</div><div><font><b>二、</b><b>工作</b><b>经历</b><b></b></font></div><div><font>2018/7-至今，兰州大学公共卫生学院卫生毒理学研究所，副教授</font></div><div><font>2016/9-至今，中共兰州大学公卫院营养所与毒理所教工党支部，书记</font></div><div><font>2016/9-至今，兰州大学公共卫生学院2016级预防医学本科生，班主任</font></div><div><font>2016/3-2016/8，中共兰州大学公卫院营养所与毒理所教工党支部，副书记</font></div><div><font>2016/3-至今，兰州大学公共卫生学院工会，文体委员</font></div><div><font>2015/9-至今，兰州大学公共卫生学院卫生毒理学研究所，秘书</font></div><div><font>2014/7-2018/6，兰州大学公共卫生学院卫生毒理学研究所，讲师</font></div><div><font>2009/7-2011/2，蚌埠医学院预防医学系卫生学教研室，助教</font></div><div><b><font></font></b>&nbsp;</div><div><b><font>三、教学</font></b><b></b></div><div><font>主要承担《卫生毒理学》、《预防医学》、《医学科研设计与论文书写》和《医学史》等课程的讲授，发表教学论文3篇，参与兰州大学教学改革项目《预防医学教学改革与模式探索》1项，指导本科生国创项目4项和校创项目3项。</font></div><div><b><font></font></b>&nbsp;</div><div><b><font>四、主要科研项目</font></b><b></b></div><div><font>[1] 国家自然科学基金青年项目，81602874，TGF-β1介导的信号通路诱发EMT在纳米NiO致肺纤维化中的作用，2017/01-2019/12，主持。</font></div><div><font>[2]&nbsp;兰州市城关区科技局项目，2017-7-12，姜黄素对化学性肝损伤的治疗作用研究，2017/06-2019/05，主持。</font></div><div><font>[3]&nbsp;兰州市科技计划项目，2016-3-109，兰州市农村介水传染病预防控制技术研究与推广，2016/01-2018/12，主持。</font></div><div><font>[4]&nbsp;兰州大学中央高校基本科研业务费专项资金自由探索项目，lzujbky-2017-85，TGF-β1/Smads/MAPK在纳米NiO致肺纤维化中的作用及其差异表达lncRNA筛选，2017/01-2018/12，主持。</font></div><div><font>[5]&nbsp;兰州大学中央高校基本科研业务费专项资金自由探索项目，lzujbky-2015-186，纳米氧化镍肺毒效学及其PBTK模型研究，2015/01-2016/06，主持。</font></div><div><font>[6]&nbsp;甘肃省疾病预防控制中心委托项目，(15)0183，慢性病危险因素研究，2015/06-2016/06，主持。</font></div><div><font>[7]&nbsp;甘肃省疾病预防控制中心委托项目，(15)0182，肽基脯氨酸顺反异构酶启动子的遗传变异与武威地区胃癌环境危险因素的交互作用，2015/06-2016/06，主持。</font></div><div><font>[8]&nbsp;国家自然科学基金，31872757，lncRNA调控TGF-β1在纳米NiO致肺纤维化中的作用及分子机制，参与。</font></div><div><font>[9]&nbsp;国家自然科学基金，41875139，寒冷刺激影响肠道微生物及代谢改变与诱发高血压的关系和机制研究，参与。</font></div><div><font>[10]&nbsp;国家自然科学基金，81803188，Loc101928316介导Wnt通路在致癌物MNNG诱发胃癌中的作用机制研究，参与。</font></div><div><font>[11]&nbsp;国家自然科学基金，81550046，甲状腺功能减退雄性生殖影响及其致睾丸线粒体氧化损伤的机制研究，参与。</font></div><div><font>[12]&nbsp;兰州市人才创新创业项目，2017-RC-79，天然植物化学物联合治疗酒精性肝损伤的开发研究，2018/01-2019/12，参与。</font></div><div><font>[13]&nbsp;兰州市城关区科技局项目，2016-7-12，原花青素对抗肿瘤药物顺铂染毒大鼠睾丸细胞损伤的保护作用研究，2016/06-2018/05，参与。</font></div><div><b><font></font></b>&nbsp;</div><div><b><font>五、主要科研论文</font></b><b></b></div><div><font>[1]&nbsp;<b>Xuhong Chang</b>, Hongjun Zhao, Jinxia Gao, Lijuan chen, An Zhu, Cheng Wang, Shu Yu, Xiaolan Ren, Pengfei Ge, Yingbiao Sun. Pulmonary toxicity of exposure to nano nickel oxide. Micro &amp; Nano Letters. 2018, 13(6): 733-738.</font></div><div><font>[2]&nbsp;Minmin Tian, Fangfang Liu, Han Liu, Qiong Zhang, Lei Li, Xiangbo Hou, Jianxin Zhao, Sheng Li, <b>Xuhong Chang</b>, Yingbiao Sun. GSPE attenuates Cis-induced oxidative stress and testosterone synthase inhibition in rat testes. Syst Biol Repro Med. 2018, 290(3): 246-259.（通讯）</font></div><div><font>[3]&nbsp;Shu Yu, Fangfang Liu, Chen Wang, Jinyi Zhang, An Zhu, Lingyue Zou, Aijie Han, Jin Li, <b>Xuhong Chang</b>, Yingbiao Sun. Role of oxidative stress in liver toxicity induced by nickel oxide nanoparticles in rats. Mol Med Rep. 2018, 17(1): 3133-3139. （通讯）</font></div><div><font>[4]&nbsp;<b>Chang Xuhong</b>, Liu Fangfang, Tian Minmin, Hongjun Zhao, Aijie Han, Yingbiao Sun. Nickel oxide nanoparticles induce hepatocyte apoptosis via activating endoplasmic reticulum stress pathways in rats. Environ Toxicol. 2017, 32(12): 2492-2499. </font></div><div><font>[5]&nbsp;<b>Xuhong Chang</b>, An Zhu, Fangfang Liu, Lingyue Zou, Li Su, Sheng Li, Yingbiao Sun. Role of NF-κB Activation and Th1/Th2 Imbalance in Pulmonary Toxicity Induced by Nano NiO. Environ Toxicol. 2017, 32(4): 1354-1362. </font></div><div><font>[6]&nbsp;<b>Xuhong Chang</b>, An Zhu, Fangfang Liu, Lingyue Zou, Li Su, Shaokun Liu, Honghua Zhou, Yanyan Sun, Aijie Han, Yifan Sun, Sheng Li, Jin Li, Yingbiao Sun. Nickel oxide nanoparticles induced pulmonary fibrosis via TGF-beta1 activation in rats. Hum Exp Toxicol. 2017, 36(8): 802-812. </font></div><div><font>[7]&nbsp;Fangfang Liu, <b>Xuhong Chang</b>, Minmin Tian, An Zhu, Lingyue Zou, Aijie Han, Li Su, Sheng Li, Yingbiao Sun. Nano NiO induced liver toxicity via activating the NF-κB signaling pathway in rats. Toxicol Res. 2017, 6(2): 242-250. （共同第一）</font></div><div><font>[8]&nbsp;An Zhu, <b>Xuhong Chang</b>, Yingbiao Sun, Lingyue Zou, Li Su, Yifan Sun, Sheng Li, Shaokun Liu, Yanyan Sun, Honghua Zhou, Jin Li. Role of oxidative stress and inflammatory response in subchronic pulmonary toxicity induced by nano nickel oxide in rats. J Nanosci Nanotechno. 2017, 17(3): 1753-1761. （共同第一）</font></div><div><font>[9]&nbsp;<b>Xuhong Chang</b>, Yanxin Xie, Jianru Wu, Meng Tang, Bei Wang. Toxicological characteristics of titanium dioxide nanoparticles in rats. J Nanosci Nanotechno. 2015, 15(2): 1135-1142. </font></div><div><font>[10]&nbsp;<b>Xuhong Chang</b>, Liangjia Zhou, Meng Tang, Bei Wang. Association of fine particles with respiratory disease mortality: A meta-analysis. Arch Environ Occup H. 2015, 70(2): 98-101.</font></div><div><font>[11]&nbsp;<b>Xuhong Chang</b>, Yanyun Fu, Yingjian Zhang, Meng Tang, Bei Wang. Effects of Th1 and Th2 cells balance in pulmonary injury induced by nano titanium dioxide. Environ toxicol phar. 2014, 37(1): 275-283.</font></div><div><font>[12]&nbsp;<b>Xuhong Chang</b>, Yu Zhang, Meng Tang, Bei Wang. Health effects of exposure to nano-TiO2:A meta-analysis of experimental studies. Nanoscale Res Lett. 2013, 8(1): 1-8.</font></div><div><font>[13]&nbsp;Yanyun Fu, Yanqiu Zhang, <b>Xuhong Chang</b>, Yingjian Zhang, Shumei Ma, Jing Sui,&nbsp;Lihong Yin, Yuepu Pu,&nbsp;Geyu Liang. Systemic immune effects of titanium dioxide nanoparticles after repeated intratracheal instillation in rat. Inter J Molecu Sci.&nbsp;2014, 15(4): 6961-6973.</font></div><div><font>[14]&nbsp;Han Aijie, Zou Lingyue, Gan Xiaoqin, Li Yu, Liu Fangfang, <b>Chang Xuhong</b>, Zhang Xiaotian, Tian Minmin, Li Sheng, Su Li, Sun Yingbiao. ROS generation and MAPKs activation contribute to the Ni-induced testosterone synthesis disturbance in rat Leydig cells. Toxicol Lett. 2018, 290: 36-45. </font></div><div><font>[15]&nbsp;Lingyue Zou, Li Su, Yifan Sun, Aijie Han, <b>Xuhong Chang</b>, An Zhu, Fangfang Liu, Jin Li, Yingbiao Sun. Nickel sulfate induced apoptosis via activating ROS-dependent mitochondria and endoplasmic reticulum stress pathways in rat Leydig cells. Environ Toxicol. 2017, 32(7): 1918-1926. </font></div><div><b><font></font></b>&nbsp;</div><div><b><font>六、获奖</font></b><b></b></div><div><font>[1] &nbsp;2018年《肽基脯氨酸顺反异构酶的遗传变异与武威地区胃癌环境危险因素的交互作用》，甘肃省医学会三等奖，排名第四；</font></div><div><font>[2] &nbsp;2018年度兰州大学毕业论文（设计）优秀指导教师；</font></div><div><font>[3] &nbsp;2017年度中共兰州大学基层组织建设年优秀党支部书记；</font></div><div><font>[4] &nbsp;2017年度公共卫生学院优秀党员；</font></div><div><font>[5] &nbsp;2017年度兰州大学教学成果二等奖；</font></div><div><font>[6] &nbsp;2017年度兰州大学公共卫生学院第三届青年教师讲课比赛一等奖；</font></div><div><font>[7] &nbsp;2017年度兰州大学医学院第四届青年教师教学基本功比赛二等奖。</font></div><p align="center"><font></font></p></font>'
				},
				{
					nam: "艾世伟",
					img: "img/pic8.png",
					txt: '<font><p><font><font face="宋体">艾世伟</font><font face="宋体">，</font><font face="宋体">博士</font><font face="宋体">，</font><font face="宋体">讲师</font><font face="宋体">，</font><font face="宋体">邮箱：</font><a href="mailto:aishw@lzu.edu.cn">aishw@lzu.edu.cn</a></font></p><p><b><font face="宋体">教育背景</font></b></p><p><font>2013<font face="宋体">年</font>9<font face="宋体">月</font>-2018<font face="宋体">年</font>6<font face="宋体">月</font><font face="宋体">，兰州大学，动物学，博士</font></font></p><p><font>2009<font face="宋体">年</font>9<font face="宋体">月</font>-2013<font face="宋体">年</font>6<font face="宋体">月</font><font face="宋体">，兰州大学，生物技术，学士</font></font></p><p><b><font face="宋体">工作经历</font></b><b></b></p><p><font>2018<font face="宋体">年</font>9<font face="宋体">月</font><font face="宋体">至今，兰州大学公共卫生学院儿少卫生与妇幼保健学研究所，助教</font></font></p><p><b><font face="宋体">荣誉、获奖</font></b><b></b></p><p><font>2016-2017<font face="宋体">学年兰州大学“三好”研究生；</font></font></p><p><font>2016-2017<font face="宋体">学年兰州大学“优秀学生党员”；</font></font></p><p><font>2010<font face="宋体">年兰州大学暑期社会实践“优秀队员”；</font></font></p><p><font>2009-2010<font face="宋体">学年度“兰州大学学生社团优秀成员”</font><font face="宋体">。</font></font></p><p><b><font face="宋体">主讲课程</font></b><b></b></p><p><font face="宋体">担任《卫生毒理学》助教</font></p><p><b><font face="宋体">社会服务</font></b><b></b></p><p><b><font face="宋体">研究方向</font></b><b></b></p><p><font><font face="宋体">生态毒理学</font><font face="宋体">；</font><font face="宋体">食品安全</font></font></p><p><b><font face="宋体">科研项目</font></b><b></b></p><p><font><font face="宋体">国家自然科学基金项目（</font>31572216<font face="宋体">）环境污染致食物变化对（树）麻雀繁殖对策的影响研究</font><font face="宋体">，</font>2016-2019<font face="宋体">年；</font><font face="宋体">（参与）</font></font></p><p><font><font face="宋体">省科技支撑计划项目（</font>1504NKCA082<font face="宋体">）白银地区农作物间作模式对土壤重金属的去除效应研究与示范，</font><font face="Times New Roman">2015-2017</font><font face="宋体">年；</font><font face="宋体">（参与）</font></font></p><p><font><font face="宋体">国家自然科学基金项目（</font>41171391<font face="宋体">）黄河上游农业生态系统中复合污染物的环境过程与生态效应，</font><font face="Times New Roman">2012-2015</font><font face="宋体">年</font><font face="宋体">。</font><font face="宋体">（参与）</font></font></p><p><b><font face="宋体">发表论文与专著</font></b><b></b></p><p><font>1. <b>Shiwei Ai</b>, Bailin Liu, Ying Yang, Jian Ding, Wenzhi Yang, Xiaojuan Bai, Sajid Naeem, Yingmei Zhang*. Temporal variations and spatial distributions of heavy metals in a wastewater-irrigated soil-eggplant system and associated influencing factors. <i>Ecotoxicology and Environmental Safety</i>, 2018, 153:204-214. </font></p><p><font>2.<b> Shiwei Ai</b>, Rui Guo, Bailin Liu, Liang Ren, Sajid Naeem, Wenya Zhang, Yingmei Zhang*. A field study on the dynamic uptake and transfer of heavy metals in Chinese cabbage and radish in weak alkaline soils. <i>Environmental Science and Pollution Research</i>, 2016, 23(20):20719-20727. </font></p><div>&nbsp;</div></font>'
				},
				{
					nam: "王龙",
					img: "img/pic9.png",
					txt: '<font id="Zoom"><p><font><b>王龙：</b>1989年9月出生，中共党员，博士，兰州大学流行病与卫生统计学研究所讲师</font></p><p><font><b>联系邮箱：</b>wanglsph@lzu.edu.cn</font></p><p><b><font>主要学习经历：</font></b><b></b></p><p><font>2017/09-2012/06：兰州大学，公共卫生学院，学士</font></p><p><font>2012/09-2015/06：兰州大学，流行病与卫生统计学研究所，硕士</font></p><p><font>2015/09-2018/07：北京协和医学院，国家卫生计生委科学技术研究所，博士</font></p><p><b><font>主讲课程：</font></b><b></b></p><p><font>流行病学、临床流行病学、医学伦理学</font></p><p><b><font>研究兴趣：</font></b><b></b></p><p><font>1、空气污染与健康</font></p><p><font>2、生殖健康流行病学</font></p><p><font>3、医疗健康实践活动中的知识挖掘</font></p><p><b><font>参与项目：</font></b><b></b></p><p><font>1、国家级项目</font></p><p><font>科技部十三五国家重点研发计划，生殖遗传资源和生殖健康大数据平台建设与应用示范（参与）</font></p><p><font>国家自然基金面上项目青年基金，妊娠期血清vaspin水平变化及其妊娠期糖尿病发病关系的前瞻性队列研究（参与）</font></p><p><font>2、国际合作项目</font></p><p><font>世界糖尿病基金项目-子课题，建立有生育需求的育龄期女性孕前糖尿病筛查模式（参与）</font></p><p><font>3、政府委托课题</font></p><p><font>卫计委妇幼司委托课题，出生缺陷防控与不良妊娠结局相关因素分析（参与）</font></p><p><font>卫计委妇幼司委托课题，慢性病等危险因素孕前孕期协同防控临床路径与指南研究（参与）</font></p><p><font>4、中央级公益性项目</font></p><p><font>科研所基本科研业务费专项重点项目，孕前TSH水平与妊娠期甲功异常的相关性与干预切点值的前瞻性研究（参与）</font></p><p><font>5、企业合作横向课题</font></p><p><font>默克雪兰诺横向课题，育龄女性孕前至孕期甲状腺筛查及高危人群临床干预路径研究（参与）</font><b></b></p><p><b><font>主要科研论文：</font></b><b></b></p><p><font>1、Yang Ying, Liu Fangchao, <b>Wang Long</b>, et al. Association of husband smoking with wife\'s hypertension status in over 5 million Chinese females aged 20 to 49 years. Journal of American Heart Association. 2017 Mar 20;6(3). （共同第一）</font></p><p><font>2、<b>Wang Long</b>, Yang Ying, Liu Fangchao, et al. Paternal smoking and spontaneous abortion: a population-based retrospective cohort study among non-smoking women aged 20-49 years in rural China. Journal of epidemiology and community health 2018, 72(9):783-789.</font></p></font>'
				},
				{
					nam: "田恬",
					img: "img/pic10.png",
					txt: '<font><p><font><font face="宋体">田恬，</font>1988<font face="宋体">年生，甘肃甘谷人，中共党员，博士，讲师</font></font></p><p><b><font face="宋体">主要学习与工作经历</font></b><b></b></p><p><font>2018.07~<font face="宋体">至今：兰州大学公共卫生学院，劳动卫生与环境卫生研究所，讲师；</font></font></p><p><font>2011.09~2018.06<font face="宋体">：兰州大学生命科学学院植物学专业，硕博连读，博士；</font></font></p><p><font>2007.09~2011.06<font face="宋体">：甘肃农业大学草业学院草业科学专业，学士</font></font></p><p><b><font face="宋体">主要研究领域与方向</font></b><b></b></p><p><font face="宋体">特殊环境微生物与健康</font></p><p><b><font face="宋体">代表性论文</font></b></p><p><font>l&nbsp;<b><u>Tian T</u></b>, Wu FS, Ma YT, Xiang T, Ma WX, Hu WG, Wu GW, An LZ, Wang WF, Feng HY (2017) Description of <i>Naumannella cuiyingiana</i>&nbsp;sp. nov., isolated from a ca. 1500-year-old mural painting, and emended description of the genus <i>Naumannella</i>. <i>International Journal of Systematic and Evolutionary Microbiology</i>&nbsp;<b>67</b>: 2609-2614.</font></p><p><font>l&nbsp;Hu WG, Zhang Q, <b><u>Tian T</u></b>, Li DY, Cheng G, Mu J, Wu QB, Niu FJ, An LZ, Feng HY (2016) Characterization of the prokaryotic diversity through a stratigraphic permafrost core profile from the Qinghai-Tibet Plateau. <i>Extremophiles</i>&nbsp;<b>20</b>: 337-349.</font></p><p><font>l&nbsp;Hu WG, Zhang Q, <b><u>Tian T</u></b>, Cheng GD, An LZ, Feng HY (2015) The microbial diversity, distribution, and ecology of permafrost in China: a review. <i>Extremophiles</i>&nbsp;<b>19</b>: 693-705.</font></p><p><font>l&nbsp;Hu WG, Zhang Q, <b><u>Tian T</u></b>, Li DY, Cheng G, Mu J, Wu QB, Niu FJ, James C. Stegen, An LZ, Feng HY (2015) Relative roles of deterministic and stochastic processes in driving the vertical distribution of bacterial communities in a permafrost core from the Qinghai-Tibet Plateau, China. <i>PLoS ONE</i>&nbsp;<b>10</b>: e0145747.</font></p><p><font>l&nbsp;Ma YT, Zhang H, Du Y, <b><u>Tian T</u></b>, Xiang T, Liu XD, Wu FS, An LZ, Wang WF, Gu JD, Feng HY (2015) The community distribution of bacteria and fungi on ancient wall paintings of the Mogao Grottoes. <i>Scientific Reports</i>&nbsp;<b>5</b>: 7752.</font></p><p><b><font face="宋体">联系方式</font></b><b></b></p><p><font><font face="宋体">电子邮件：</font>tiant@lzu.edu.cn</font></p><div>&nbsp;</div></font>'
				},
				{
					nam: "陈仁彤",
					img: "img/pic11.png",
					txt: "<div><b>基本资料：</b></div><div>陈仁彤，1991年生，辽宁省营口市人，博士，讲师</div><br/><div><b>主要学习与工作经历：</b></div><div>2019.07-至今 兰州大学公共卫生学院，劳动卫生与环境卫生研究所 讲师；</div><div>2014.09-2019.07  中国医科大学劳动卫生与环境卫生学专业，硕博连读，博士；</div><div>2009.09-2014.07  中国医科大学预防医学专业，学士</div><br/><div><b>主要研究领域与方向：</b></div><div>环境物理因素对健康的影响（紫外线生物效应等）；职业与健康</div><br/><div><b>科研情况：</b></div><div>1. 国家自然科学基金项目“我国眼部损伤有效紫外线暴露强度分布规律研究及老年性白内障危险性评价”，2013.01-2016.12，参与</div><div>2. 国家自然科学基金项目“低剂量UVA对眼晶状体羊毛甾醇及其上游主要限速酶负性调节机制研究”，2017.01-2020.12，参与</div><br/><div><b>代表性论文：</b></div><div>1.  Chen Rentong, Wang Nan, Hua Hui, Huang Liting, Li Menglin, Zou Zhenzhen, Ma Fangfang, Li Xin, Yang Dan, Deng Yan, Ou Fengrong and Liu Yang*, Optical Modeling and Physical Experiments on Ocular UV Manikins Exposure, IEEE Access 2019, 7:478-86.</div><div>2.  Wu B, Ou F, Deng Y, Liu R, Hua H, Chen R, Guan Y, Yang D, Gjesteby L, Yang J et al: E-Index—A Bibliometric Index of Research Efficiency. IEEE Access 2018, 6:51355-51364.</div><div>3.  Wang F, Gao Q, Deng Y, Chen R, Liu Y*: Risk Assessment of Face Skin Exposure to UV Irradiance from Different Rotation Angle Ranges. Int J Env Res Pub He 2017, 14(6):606.</div><br/><div><b>联系方式</b></div><div>电子邮件：chenrt@lzu.edu.cn</div>"
				}
			]
		},
		net: {
			nam: "网络要求",
			sub: [
				{
					nam: "有效链接",
					txt: "<a href=\"http://101.200.45.232/\" target=\"_blank\">101.200.45.232</a>"
				},
				{
					nam: "网络条件要求",
					txt: "<br/>一、说明客户端到服务器的带宽要求（需提供测试带宽服务）<div>本项目采用了按需下载技术，采取边使用边下载的技术模式，虚拟课件的下载最低要求带宽为100Mbps，约30秒完成全部下载。</div><br/>二、说明能够支持的同时在线人数 500人（需提供在线排队提示服务）"
				},
				{
					nam: "系统要求",
					anm: "用户操作<br/>系统要求",
					txt: "<br/>一、计算机操作系统和版本要求<div>windows7/8/10主流操作系统</div><br/>二、其他计算终端操作系统和版本要求<div>安装有flash播放插件的Android系统的手机，平板等。</div><br/>三、支持移动端：☑ 是 &nbsp; ☐ 否"
				},
				{
					nam: "非操作系统软件配置",
					anm: "用户非操作<br/>系统软件配置",
					txt: "<br/>一、需要特定插件  ☑ 是 &nbsp; ☐ 否<div>（勾选“是”，请填写）插件名称：flash播放插件 插件容量：30M以内 <br/>下载链接  <a href=\"https://www.flash.cn/\">https://www.flash.cn/</a></div><br/>二、其他计算终端非操作系统软件配置要求（需说明是否可提供相关软件下载服务）<div>装有flash 插件的IE浏览器版本9.0以上，360/UC/QQ浏览器极速模式</div>"
				},
				{
					nam: "硬件配置要求",
					anm: "用户硬件<br/>配置要求",
					txt: "<br/>一、计算机硬件配置要求<div>CPU推荐使用intel四核以上级别；内存4G以上；显示器分辨率1920x1080以上。系统硬盘剩余空间不小于50g。</div><br/>二、其他计算终端硬件配置要求<div>无</div>"
				},
				{
					nam: "特殊外置硬件要求",
					anm: "用户特殊外<br/>置硬件要求",
					txt: "<br/>一、计算机特殊外置硬件要求<div>无</div><br/>二、其他计算终端特殊外置硬件要求<div>无</div>"
				}
			]
		},
		stc: {
			nam: "架构研发",
			sub: [
				{
					nam: "系统架构图及简要说明",
					txt: "<img width=\"100%\" src=\"/img/stc.jpg\"></img><div>系统仿真操作界面利用虚拟现实技术，以2D和3D动画技术相结合的形式，以具体的情景案例为依托，模拟真实环境下重大公共卫生事件发生时的应急处置流程和相关调查、检测实验过程。最终构建成一个完整的重大公共卫生事件应急处置综合实验虚拟学习系统。该系统包括：实验目的、实验原理、实验仪器设备、实验材料、实验教学方法、实验方法与步骤、实验结果与结论、实验考核要求、面向学生的要求九个部分。学生可在此系统中完成重大公共卫生事件应急处置的相关理论、实验、实习等学习活动。系统打造虚拟现场与真实情景一致，学习的同时能进一步提高学生对现场流行病学调查、环境调查、食品调查、职业调查等知识内容的理解能力，巩固所学的理论知识，加强学员的理解和掌握能力。</div>"
				},
				{
					nam: "实验教学项目",
					txt: "<br/>开发技术<div>☐ VR &nbsp; ☐ AR &nbsp; ☐ MR &nbsp; ☑ 3D仿真 &nbsp; ☑ 二维动画 &nbsp; ☑ HTML5</div><div>☐ 其他 _____</div><br/>开发工具<div>☐ Unity3D &nbsp; ☐ 3D Studio Max &nbsp; ☐ Maya &nbsp; ☐ ZBrush &nbsp; ☑ SketchUp</div><div>☑ Adobe Flash &nbsp; ☐ Unreal Development Kit</div><div>☑ Animate CC &nbsp; ☐ Blender &nbsp; ☑ Visual Studio</div><div>☐ 其他 _____</div><br/>运行环境<div><b>服务器</b></div><div>CPU<span class=\"ohm_ultxt\"> 2 </span>核、内存<span class=\"ohm_ultxt\"> 2 </span>GB、磁盘<span class=\"ohm_ultxt\"> 80 </span>GB、</div><div>显存 _____GB、GPU型号 _____</div><br/><div><b>操作系统</b></div><div>☐ Windows Server &nbsp; ☑ Linux</div><div>☑ 其他 具体版本<span class=\"ohm_ultxt\"> &nbsp; CentOS7.3 ；Node.js 4.8.4 &nbsp; </span></div><br/><div><b>数据库</b></div><div>☑ Mysql &nbsp; ☐ SQL Server &nbsp; ☐ Oracle</div><div>☑ 其他<span class=\"ohm_ultxt\"> &nbsp; MongoDB &nbsp; </span></div><div>备注说明 <span class=\"ohm_ultxt\"> &nbsp;（需要其他硬件设备或服务器数量多于1台时请说明） &nbsp; </span></div><br/>项目品质<div>单场景模型总面数 ： </div><div>贴图分辨率 ： 3000</div><div>动作反馈时间 ： 15 ms</div><div>显示刷新率 ： 30 ms</div><div>分辨率 ： 1920x1080</div>"
				}
			]
		},
		df: {
			nam: "项目特色",
			txt: "<br/><b>一、方案设计思路</b><div>依托兰州大学已有的预防医学学科人才培养模式，利用信息技术对于本科生课程设置中的重大公共卫生事件案例及其应急处置的相关理论、环境重金属污染状况调查的实验教学内容展开仿真。首先，学习掌握群体不明原因重大公共卫生事件的流行病学应急响应过程、环境重金属污染状况的卫生学调查、环境重金属污染物的定量检测及危险度评价是公共卫生与预防医学人才培养的目标之一，通过基于虚拟仿真的案例教学使其知识结构更趋前沿化、合理化和综合化。其次，通过仿真使学生深入理解掌握基础理论（包括流行病学和环境卫生学），促使学生综合运用本学科的理论知识解决实际问题。再次，通过计算机仿真拓展实验教学内容，引导学生对实验教学内容进行综合理解及分析，并与理论教学内容有机联系，进一步深化对于实验教学内容的认识。同时，对于部分不适宜开设的实验内容，例如群体性不明原因重大公共卫生事件的流行病学应急响应过程、环境重金属污染状况的卫生学调查过程和ICP-MS定量检测环境重金属污染物的实验技术等，可以采用仿真教学来实施。</div><br/><b>二、方法创新</b><div>本项目教学过程中以学生为中心，教师现场指导，实施“师生”互动式教学方法。仿真操作和半实物操作交互进行，实现“虚实互动”。学生交互式操作，参与感、趣味性强，角色互动，具有真实沉浸感，有利于培养对重大公共卫生事件的应急处置能力，解决传统案例讨论课学习效果差的问题。</div><div>除了传统的《预防医学》实验外，本项目包括群体性不明原因重大公共卫生事件的流行病学应急响应过程仿真、环境重金属污染状况调查仿真（包括不同来源的环境样本采集及前处理的计算机仿真和ICP-MS定量检测环境重金属污染物的计算机仿真），是传统课程所不具备的。具体包括学习并掌握群体性不明原因重大公共卫生事件的流行病学应急响应过程并根据现场流行病学调查的结果分析群体性不明原因突发公共卫生事件发生的潜在成因；学习环境重金属污染状况调查方法，例如不同来源环境样本的采样布点及其前处理方法，并对ICP-MS定量检测环境重金属污染物的实验技术进行计算机仿真模拟，通过仿真结果，模拟实测结果并计算平均值，要求学生计算各种来源样品的重金属暴露风险，对照环境标准，找出当地重金属污染的主要来源。</div><div>在教学方法上除了传统的课堂教学与上机实习外，本项目更注重与已有的实验教学的结合与互动，实现理论教学、实验教学与仿真教学的互相渗透。</div><br/><b>三、体系创新</b><div>本项目评价体系强调应急处置过程性评价，主要特色在于线上与线下自评相结合，形成了科学客观、多维一体的评价机制，学生成绩由线上实操表现和实训报告两部分组成。同时组织学生之间互评打分，以促进学生深入思考，提高参与的积极性。</div><br/><b>四、传统教学的延伸与拓展</b><div>该项目实现了信息技术与实验教学的深度融合，通过整合我校教学科研资源，将群体性不明原因重大公共卫生事件的流行病学应急响应过程、环境重金属污染状况的卫生学调查、环境重金属污染物的定量检测及危险度评价集成于一个完整的虚拟仿真实验教学项目体系中，有效地将环境流行病学、环境卫生学、卫生化学和卫生毒理学等分散的多学科知识塑造成一个整体，融合在一个实验系统中，使学生对公共卫生与预防医学由原本管中窥豹的认知水平提升至总揽全局的新高度，为建设多样化综合虚拟仿真实验教学模块提供了新的思路。</div><div>该项目实施后，不仅将服务我院预防医学专业和公共事业管理专业学生的教学工作，同时还将面向社会开放。在满足教学需求之外，能够大幅提升相关人员的专业素养，是传统教学模式的有效延伸和崭新拓展。</div>"
		},
		bld: {
			nam: "持续建设",
			txt: "<br/><b>一、项目持续建设与服务计划：</b><div>本项目今后五年内计划：在目前基础上，将当前已开设的仿真实验教学内容包括群体不明原因重大公共卫生事件的流行病学应急响应过程、环境重金属污染状况的卫生学调查、环境重金属污染物的定量检测等从仅对预防医学专业学生开设，逐步对我校公共事业管理、临床医学、麻醉学、影像学和护理学专业本科生开设，提高医学生面对群体不明原因重大公共卫生事件时的应急处置能力。此外，本团队拟针对其他已开设的实验教学课程开设仿真教学课程，初步计划再开设的两个仿真实验为：环境污染物危险度评价过程的计算机仿真、卫生政策制定及卫生经济学评价过程仿真，以此提高学生的学习兴趣和对公共卫生与预防医学学科系统知识的掌握程度。</div><br/><b>二、高校的教学推广应用计划：</b><div>本项目依托兰州大学实验教学示范中心，在今后五年内有步骤有计划地面向省内外高校包括甘肃省中医药大学、西北民族大学和山东大学等多个高校开放教学内容的全部内容，包括仿真代码，服务器的系统配置、仿真教学课件及教学安排等，特别是对中西部高校实施教学项目推广，进一步扩大开放共享范围。力争每年增加10所共享高校，并做好在线服务与保障工作，使更多的医学相关专业学生受益。此外，针对不同的实验条件和教学安排，本项目计划在未来进行不同案例或实验条件设置下的仿真，并将其发布在网站上。最后，本项目计划建设专门用于教学交流的知识管理平台，引导学生维护其内容，并全面开放。</div><br/><b>三、面向社会的推广应用计划：</b><div>本项目被认定后1年内继续面向高校和社会免费开放，并提供在线教学服务；1年后至3年内免费开放服务内容不少于50%；3年后免费开放服务内容不少于70%。同时，本项目在今后五年内计划面向疾病预防控制中心、临床医疗机构、环保局、卫生监督所和社区卫生服务中心等机构开放教学内容的全部内容，并对相关人员进行重大公共卫生事件应急处置能力的虚拟仿真培训，藉此提升相关人员的应急处置能力。</div>"
		},
		book: {
			nam: "申报书",
			anm: "项目申报书",
			a: "v/pag.pdf",
			tag: "_blank"	// 链接方式
		},
		video: {
			txt: "<p>所属分类 ：环境卫生学</p><p>实验学时 ：4学时</p><p>实验操作步数 ：200</p><p>实验项目负责人 ：王俊玲</p><p>联系电话 ：(0931)8915008</p><p>实验简介 ：系统仿真操作界面利用虚拟现实技术，以2D和3D动画技术相结合的形式，以具体的情景案例为依托，模拟真实环境下重大公共卫生事件发生时的应急处置流程和相关调查、检测实验过程。最终构建成一个完整的重大公共卫生事件应急处置综合实验虚拟学习系统。</p>"
		}
	},
	ball: {	// 全景图
		txt: "<p>某市位于黄河上游，为全国著名的重金属之乡，各类重金属开采、冶炼加工的大小企业比比皆是，该市人口约200万。</p><p>位于重金属矿区东南面和下游地带，分为4个集中居住区块，其中最近的居住区距选矿车间仅百余米。矿区和居住区隔耕地相望。矿区生产区共有3条排污沟，其中一条是从选矿车间引出、专门排放含毒污水的封闭式暗沟，污水直接排入矿区的尾砂库，在尾砂库右侧有一条明沟用来排放库中溢出污水，因库岸周边岩石溶蚀严重，库水大范围多方向侧漏。另有一条排污沟则引入村民灌溉农田水渠，农民利用排污渠的废水漫灌耕地。在居住区，有一个供当地居民孩子就近入学的小学，大约有600多学生在这里上学。当地村民和部分企业职工就住在附近的村庄里，早期村里的饮水主要是通过水井供应，后来通了自来水。在居住区的附近有一个1294.4亩的水塘，进行着淡水鱼的养殖，可以满足当地居民鱼类的供应需求。</p><p>10年前，该地区曾发生回水管道破裂等环境污染事故。后来，村民发现水稻的收成不好。而且，有些地方甚至连草都不长，而且有灰色片状物，与正常土壤看起来很不一样。淡水鱼塘周围由于没有任何防护、防渗措施，养殖的鱼类也出现了死亡的现象。但是，这种现象并未引起大家的重视。</p><p>直到6个月前，一名居住在矿区周围的5岁女孩送市医院就诊，主要症状为脚痛症状，痛得抽筋，痛了就哭，晚上睡觉都听到她的哭声（此症状为镉中毒症状）。同时，患儿的邻居中6人出现相似症状。于是，市医院向当地卫生局进行报告，说“发生了一种不明原因的群体性疾病流行”。经过市医院、市卫生局及医师协会的初步调查，发现该病的病例数共30例，儿童及成年人均有病例发生。在医院，对病人进行了详细的询问和实验室检查，包括血液、尿液等检测（血镉、尿镉和尿金属硫蛋白为其暴露生物学标志物）。</p><p>随后，在市卫生局的协调指挥下，组成了以疾病预防控制中心、监督所和医院等机构专业人员为主的现场调查和应急处置小组，开展现场流行病学调查、环境调查、食品调查、职业调查等。</p><p>现场流行病学调查，包括人群暴露资料的调查。</p><p>调查组还对环境质量现状进行了全面考察，采集了矿区及周边空气样本、土壤样本、村民饮用水的样本、工厂排出的废水样本、地表水、地下水样本送检，进一步确认主要污染物的类型及污染途径。还采集了淡水鱼塘底泥及其旁边土壤样本和土壤上农作物样本等进行实验室检查。</p><p>另外，调查组还对当地居民的食物进行了全面评价。采集鱼塘中的鱼类样本及死鱼样本进行检测，同时，调查组还收集了购买市场上销售的小麦、大米和蔬菜等农作物样本，进行实验室检查。</p><p>为更加科学准确地调查了解村民的健康现状，市卫生局安排职业病防治研究院组织有关专家和医务人员共30人，为当地居民开展健康体检。</p><p>因矿区附近学校的孩子多反映有关节疼痛等症状，故在学校内也开展了相关的健康检查。</p><p>为了解矿区企业职工的职业性有害因素的危害接触情况及其健康状况，防护措施使用及其效果评价，“工业三废”的净化处理及其排放情况，在企业开展了相关的现场调查。同时，还组织工人进行健康检查。</p><p>经调查和实验室检测，初步认定为重金属镉中毒，毒物来自于矿区企业排放的“工业三废”。</p><p>根据人群流行病学调查、环境调查结果及毒理学安全性评价程序，毒理学实验分为4个阶段（4个阶段分别简要介绍），以其中第三阶段的部分内容即亚慢性毒性试验为例，观察长期接触镉的毒性效应谱、毒作用特点和靶器官，并确定镉的剂量效应关系、阈剂量和最大无毒作用剂量，形成毒理学安全性评价报告，为制定人类接触的安全限量提供依据。</p><p>根据上述调查、动物试验及实验室检测结果，形成统一的风险-效益评价，管理部门可根据风险评估的结果，权衡管理决策，必要时，采取适当的控制措施，控制对人体造成危害。</p><p>后来，国家下达财政专项资金用于治理该地区重金属污染和土壤污染，环保部门则进一步加强环境监督，坚决遏制重大环境污染事故多发势头。</p>"
	},
	qa: {	// 问答题
		lb: {
			nam: "重大公共卫生事件应急处置仿真软件",
			url: "v/swf/",
			tim: 30,	// 考试时长（分钟）
			ts: 100,	// 总分
			sub: {
				"1": {
					typ: 0,	// 类型：0：单选，1：多选
					q: "请根据本次突发公共卫生事件的描述，选择现场流行病学调查需要准备的设备或材料：",	// 问题
					v: 9,	// 分数
					o: [	// 选项
						"A、防护用具、个人电脑、取证工具、调查表及相关文书资料、笔、生物样本采样材料",
						"B、防护用具、取证工具、调查表及相关文书资料、笔、生物样本采样材料",
						"C、防护用具、个人电脑、调查表及相关文书资料、笔、生物样本采样材料",
						"D、防护用具、个人电脑、取证工具、调查表及相关文书资料、笔"
					],
					a: [0]	// 答案
					// ua: 用户选择的答案
					// uv: 用户实际的得分
				},
				"2": {
					typ: 0,
					q: "《突发公共卫生事件应急条例》中规定的突发公共卫生事件报告的责任单位是___，并要求报告单位在___向所在地县级人民政府卫生行政主管部门报告。",
					v: 9,
					o: [
						"A、突发卫生事件监测机构、医疗卫生机构和有关单位；1小时内；",
						"B、突发卫生事件监测机构、医疗卫生机构和有关单位；2小时内；",
						"C、突发卫生事件监测机构和有关单位；1小时内；",
						"D、突发卫生事件监测机构和有关单位；2小时内；"
					],
					a: [1]
				},
				"3": {
					typ: 0,
					q: "对于该污染源，本次调查中采样布点方式应该选择？",
					v: 9,
					o: [
						"A、同心圆布点法",
						"B、功能区布点法",
						"C、网格布点法",
						"D、扇形布点法",
						"E、方形布点法"
					],
					a: [0]
				},
				"4": {
					typ: 0,	// 多选
					q: "釆集环境空气中颗粒物样品时，釆样前应确认采样膜无针孔和破损，膜的毛面应___",
					v: 9,
					o: [
						"A、向上",
						"B、向下",
						"C、不分上下"
					],
					a: [0]	// 答案（多选）
				},
				"5": {
					typ: 0,
					q: "颗粒物样品IC-PMS前应该准备几个平行样和空白样？",
					v: 9,
					o: [
						"A、1, 2",
						"B、2, 2",
						"C、1, 1",
						"D、2, 1"
					],
					a: [3]
				},
				"6": {
					typ: 0,
					q: "河水采样背景断面设置为水源取水点附近距离的___",
					v: 9,
					o: [
						"A、600米",
						"B、500米",
						"C、400米",
						"D、300米"
					],
					a: [1]
				},
				"7": {
					typ: 0,
					q: "污水管道采样点一律设在___",
					v: 9,
					o: [
						"A、车间处理设施排放口或污染物设施排放口",
						"B、车间入水口",
						"C、污染物设施排放口",
						"D、工厂入水口"
					],
					a: [0]
				},
				"8": {
					typ: 0,
					q: "种植小麦的农田土壤样品应采集的土壤深度为___",
					v: 9,
					o: [
						"A、0-10 cm",
						"B、0-20 cm",
						"C、0-30 cm",
						"D、0-50 cm"
					],
					a: [1]
				},
				"9": {
					typ: 0,
					q: "土壤样品过网筛时应使用什么网筛？",
					v: 9,
					o: [
						"A、尼龙筛",
						"B、铁丝网筛",
						"C、两者都可以用",
						"D、两者都不可用"
					],
					a: [0]
				},
				"10": {
					typ: 0,
					q: "消解完的溶液定容时应使用___",
					v: 9,
					o: [
						"A、烧杯",
						"B、带刻度的试管",
						"C、离心管",
						"D、容量瓶"
					],
					a: [3]
				},
				"11": {
					typ: 0,
					q: "土壤采样点应选择在什么地点进行采样？",
					v: 10,
					o: [
						"A、被采土壤类型特征明显，地形相对平坦、稳定、植被良好的地点",
						"B、坡脚、洼地等具有从属景观特征的地点",
						"C、城镇、住宅、道路附近",
						"D、沟渠、粪坑、坟墓附近"
					],
					a: [0]
				}
			}
		}
	},
	dl: {	// 资料下载
		pre: {
			nam: "课前预习",
			sub: [
				{
					nam: " 教 &nbsp; 材 ",	// 名称
					txt: "1.《环境卫生学实习指导》（第1版），吴志刚等主编. 北京:人民卫生出版社，2017年<br/>2.《环境卫生学（案例版）》（第2版），牛静萍、唐焕文主编. 北京：科学出版社，2016年<br/>3.《环境卫生学》（第8版），杨克敌主编. 北京:人民卫生出版社，2017年"	// 文本内容
				},
				{
					nam: "教 学 课 件",
					file: [
						{
							nam: "《重金属镉中毒》",
							typ: "pdf",
							url: "pdf/yx1.pdf"
						},
						{
							nam: "病例对照的基本原理",
							typ: "pdf",
							url: "pdf/yx2.pdf"
						},
						{
							nam: "大气污染对健康影响监测",
							typ: "pdf",
							url: "pdf/yx3.pdf"
						},
						{
							nam: "空气及室内空气采样方法",
							typ: "pdf",
							url: "pdf/yx4.pdf"
						},
						{
							nam: "水体污染的调查监测",
							typ: "pdf",
							url: "pdf/yx5.pdf"
						},
						{
							nam: "水样采集实验",
							typ: "pdf",
							url: "pdf/yx6.pdf"
						},
						{
							nam: "突发公共卫生事件",
							typ: "pdf",
							url: "pdf/yx7.pdf"
						},
						{
							nam: "突发公共卫生事件2019528(2h)",
							typ: "pdf",
							url: "pdf/yx8.pdf"
						},
						{
							nam: "突发公共卫生事件流行病学",
							typ: "pdf",
							url: "pdf/yx9.pdf"
						},
						{
							nam: "土壤污染调查监测",
							typ: "pdf",
							url: "pdf/yx10.pdf"
						},
						{
							nam: "土壤样品的采集与处理",
							typ: "pdf",
							url: "pdf/yx11.pdf"
						},
						{
							nam: "现场流行病学",
							typ: "pdf",
							url: "pdf/yx12.pdf"
						}
					]
				},
				// {
				// 	nam: "教学视频资料",
				// 	file: [
				// 		{
				// 			nam: "测试文件 1",
				// 			typ: "video",
				// 			url: "v/video/test.mp4"
				// 		}
				// 	]
				// },
				{
					nam: "其他参考书目",
					txt: "1.《环境卫生学》（第8版），杨克敌主编. 北京:人民卫生出版社，2017年第1版<br/>2.《环境卫生学（案例版）》（第1版），詹平、陈华主编. 北京：科学出版社，2008年<br/>3.《流行病学》（第8版），李立明主编，北京:人民卫生出版社，2017年<br/>4.《卫生统计学》（第8版），李晓松主编，北京:人民卫生出版社，2017年第1版<br/>5.《职业卫生与职业医学实习指导》（第1版），邬堂春主编，人民卫生出版社，2013年出版<br/>6.《流行病学实习教程》（第1版），张卫东主编，北京:人民卫生出版社，2017年<br/>7.《预防医学综合实验教程》（第1版），黄沛力、王晖主编， 北京： 军事医学科学出版社，2010年<br/>8.《预防医学综合实验》（第1版），王心如、周建伟主编， 北京： 人民卫生出版社，2010年<br/>9.《突发公共卫生事件应急条例》（2011年修订），国务院<br/>10.《营养与食品卫生学》（第8版），孙长颢主编，北京:人民卫生出版社，2017年"
				}
			]
		},
		mtl: {
			nam: "课程资料",
			sub: [
				{
					nam: "课程资料列表",
					file: [
						{
							nam: "大气及室内空气采样方法",	// 名称
							typ: "word",	// 文件类型
							cls: "实验操作技能",	// 分类
							url: "pdf/zl1.docx"	// 路径
						},
						{
							nam: "大气及室内空气采样相关习题",
							typ: "word",
							cls: "习题",
							url: "pdf/zl2.docx"
						},
						{
							nam: "水样采集方法",
							typ: "word",
							cls: "实验操作技能",
							url: "pdf/zl3.docx"
						},
						{
							nam: "水样采集相关习题",
							typ: "word",
							cls: "习题",
							url: "pdf/zl4.docx"
						},
						{
							nam: "突发公共卫生事件实验方法",
							typ: "word",
							cls: "实验操作技能",
							url: "pdf/zl5.docx"
						},
						{
							nam: "突发公共卫生事件相关信息报告卡",
							typ: "word",
							cls: "实验操作技能",
							url: "pdf/zl6.doc"
						}
					]
				}
			]
		}
	}
};
