
//login Form
$(document).ready(function(){
    $(".but").click(function(){
        $(".loginForm").css("right",0);
        return false
    })
    $(".close").click(function(){
        $(".loginForm").css("right","-301px");
        return false
    })



 //Tab
    $(".memberdetaies").first().show();  
    $(".members li").first().addClass("active");

    $(".members li").click(function(){
        $(".members li").removeClass("active");
        $(this).addClass("active");

        $(".memberdetaies").hide();
        var x = $(this).attr("data-cont");
        $(x).fadeIn(1000);        
        
    });


    //Dropdown

    $(".mainNav ul li").hover(function(){
        $(this).children(".subNav").slideDown(); 
    });

    $(".mainNav ul li").mouseleave(function(){
        $(this).children(".subNav").hide();
    });
    

})


