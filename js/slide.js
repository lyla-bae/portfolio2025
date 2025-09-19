$(document).ready(function() {
    
    //tilt
    const tilt = $('.js-tilt').tilt();
    $('.js-tilt').tilt({
        glare: false,
        maxGlare: .5
    })
    
    var boxwrapWidth = $('.s2 .box_wrap').width();
    var boxLeng = $('.s2 .box').length;
    var boxWidth = $('.s2 .box').width();
    var boxHeight = $('.s2 .box').height();
    //box_wrap width
    var winWidth = $(window).width();
    if(winWidth > 1599){
        $('.s2 .box_wrap').css({
            width:boxLeng * (boxWidth+40)
        })
        //canvas height값 가져와서 hover주기
        setTimeout(()=>{
            $('.s2 .box .text_wrap').css({
                height: '45vh',
            })
        }, 1000);
    }else{
        $('.s2 .box_wrap').css({
            width: 'auto'
        })
    }
    

    
    //slick
    var $boxWrap = $('.s2 .box_wrap')
    var $boxWrap_settings = {
        responsive:[
            {
                breakpoint:9999,
                settings:'unslick'
            },
            {
                breakpoint:1599,
                settings:{
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
    };
    
    $boxWrap.slick($boxWrap_settings);
    
    $(window).on('resize', function() {
        if ($boxWrap.hasClass('slick-initialized')) {
            return $boxWrap.slick($boxWrap_settings);
        }
    });


    ScrollTrigger.matchMedia({

        '(min-width:1599px)':function(){

            gsap.to('.s2 .box_wrap', {
                x: -boxwrapWidth - window.innerWidth,
                scrollTrigger:{
                    trigger:'.s2',
                    start:'top top',
                    end:`${boxwrapWidth+1000} bottom`,
                    pin:true,
                    pinSpacing:true,
                    scrub:0.5,
                }
            })

        }

    })



    /*ScrollTrigger.matchMedia({

        '(max-width:768px)':function(){

            ScrollTrigger.removeEventListener(".s2 .box_wrap", {
        //        xPercent: -100, 
                x: -boxwrapWidth - window.innerWidth,
                scrollTrigger:{
                    trigger:'.s2',
                    start:'top top',
                    end:`${boxwrapWidth} bottom`,
                    pin:true,
                    pinSpacing:true,
        //            markers:true,
                    scrub:0.5,
                }
            })
        }
    })*/
    


    //category
    // 페이지 표시
//    $('.box_wrap').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
//        $('.page_num').html('<b>'+parseInt(slick.currentSlide + 1) + '</b> / ' + slick.slideCount)
//    });

//selectbox를 통해 각각 카테고리를 선택했을 경우 이벤트 처리
//    $(".s2 li").on("click", function () {
//        
//        var filter = $(this).attr("data-category");
//        $(this).addClass("on").siblings().removeClass("on");
//        
//        if (filter == 'all') {
//            $('.box_wrap').slick('slickUnfilter');
//        } else {
//            $('.box_wrap').slick('slickUnfilter').slick('slickFilter', '.' + filter);
//        }
//
//        // 첫번째 항목으로 이동시킨다.
//        $('.box_wrap').slick('slickGoTo', 0);
//
//    })
    

})


