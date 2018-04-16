var $self = $(this);
$(document).ready(function() {
    $('.item.amazon').hover(showAmazon($self),
    hideAmazon($self)
  	);
});

