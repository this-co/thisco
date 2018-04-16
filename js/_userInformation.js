var userInformation = (function() {
	this.displayWidth=$(window).width();
	this.browser=navigator.appName+navigator.appVersion.match(/\d/g).join("");//ブラウザとVersionを取得
	}
);