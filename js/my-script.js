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
	 jQuery('.btn-close').click(function(){
	  jQuery('.menu-overlay').slideUp('fast'); 
	   
	 });	
	 
 });
