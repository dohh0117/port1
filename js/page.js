$(document).ready(function(){
$('.btn li').click(function(){
    var i= $(this).index();
    var tt = $('#wrap > div').eq(i).offset().top;
    var tl = $('#wrap >div').eq(i).offset().left;
    $('html,body').stop().animate({
        scrollTop:tt,
        scrollLeft:tl
    });
});

var scren01Num =1;
 $(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    if(scrollTop >= 900 && scren01Num == 1){
        scren01Num = 0;
        $('.skill_list .in_box01').stop().delay(0).animate({top:'190px'},1000);
        $('.skill_list .in_box02').stop().delay(500).animate({top:'210px'},1000);
        $('.skill_list .in_box03').stop().delay(1000).animate({top:'230px'},1000);
        $('.skill_list .in_box04').stop().delay(1500).animate({top:'270px'},1000);
    }
    else if(scrollTop < 900 && scren01Num == 0){
        scren01Num = 1;
        $('.skill_list .in_box01').stop().css({top:'190px'}).animate({top:'500px'},1000);
        $('.skill_list .in_box02').stop().css({top:'210px'}).animate({top:'500px'},1000);
        $('.skill_list .in_box03').stop().css({top:'230px'}).animate({top:'500px'},1000);
        $('.skill_list .in_box04').stop().css({top:'270px'}).animate({top:'500px'},1000);

    }


 })

  //box4 slider
 var current=0;
    $('.btn1').click(function(){
        
       current = current+1

        if(current == 3){
            current=0;
        }
        slide(current)
    })
    $('.btn2').click(function(){
        
        current = current-1
 
         if(current == -1){
             current=3;
         }
         slide(current)
     })

    function slide(i){
        var pos =i*(-340)+'px';
        $('.veiw').animate({left:pos},700)
        // if(current=i)return;
        // var currentEl = $('slider>div').eq(current)
        // var nextEl =$('slider>div').eq(i);
        // currentEl.css({left:'100px'}).stop().animate({left:'-500px'})
        // nextEl.css({left:'-500px'}).stop().animate({left:'100px'})
        // current=i;

    }

});