$(document).ready(function(){

    $("#season1").on("click",function(){choose_season(this,".ellipses-season1"); });
    $("#season2").on("click",function(){choose_season(this,".ellipses-season2"); });
    $("#season3").on("click",function(){choose_season(this,".ellipses-season3"); });
    $("#season4").on("click",function(){choose_season(this,".ellipses-season4"); });
   
        

function choose_season(season,ellipses_season)
{
    $("#season1").css("background-color","#c22026");
    $("#season2").css("background-color","#c22026");
    $("#season3").css("background-color","#c22026");
    $("#season4").css("background-color","#c22026");
    $("#season5").css("background-color","#c22026");
    $(".ellipses-season").css("display","none");



    $(season).css("background-color","#161b19");
    $(ellipses_season).css("display","block");
}    


});