jQuery(function(){
	PoSetup();
});

function PoSetup(){
	jQuery("<p id='po' style='position:absolute; bottom:0; right:0; display:inline-block; padding:0.2em 0.5em; background:#000; color:#fff;'>ポ</po>").appendTo('#main');
    jQuery('#po').on('click',function(){
	    setInterval(function(){
	        Po();
	    },500);
    });
}

function Po(){
    var n = Math.floor(Math.random()*11)+0.1;
    var m = Math.floor(Math.random()*11)+1;
    var o = Math.floor(Math.random()*11)*800;
    var fontSize = Math.floor(Math.random()*11)+0.1+'em';
    var $left = 'left:'+n*10+'%;';
    var $fontsize = 'font-size:'+m*m+'em;';
    var $position = 'position:absolute;';
    var $zIndex = 'z-index:10000;';
    var $lh = 'line-height:1;';
    
    jQuery('body, html').css('overflow','hidden');
    jQuery('body *').fadeOut(500);
    jQuery('<p style='+$lh+$position+$zIndex+$left+$fontsize+'>ポ</p>').appendTo('html');        
    jQuery('p').animate({bottom:"-2em"},o).queue(function(){this.remove();});    
}