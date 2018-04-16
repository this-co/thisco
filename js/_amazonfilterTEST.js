


$(window).load(function() {
	showAmazon();
    $('.item.amazon img').hover(function() {
    //canvasに未対応の場合は、canvas要素の削除　対応している場合はimg要素の削除
    if($.browser.msie && $.browser.version < 9){
    	//canvas未対応の処理
    }else {
    	amazonFilter.createCanvas(this,$(this).parent());
        $(this).hide();
    }
  },function(){
  	amazonFilter.originalBitmap();
  	}
  	);
});

var amazonFilter = {
	canvasInner:function(){},
	stageInner:function(){},
	imageInner:function(){},
	originalBitmap:function(){
		this.canvasInner.filters = null;
		this.canvasInner.cache(0, 0, this.imageInner.width, this.imageInner.height);
		this.stageInner.addChild(this.canvasInner);
	},
	createBitmap:function(image,size) {
		var myBitmap = new createjs.Bitmap(image);
		myBitmap.scaleX = $(size).parent().outerWidth()/image.width;
		myBitmap.scaleY = $(size).parent().outerHeight()/image.height;
		myBitmap.filters = [new createjs.ColorFilter(1, 1, 1, 1, 255, 7, 0, 0)];
		this.canvasInner=myBitmap;
		this.imageInner = image;
		myBitmap.cache(0, 0, image.width, image.height);
		stage.addChild(myBitmap);
	},
	draw:function(eventObject) {
		var image = eventObject.result;
		var imageDetail = eventObject.item;
		var blurBitmap = amazonFilter.createBitmap(image,imageDetail);
		stage.update();
	},
	createCanvas:function(images,items) {
    	var canvas = document.createElement('canvas');
		canvas.width = items.outerWidth();
		canvas.height = items.outerHeight();
		stage = new createjs.Stage(canvas);
		amazonFilter.stageInner=stage;
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", this.draw);
		loader.loadFile(images);
		images.parentNode.insertBefore(canvas, images);
	}
}
