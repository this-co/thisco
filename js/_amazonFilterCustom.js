


$(window).load(function() {
    $('.item.amazon').hover(function() {
    $(this).children(".amazonFilter").show();
    //canvasに未対応の場合は、canvas要素の削除　対応している場合はimg要素の削除
    if($.browser.msie && $.browser.version < 9){
    	//canvas未対応の処理
    }else {
    	amazonFilter.createCanvas($(this).children("img")[0],$(this));
        $(this).children('img').hide();
    }
  },function(){
    $(this).children('img').show();
  	$(this).children('img').prev().remove();
  	$(this).children(".amazonFilter").hide();
  	}
  	);
});

var amazonFilter = {
	canvasInner:function(){},
	stageInner:function(){},
	imageInner:function(){},
	createCanvas:function(images,items) {
    	var canvas = document.createElement('canvas');
		canvas.width = items.outerWidth();
		canvas.height = items.outerHeight();
		stage = new createjs.Stage(canvas);
		images.crossOrigin = "Anonymous";
		localStorage.setItem( "savedImageData", canvas.toDataURL("image/jpg") );
		var loader = new createjs.LoadQueue(false,true);
		console.log(loader);
		loader.addEventListener("fileload", this.draw);
		loader.loadFile(images);
		images.parentNode.insertBefore(canvas, images);
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
	}
