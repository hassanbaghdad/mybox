$(document).ready(function(){

var lang_is_arabic = true;
$(".lang-btn").on("click",function(){

    if(lang_is_arabic == true)
    {
        
        lang_is_arabic = false;
        setTimeout(function(){ test(); },10);
        $("#lang-link").attr("href","design_libs/css/en.css");
        //if ENGLISH
        //TEXTS
        
        $(".lang-text").text("عربي");
        $(".text-home").text("HOME");
        $(".text-films").text("FILMS");
        $(".text-series").text("SEIRES");
        $(".text-channels").text("CHANNELS");
        $(".text-more").text("MORE");
        $("#searchbox").attr("placeholder","Search");
        $(".text-top-rated").text("TOP RATED");
        $(".text-new-films").text("NEW FILMS");
        $(".text-oscar").text("OSCAR");
        $(".text-top-series").text("TOP SERIES");
        $(".text-contact").text("CONTACT US");
        $(".text-action").text("ACTIONS");
        $(".text-comedy").text("COMEDY");
        $(".text-romancy").text("ROMANCY");
        $(".text-warror").text("WARROR");
        $(".text-documention").text("DOCUMENTION");
        $(".text-anime").text("ANIMETION");
        $(".text-sport").text("SPORT");
        $(".filtervideolang").text("VIDEO LANGUAGE");
        $(".filter-by-rated").text("BY");
        $(".filter-top-rated").text("TOP RATED");
        $(".filter-top-watches").text("TOP WATCHES");
        $(".text-ch-sport").text("SPORT ");
        $(".text-ch-films").text("FILMS ");
        $(".text-ch-fun").text("KIDS ");
        $(".text-ch-series").text("SERIES ");
        $(".text-thefilm").text("THE FILM");
        $(".text-same-film").text("FILMS AS YOU LIKE");
        $(".text-season").text("SEASONS");
        $(".text-ellipses").text("ELLIPSES");
        $(".text-thesearies").text("THE SERIES");
        $(".text-same-series").text("SERIES AS YOU LIKE");
        
    }else
    {
        $("#lang-link").attr("href","");
        $(".lang-text").text("EN");
        $(".text-home").text("الصفحة الرئيسية");
        $(".text-films").text("الافلام");
        $(".text-series").text("المسلسلات");
        $(".text-channels").text("القنوات");
        $(".text-more").text("المزيد");
        $("#searchbox").attr("placeholder","بحث");
        $(".text-top-rated").text("الافضل تقييماً");
        $(".text-new-films").text("افلام جديدة");
        $(".text-oscar").text("اوسكار");
        $(".text-top-series").text("افضل المسلسلات");
        $(".text-contact").text("تواصل معنا");
        $(".text-action").text("اكشن");
        $(".text-comedy").text("كوميديا");
        $(".text-romancy").text("رومانسي");
        $(".text-warror").text("رعب");
        $(".text-documention").text("وثائقي");
        $(".text-anime").text("رسوم متحركة");
        $(".text-sport").text("رياضة");
        $(".filtervideolang").text("لغة الفيديو");
        $(".filter-by-rated").text("حسب المشاهدة");
        $(".filter-top-rated").text("الاكثر تقييماً");
        $(".filter-top-watches").text("الاكثر مشاهدة");
        $(".text-ch-sport").text("القنوات الرياضية");
        $(".text-ch-films").text("قنوات الافلام");
        $(".text-ch-fun").text("قنوات الاطفال");
        $(".text-ch-series").text("قنوات المسلسلات ");
        $(".text-thefilm").text("الفلم");
        $(".text-same-film").text("افلام ذات صلة");
        $(".text-season").text("المواسم");
        $(".text-ellipses").text("الحلقات");
        $(".text-thesearies").text("المسلسل");
        $(".text-same-series").text("مسلسلات ذات صلة");
        
        lang_is_arabic = true;
    }

});








});
