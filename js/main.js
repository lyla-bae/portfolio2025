$(document).ready(function() {
    function resizing(){
        var winHeight = $(window).height();
    }
    $(window).on('resize',function(){
        resizing();
    })
    //logo svg
    function svg() {
        $(".logo_wrap svg").removeClass("active");
        $(".logo_wrap svg").addClass("active");
    }
    svg();
    
    //반응형적용
    var winWidth = $(window).width();
    
    /*햄버거메뉴*/
    var onoff = true;
    $(".ham").click(function(){
        onoff = !onoff;
        if(winWidth > 1599){
            if(onoff == false){
                //열릴때
                $('nav').css({
                    'display':'block'
                }).stop().animate({
                    'top':'485px',
                    'opacity':1
                },400)

            }else if(onoff == true){
                //닫힐때
                $('nav').css({
//                    'display':'none'
                }).stop().animate({
                    'top':'465px',
                    'opacity':0
                },400)
            }
            $(this).toggleClass("active")
            
        }else {
            if(onoff == false){
                //열릴때
                $('nav').css({
                    'display':'block',
                }).stop().animate({
                    'opacity':1
                },400)

            }else if(onoff == true){
                //닫힐때
                $('nav').stop().animate({
                    'opacity':0
                },400, function() {
                    $("nav").css("display","none");
                })
            }
            $(this).toggleClass("active")
            
        }
    })

    $('nav li').mousemove(function(){
        /*hover*/
        $(this).addClass('on').siblings().removeClass('on')
    })
    
    $('nav li').on('click',function(){
        //close
        if(winWidth < 1600) {
            onoff = true;
            $('.ham').removeClass('active');
            $('nav').stop().animate({
                "opacity" : 0
            }, 400, function() {
                $(this).css({
                    'display':'none'
                })
            })
        }
    })
    
    //footer고정
//    var s4Height = $('.s4').height();
//    $('.s3').css({
//        'marginBottom': s4Height
//    })
    
    
//    s2 position설정
//    var sliderHeight = $('.s2 .box').height();
//    $('.s2 .container').css({
//        'height' : sliderHeight +160
//    })
    
    
    /*링크*/
    
//    var hList = [];
//    
//    for(i=1; i<=4; i++){
//        var h = $("main").children().eq(i).offset().top;
//        hList.push(h);
//    }
//    console.log(hList);
//    
//    $('nav li').on('click',function(){
//        var navIndex =  $(this).index();
//        
//        $('html,body').stop().animate({
//            'scrollTop': hList[navIndex]
//        },500)
//        
//        console.log(hList[navIndex]);
//        
//    });
//    
    
    
    //스크롤 초기화
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    
    

    
})