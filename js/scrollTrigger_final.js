$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    var winWidth = $(window).width();
    
    var a = $('.s1 .t2').height();
    var b = $('.s1 .img_wrap').height();
    gsap.to('.s1 .img_wrap',{
        scrollTrigger:{
            trigger:'.s1 .img_wrap',
            start:'0% 0%',
            end: '100% 0%',
            pin:true,
            pinSpacing: false,
            scrub: 0.5,
//            markers:true
        }
    })
//    if(winWidth > 1599){
//        gsap.to('.s1 .img_wrap',{
//            scrollTrigger:{
//                trigger:'.s1 .img_wrap',
//                start:'0% 0%',
//                end: '100% 0%',
//                pin:true,
//                pinSpacing: false,
//                scrub: 0.5,
//                markers:true
//            }
//        })
//    }else{
//        gsap.to('.s1 .img_wrap',{
//            scrollTrigger:{
//                trigger:'.s1 .img_wrap',
//                start:'0% 0%',
//                end: `${a+b} 0%`,
//                pin:true,
//                pinSpacing: false,
//                scrub: 0.5,
//                markers:true
//            }
//        })
//    }
    
    gsap.to('.s1 .img_wrap .img_opacity',{
        duration:1,
        opacity:1,
        width:'100%',
        height:'100vh',
        scrollTrigger:{
            trigger:'.s1 .img_wrap',
            start:'0% 0%',
            end: '100% 0%',
            scrub: 0.5,
            toggleActions:'restart complete reverse reset',
//            markers:true
        }
    })
    if(winWidth > 1599){
        //pc
        gsap.to('.s1 .img_wrap .img',{
            duration:1,
            width:'100%',
            height:'100vh',
            scrollTrigger:{
                trigger:'.s1 .img',
                start:'0% 600px',
                end:'0% 0%',
                scrub: 0.5,
    //            pin: true,
    //            pinSpacing:false,
                toggleActions:'restart complete reverse reset',
//                markers: true
            }
        })
    }else {
        //mobile
        gsap.to('.s1 .img_wrap .img',{
            duration:1,
            width:'100%',
            height:'100vh',
            scrollTrigger:{
                trigger:'.s1 .img',
                start:'0% 386px',
                end:`0% 0%`,
                scrub: 0.5,
    //            pin: true,
    //            pinSpacing:false,
                toggleActions:'restart complete reverse reset',
//                markers: true
            }
        })
    }
    
    
    
    
    
//    s2
//    var boxwrapWidth = $('.s2 .box_wrap').width();
//    var boxLeng = $('.s2 .box').length;
//    var boxWidth = $('.s2 .box').width();
//    //box_wrap width
//    $('.s2 .box_wrap').css({
//        width:(boxLeng * (boxWidth+40))-40
//    })

//    gsap.to('.s2 .box_wrap',{
////        xPercent: -100, 
//        x: -boxwrapWidth * 0.5,
////        duration:2,
//        scrollTrigger:{
//            trigger:'.s2',
//            start:'top top',
//            end:`${boxwrapWidth} bottom`,
//            pin:true,
//            pinSpacing:true,
////            markers:true,
//            scrub:0.5,
//        }
//    })
//    


    
    
    
    
//    s3
    
    var c = $(".panel").height();
    var d = $(".s3 .text1").height();
    var e = $(".img1").height();
    var f = $(window).height();
    

    gsap.to(".s3 .text_wrap", {
//        y:0,
//        opacity:1,
        duration:0.5,
        scrollTrigger: {
            trigger: ".s3",
            start: "0 top",
            end: `bottom top`,
            toggleActions: "play none reverse reset",
//            markers: true
        },
    })

    
    var winWidth = $(window).width();
    $('.s3 .panel-text').css({
        height:c,
    })
    
    gsap.to(".s3 .p-wrap", {
        scrollTrigger: {
            trigger: ".s3 .p-wrap",
            start: "-100 top",
            end: `bottom top`,
            toggleActions: "play none reverse none",
            pin: true,
            pinSpacing: false,
//            markers: true
        },
        duration:1
    })
    
    gsap.to(".s3 .p-wrap .img2", {
        duration: 0.5,
        scrollTrigger: {
            trigger: ".s3 .p-wrap .img2",
            start: `top ${f - 100}`,
            end: `top 100px`,
            toggleActions: "play none reverse none",
            scrub: 0.1,
//            markers: true,
        },
        height: e
    })
    
});