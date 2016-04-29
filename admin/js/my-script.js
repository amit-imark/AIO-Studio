// JavaScript Document



 jQuery(window).load(function(){
	jQuery('.banner-section').addClass('animat'); 
	 
	 });	
	 
	 var stickyNavTop = $('.btn-trigger').offset().top;
   
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    jQuery('.btn-trigger').addClass('sticky');
} else {
    jQuery('.btn-trigger').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});

	  
	  
	      if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
           jQuery('body').on("mousewheel", function () {
                // remove default behavior
                event.preventDefault();

                //scroll without smoothing
                var wheelDelta = event.wheelDelta;
                var currentScrollPosition = window.pageYOffset;
                window.scrollTo(0, currentScrollPosition - wheelDelta);
            });
        }

///***************Callback function*******************//

jQuery(document).ready(function(){
   jQuery('.btn-trigger').click(function(){
	  jQuery('.menu-overlay').slideDown('fast'); 
	   
	 });	
	 jQuery('.btn-close, .menu-navigation a').click(function(){
	  jQuery('.menu-overlay').slideUp('fast'); 
    
	 });
	 	 
 });
 
 
/**************************************parallax********************/

jQuery(function() {
  jQuery('.menu-navigation a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 
///////++++++++++++++++++++++++++++++++++++++++++++ Custum input type button++++++++++++++++++

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));


//******************************=========== add and remove Jquery===============**********************/

jQuery(function() {
   var isFirst = true, numLi = 1;

jQuery(".project-images-box").each(function() {  
  var list = $(this);
  list.attr("start", numLi);
  numLi = numLi + list.find(":before").length;
  }); 
});
 
