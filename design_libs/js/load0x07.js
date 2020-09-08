$(document).ready(function(){
  
function hide_page_loading()
{
   
   //$(".spinner0x07").animate({marginTop:"-100%",opacity:"0",zIndex:"0"},600);
  $(".ph-picture").animate({zIndex:"1"},600);
}
$(".owl-nav").removeClass("disabled");
setTimeout(hide_page_loading,600);
});