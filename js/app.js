$(document).ready(function() {
	$(".flyout").hide();
});



$(document).on( "mouseenter","#drive,#projects,#people",function() {
  $(".ini",this).hide();
  $("span.nav-txt",this).addClass("nav-txt-hover");
  $(".flyout",this).show();
  
  if ($("#my-nav").hasClass("open")) {
    $(".flyout",this).addClass("open");
    $("span.nav-txt",this).removeClass("nav-txt-active");
  } else {
    $(".flyout",this).removeClass("open");
  }

});

$(document).on( "mouseleave","#drive,#projects,#people",function() {

  
  $(".ini",this).show();
  $(".flyout",this).hide();;
  $("span.nav-txt",this).removeClass("nav-txt-hover");


    if ($("#my-nav").hasClass("open")) {
    $(".flyout",this).addClass("open");
    $("span.nav-txt",this).addClass("nav-txt-active");
  } 

});


$("#open").on("click",function() {
  $("#my-nav,.rule,#open,#drive,#projects,#people").toggleClass("open");
  $(".rule-sub").toggleClass("sub-open");
  $(".nav-txt").toggleClass("nav-txt-active");
  $("#more").toggleClass("visible");
  $(".nav-hidden").toggleClass("visible");
});

if ($("#my-nav").hasClass("open")) {
  $("#open").on("click", function() {
    $("#my-nav").removeClass("open");    
  });
}

$("#open").hover( function() {
  $(".more").toggleClass("hover");
});

$(".option-hidden").hover(function() {


  $(".nav-txt-hidden",this).toggleClass("hover-hidden");
});