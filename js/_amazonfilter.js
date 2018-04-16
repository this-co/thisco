


$(window).load(function() {
	showAmazon();
    $('.item.amazon img').hover(function() {
    //canvasに未対応の場合は、canvas要素の削除　対応している場合はimg要素の削除
    if($.browser.msie && $.browser.version < 9){
    	//canvas未対応の処理
    }else {
    	canvas=createCanvas(this,typeof $(this).parent());
        $(this).hide();
    }
  },function(){
  	}
  	);
});

function draw(eventObject) {
  var image = eventObject.result;
  var imageDetail = eventObject.item;
  blurBitmap = createBitmap(image,imageDetail);
  stage.update();
}

function createBitmap(image,size) {
  var myBitmap = new createjs.Bitmap(image);
  myBitmap.scaleX = $(size).parent().outerWidth()/image.width;
  myBitmap.scaleY = $(size).parent().outerHeight()/image.height;
  myBitmap.filters = [new createjs.ColorFilter(1, 1, 1, 1, 255, 7, 0, 0)];
  myBitmap.cache(0, 0, image.width, image.height);
  stage.addChild(myBitmap);
  
}

function createCanvas(images,items) {
    var canvas = document.createElement('canvas');
    canvas.width = items.outerWidth();
	canvas.height = items.outerHeight();
    stage = new createjs.Stage(canvas);
    var loader = new createjs.LoadQueue(false);
    
    loader.addEventListener("fileload", draw);
    var canvasInner = loader.loadFile(images);
	images.parentNode.insertBefore(canvas, images);
};
