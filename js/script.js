$(document).ready(function(){


 




    $(".menu li").on("click",function(){
        let i = $(this).index();
        console.log(i)
        let ht = $(window).height();
        //브라우저의 높이값*박스의 순서값은 현재 박스에 스클로 위치값과 동일
        let nowTop = (i+1) * ht;
        
        //해당하는 스크롤 위치값으로 화면을 이동
        $("html, body").stop().animate({"scrollTop" : nowTop })
  
    })
    $(window).on("scroll", function(){

        let scrht = $(window).height()
        let scrtop = $(window).scrollTop() 
 
        if(scrtop >= scrht*0 && scrtop < scrht*1){
           
            $(".menu li").removeClass("on")       
        }
        if(scrtop >= scrht*1 && scrtop < scrht*2){
            $(".menu li").removeClass()
            $(".menu li").addClass("on")       
        }
        if(scrtop >= scrht*2 && scrtop < scrht*3){
            $(".menu li").removeClass()
            $(".menu li").addClass("on")       
        }
        if(scrtop >= scrht*3 && scrtop < scrht*4){
            $(".menu li").removeClass('on')
             
        }

    })















})//document