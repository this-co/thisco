var mouseMovePosition = function(selector) {
	$(selector).mousemove(function(e){
		var mousePosition = {
			x:e.pageX,
			y:e.pageY
			}	
	});
	return mousePosition;
}