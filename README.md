# ProVr
虚拟仿真实验教学
=======

- 对接实验平台接口 ：

	- 实验平台： http://www.ilab-x.com/
	- 调试说明： http://shenbao.ilab-x.com/declare/wiki#1-6
	- 调试项目： http://202.205.145.156:8017/details/v5?id=3328
	- 正式项目： http://www.ilab-x.com/details/v5?id=3829

*******************************************************************

缓存：
-------------------------------------------------------------------

- 实现HTML5控制 swf 视频文件的播放、停止、跳转
- 研究响应式布局，保证热区与视频的对应关系
- 压缩JS批处理
- 实现 as 与 js 的互相调用
- 实现全景图浏览功能
- 实现阿里云的部署
- 阿里云部署FTP服务，以便进行文件交互工作
- 选择题的地方使用 flash.external.ExternalInterface.call("cq", "1");
- 最后查看分数的地方使用 flash.external.ExternalInterface.call("end", "1");
- 测试六个flash文件互相调用，能否都触发页面函数
- 改用模板架构
- 给出一个配置文件，可以配置 老师信息，及页面信息
- 地图加一个 首页 按钮
- 测试云服务器的路径问题
- 在 iframe 里，无法触发 swf 文件的 flash.external.ExternalInterface.call 方法
。解决方法：需对 iframe 也设置 allowscriptaccess 参数
- 首页视频下方加载两个按钮用于切换视频
- 云服务每次重启都有一个Nginx占用80端口。/usr/local/nginx/sbin/nginx
- 研究这个占用80端口的Nginx的反向代理功能。/usr/local/nginx/conf/nginx.conf
- flash 文件互调需使用绝对路径
- 问题配置文件 + 模板
- 实现 falsh 加载进度条
- pm2 使用配置文件启动。监控 bld 和 tmp 文件夹的变化、设置进程的运行目录
- 检查云服务器网速太慢的原因 ， 已改用北京服务器
- 对接实验平台的用户登录接口
- 添加登录页面，暂时只在首页添加登录登出按钮。

*******************************************************************

计划：
-------------------------------------------------------------------

- aes-256-cbc 在高版本node下运行时会报 Invalid IV length 异常
- 将播放 FLV 视频的功能、滚动相册功能、flash控制功能、XJWT加解密功能 整合到 LZR 库里
- Nginx 静态文件夹做权限控制

*******************************************************************





开发明细：
-------------------------------------------------------------------

##### 2019-9-26 （ 修正上传的实验名称 ）：
	2019-9-25 17:00 实验平台服务器改版。改版后，提交的实验名称必须与平台的实验名称完全一致，否则成绩提交失败。针对此限制，本程序也做了相应的修正。

##### 2019-9-25 （ 防止token的重复登录 ）：
	防止用token登录后，再退出时会自动跳转到带token的前页面，从而导致重复登录，用户会有一种无法退出的感觉。

##### 2019-9-25 （ 登录页面 ）：
	对接实验平台的用户登录接口
	添加 登录、登出、登录检查 功能
	添加登录页面
	考试成绩60分以下，实验结果将改为未完成状态
	上传考试成绩 改用 post 方式

##### 2019-9-24 （ 对接实验平台接口 ）：
	对接实验平台接口
	qa 、 qa2 自动上传考试成绩
	已使用正式密钥

##### 2019-8-26 （ Nginx 错误处理 ）：
	Nginx 错误处理，返回 404
	对 SteelOverAll.swf 文件做跳转处理
	更新资料库页面信息

##### 2019-8-20 （ Nginx 静态文件夹配置 ）：
	Nginx 静态文件夹配置
	Nginx 错误页面处理

##### 2019-8-19 （ 下载页面 ）：
	首页再调整
	首页视频的关闭按钮放在视频附近
	页首的首页按钮也连接到新首页
	问答题页面加个首页按钮
	添加课前预习下载页面
	添加课程资料库下载页面

##### 2019-8-18 （ 新首页 ）：
	原首页连接路径改为 index
	问答题改用传参设置需要打开的 flash 文件
	完成新首页静态页面
	完成问答题汇总页面

##### 2019-8-14 （ 完善网页内容 ）：
	完善网页内容

##### 2019-8-11 （ 完成问答页面 ）：
	完成问答页面
	取消进度条加载
	全屏按钮

##### 2019-8-10 （ 问题改用模板 ）：
	内容完善
	首页视频切换
	问题也改用模板
	flash进度条
	nginx 配置，实现反向代理
	pm2 配置，实现监控文件变化自动重启服务

##### 2019-8-7 （ 改用模板 ）：
	阿里云服务部署
	改用模板
	多个flash互调测试
	使用配置文件

##### 2019-1-29 （ 完成全景图 ）：
	实现全景图浏览功能

##### 2019-1-22 （ 完成其它页面 ）：
	相册加入链接功能

##### 2019-1-21 （ 首页完成 ）：
	首页添加了滚动相册功能
	首页添加了视频播放功能，也需要发布在服务器上，才能正常播放。

##### 2019-1-4 （ 添加全屏功能 ）：

##### 2019-1-2 （ as调用js ）：
	实现 as 与 js 的互相调用
		由于 Flash 的安全策略，网页必须发布在服务器上，调用才会成功。

##### 2018-12-24 （ 初建 ）：
	案例测试

*******************************************************************
