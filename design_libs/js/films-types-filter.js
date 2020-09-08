$(document).ready(function(){



    $("#div-action").on("click",function(){
        checked_filter_type(this,"#action");
    });
    $("#div-comydia").on("click",function(){
        checked_filter_type(this,"#comydia");
    });
    $("#div-romancy").on("click",function(){
        checked_filter_type(this,"#romancy");
    });
    $("#div-warror").on("click",function(){
        checked_filter_type(this,"#warror");
    });
    $("#div-animation").on("click",function(){
        checked_filter_type(this,"#animation");
    });
    $("#div-documention").on("click",function(){
        checked_filter_type(this,"#documention");
    });
    $("#div-sport").on("click",function(){
        checked_filter_type(this,"#sport");
    });
           


    function checked_filter_type(div_id,type_id)
    {
        
            var state_checked =   $(type_id).attr("mychecked");
            if(state_checked == "false")
            {
               
                $(type_id).addClass("fa-check-circle");
                
                $(div_id).css("background-color","rgb(0, 78, 128)");
                $(type_id).attr("mychecked","true");
            }else{
                $(type_id).removeClass("fa-check-circle");
                $(type_id).addClass("fa-none");
                $(div_id).css("background-color","#ef183a");
                $(type_id).attr("mychecked","false");
            }
       
      
    }
    
});