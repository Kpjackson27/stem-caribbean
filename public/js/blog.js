// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: NEXUS.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullheight, .intro').css('height',vH);
     $('.halfheight').css('height',vH/2);
  
   

//Equi-heigh Divs
$(document).ready(function() {

  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });

}

 });


     //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $('.trigger-sub-nav').find('.main-nav').removeClass('nav-highlight');
        $(this).find('.main-nav').addClass('nav-highlight');
        $(this).find('.sub-nav').slideDown('slow');
    })

    $('.news-block').hover(function() {
        $(this).addClass('show-img');
        $(this).find('.news-block-inner').addClass('overlay-on');
    }, function() {
        $(this).removeClass('show-img');
        $('.news-block-inner').removeClass('overlay-on');
    });



});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

