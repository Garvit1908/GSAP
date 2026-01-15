
var t1 = gsap.timeline();

t1.from("#nav h3", {
    delay:0.1,
    y: -40,
    duration: 0.25,
    stagger: 0.2,
    opacity: 0 
});
t1.from("#hi", {
    x: -50,
    duration: 0.4,
    opacity: 0,  
    stagger: 0.25
});
t1.from("#frcs", {
    x: 50,
    duration: 0.4,
    opacity: 0,   
    stagger: 0.25
});
t1.from("#gi", {
    x: -50,
    duration: 0.4,
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
    duration: 0.5,
    rotate:170,
    opacity: 0,   
    stagger: 0.1
});
t1.from("#img2", {
    duration: 0.5,
    rotate:135,
    opacity: 0,   
    stagger: 0.1
});
t1.from("#img1", {
    duration: 0.5,
    rotate:90,
    opacity: 0,   
    stagger: 0.1
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
    transform:"translateX(-77%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:1,
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