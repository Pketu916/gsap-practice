gsap.from("#page1 #box1", {
  opacity: 0,
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box2", {
  opacity: 0,
  scale: 0,
  // delay:1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: true /* trigger depand on scroll */,
    // pin: true,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin:true
  },

});
