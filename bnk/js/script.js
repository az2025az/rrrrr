$(document).ready(function(){

  /*    
  1. .sub를 안보이게 하고 
      제이쿼리를 이용해서 클릭하면 sub가 펼쳐지게 
      펼쳐진 상태에서 다시 클릭하면 sub가 올라가야함 
      
  2. 닫기 버튼을 클릭하면 왼쪽으로 -100%만큼 이동
  
  3. 메뉴 버튼을 클릭하면 왼쪽으로 0%만큼 이동
  
  */
  
  
  /* 모바일 메뉴 sub가 펼쳐짐 */
  
     /* $(this).find(".sub").slideToggle();
         파인드를 못쓰는 이유는 a의 자식들이라서
        다시 수정한거임
       $(this).children(".sub").slideToggle(); 
       칠드런으로 잡아도 됨
                   -> 클릭하면 내려오고 닫힌다. 
      */ 
   
  $(".gnb>li>a").on("click", function(){
      $(this).siblings(".sub").slideToggle();
      $(this).parent().siblings().find(".sub").slideUp();
      /*서브메뉴의li를 클릭해도 닫혀서 요렇게 하는거임*/
  
      // 화살표뒤집어지는거
      $(this).toggleClass('on')
             .parent().siblings().find('a').removeClass('on') 
  
  })
  
  /* 메뉴 버튼을 클릭하면 왼쪽에서 오른쪽으로 나타나야함 */
  $(".all_btn").on("click",function(){
      $("nav").animate({'left' : 0})
  }) 
  
  
  
  /* 닫기 버튼을 클릭하면 왼쪽으로 사라짐 */
  $(".close").on("click",function(){
      $("nav").animate({'left' :"-100%"})
      /* header의 nav의 left를 0에서 -100%로 수정했던것을 닫혀야해서
      원래 값인 -100%로 해주는거임 */
  
  })
  
  
  var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
     autoplay: {
    delay: 3500
      }
    });
  
  



//.top를 클릭하면 html에 가장위에 이동
$(".top_pc").on("click",function(){
    $("html, body").animate({ 'scrollTop' : 0},1500)
})




/*--- 턱턱 걸리게 올라가는 거 ---*/
 // 1. 한개의 섹션을 고정->섹셕1번을 고정
 let panel = document.querySelector("main")
 //자바스크립트에서html에 있는 클래스나 태그를 선택하는방법
 //문서.선택하겠다("클래스나 태그 ")
 //제이쿼리$(".sec1")

//2. 반복->forEach() : 배열 순회 매서드, 오름차순 인덱스 순서로 한번씩 호출
//   toArray :배열
//   => :화살표 함수
// gsap.utils.toArray(요소들).forEach( (변수,i) => {실행문(=스크롤트래그)} )

gsap.utils.toArray(".box").forEach((panel, i) => {
ScrollTrigger.create({
trigger: panel,
start: "top top",
pin: true,//고정
pinSpacing: false 
//true: 고정되어있는 요소 아래 이미지 나열되는 형식
//false : 고정되어있는 요소에 이미가 겹침
});
});




  })//document
  
  
  