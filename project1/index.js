gsap.registerPlugin(SplitText);

let split = new SplitText("#ctnt p", {
  type: "chars,words,lines"
});

var t1 = gsap.timeline();

t1.from("#nav h3", {
    delay:0.1,
    y: -40,
    duration: 0.25,
    stagger: 0.1,
    opacity: 0 
});
t1.from("#hi", {
    x: -50,
    duration: 0.3,
    opacity: 0,  
    stagger: 0.1
});
t1.from("#frcs", {
    x: 50,
    duration: 0.3,
    opacity: 0,   
    stagger: 0.1
});
t1.from("#gi", {
    x: -50,
    duration: 0.3,
    opacity: 0,   
    stagger: 0.1
});
// t1.to("#main",{
//     //backgroundColor:"crimson",
//     delay:0.1,
//     duration:1,
//     ease:"power2.inOut"
// })
t1.from("#img3", {
    duration: 0.25,
    rotate:170,
    opacity: 0,   
    stagger: 0.1
});
t1.from("#img2", {
    duration: 0.25,
    rotate:135,
    opacity: 0,   
    stagger: 0.1
});
t1.from("#img1", {
    duration: 0.25,
    rotate:90,
    opacity: 0,   
    stagger: 0.05
});
t1.from("#footer h3", {
    y: -40,
    stagger: 0.1,
    opacity: 0 
});
// t1.from("#p1", {
//     rotate:360,
//     opacity: 0,   
//     scale:0,
//     scrollTrigger:{
//         trigger:"#p1",
//         scroller:"body",
//         // markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:1
//     }
// });
// t1.from("#p2", {
//     rotate:360,
//     opacity: 0,   
//     scale:0,
//     scrollTrigger:{ 
//         trigger:"#p2",
//         scroller:"body",
//         // markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:1
//     }
// });
t1.to("#page1 h1",{
    transform:"translateX(-90%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})
t1.to("#page2 img",{
    width:"18vw",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})
t1.to("#photu img",{
    height:"80%",
    filter: "grayscale(0%)",    
    scrollTrigger:{
        trigger:"#photu img",
        scroller:"body",
        start:"top 60%",
        end:"top 10%",
        scrub:5,
        pin:false,
    }
})
t1.from(split.chars,{
  y:100,
  opacity:0,
  autoAlpha:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#ctnt",
    scroller:"body",
    start:"top 60%",
    end:"top 25%",
    scrub:5
  }
});
t1.from("#lef > *",{
  y:50,
  opacity:0,
  stagger:0.15,
  scrollTrigger:{
    trigger:"#last",
    start:"top 70%",
    end:"top 30%",
    scrub:2
  }
});

t1.from(".right .item",{
  x:80,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#last",
    start:"top 70%",
    end:"top 30%",
    scrub:2
  }
});
t1.from(".socials span",{
  y:40,
  opacity:0,
  stagger:0.15,
  scrollTrigger:{
    trigger:"#last",
    start:"top 60%",
    end:"top 30%",
    scrub:2
  }
});
t1.from(".contact > div",{
  y:40,
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#last",
    start:"top 55%",
    end:"top 25%",
    scrub:2
  }
});
