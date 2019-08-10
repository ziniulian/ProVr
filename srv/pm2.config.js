module.exports = {
	apps: [
		{
			name: "VR",	// 应用名称
			script: "./bld/index.js",	// 启动文件地址
			cwd: "/srv/vr/",	// 当前工作路径
			watch: [	// 监控变化的目录，一旦变化，自动重启
				"bld",
				"tmp"
			],
			ignore_watch: [	// 忽视这些目录的变化
				"web",
				"logs"
			],
			env: {
				NODE_ENV: "development"	// （开发模式）设置运行环境，此时process.env.NODE_ENV的值就是development
			},
			env_production: {
				NODE_ENV: "production"	// （生产模式）使用production模式 pm2 start ecosystem.config.js --env production
			},
			out_file: "./logs/out.log",	// 普通日志路径
			error_file: "./logs/err.log",	// 错误日志路径
			merge_logs: true,
			log_date_format: "YYYY-MM-DD HH:mm Z"
		}
	]
};
