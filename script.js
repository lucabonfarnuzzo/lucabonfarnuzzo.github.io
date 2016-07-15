var headerOffset  = 130;
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});


window.onscroll = function(e) {
    
  var pageOffset = window.pageYOffset;
    
  if ( pageOffset > 683 ) {
      
    mobLand.classList.add("gone");
    mobLand2.classList.add("gone");
      
  } else {
    mobLand.classList.remove("gone");   
    mobLand2.classList.remove("gone");   
  };
  
};
