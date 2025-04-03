$(document).ready(function(){

    $(".gnb>li").on("mouseover",function(){
        $(this).children(".sub").stop().slideDown()        
    })
    $(".gnb>li").on("mouseout",function(){
        $(this).children(".sub").stop().slideUp()

    })

})//document