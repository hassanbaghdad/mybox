$(document).ready(function(){
 

    $(".btn-film1").on("click",function(){
        watch_film(".img-film1");
    });
    $(".btn-film2").on("click",function(){
        watch_film(".img-film2");
    });
    
  
    



function watch_film(img_film)
{
    
      
        $("#player-video").css({"z-index":"2"});
     
        
        $("#player-video").animate({marginLeft:"0px"},300);
        
            
            var link_img = $(img_film).attr("src");
           
        $(".img-append").attr("src",link_img);
       // $(".img-poster").attr("src",link_img);
        $(".close-video-player").on("click",function(){
            $("#player-video").animate({marginLeft:"-100%"},300);
      });
}





});
