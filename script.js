document.addEventListener("DOMContentLoaded",function(){
    console.log("DOMContentLoaded event fired.");
    var backgrounds=[
        "image1.avif",
        "image2.avif",
        "image3.webp",
        "image4.avif",
        "image5.avif",
        "image6.webp",
        "image7.webp",
        "image8.webp",
        "image9.avif",
        "image10.avif",
        "image11.avif",
    ];

function changeBackground(){
    var randomBg=backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.querySelector(".page1").style.backgroundImage='url('+ randomBg +')';
    console.log("Background changed to:", randomBg);
}
changeBackground();

setInterval(changeBackground,10000);
});

var tl=gsap.timeline();

tl.from("nav .name, nav a ",{
    y:-50,
    opacity:0,
    stagger:0.5,

});

tl.from(".con h1,.con h2,.con h3",{
    x:-50,
    opacity:0,
    stagger:1,
})
 var tl1=gsap.timeline();
tl.from(".con a",{
    y:-100,
    opacity:0,
    stagger:0.5,
})

var tl2=gsap.timeline()
tl2.from(".page2 h1,.page2 h2,.page2 h3,.page2 p,.page2 a,.aboutone",{
    scale:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrup:true,
    }
})
var tl3=gsap.timeline()
tl3.from(".page3 h1,.page3 h2,.page3 h3,.page3 p,.service",{
    opacity:0,
    y:-50,
    stagger:1,
    scrollTrigger:{
        trigger:".page3 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrup:true,
    }
})
var tl4=gsap.timeline()
tl4.from(".page4 h1,.page4 h2,.skill",{
    opacity:0,
    y:-50,
    stagger:1,
    scrollTrigger:{
        trigger:".page4 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrup:true,
    }
})
var tl5=gsap.timeline()
tl5.from(".page5 h1,.page5 h2",{
    opacity:0,
    y:-50,
    stagger:1,
    scrollTrigger:{
        trigger:".page5 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrup:true,
    }
})
var tl6=gsap.timeline()
tl6.from(".page6 h1,.page6 h2,.last1,.last2",{
    opacity:0,
    y:-50,
    stagger:1,
    scrollTrigger:{
        trigger:".page6 ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrup:true,
    }
})