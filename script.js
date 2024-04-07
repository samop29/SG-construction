document.addEventListener("DOMContentLoaded", function () {
    var loder = document.querySelector("#loder");

    window.addEventListener("load", function () {
        loder.style.display = "none";
        Animation();
    });
})
function Animation(){
    let tl = gsap.timeline();
    tl.from(".hero-text .hero-title h1 .w1,.w2,.w3,.w4,.w5,.w6,.w7 ", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        stagger: 0.2


    })
    gsap.from(".img-box .box1,.img-box .box2,.box3,.box4,.box5,.box6", {
        opacity: 0,
        y: 200,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".img-box .box1,.box2,.box3,.box4,.box5,.box6",
            scroller: "body",
        }
    })
}