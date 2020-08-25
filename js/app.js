jQuery(document).ready(function(){
  jQuery('.menu-trigger').on('click', function() {
    // jQuery(".nav-menu").slideToggle(400,function(){
    //     jQuery(this).toggleClass("nav-expanded").css('display','');
    // });
    $().css('display','block');
    $(".nav-menu").toggleClass("toggled");
    if (jQuery('.wrapper').hasClass('dim-overlay')) {
      $('.wrapper').removeClass('dim-overlay');
      $('.banner').removeClass('opacity');
    }
    else
    {
      $('.wrapper').addClass('dim-overlay');
      $('.banner').addClass('opacity');
    }
  });
});
