gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  rotate: 360,
});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
});

gsap.to("#box3", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 1 /* it is work tow time and give value -1 so it work infinite */,
  yoyo: true /* The card goes and does not come directly; it comes back in reverse, just like a ball thrown to the wall.*/,
});

gsap.from("h1", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1,
  stagger: 0.5 /* it is call one by one h1 , and give timeing property and give timing in minus so it is work reverse */,
});


// gsap time line

var tl = gsap.timeline()
tl.to("#box4", {
  x: 1000,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  rotate: 360,
});

tl.from("#box5", {
  x: 1000,
  duration: 2,
  delay: 1,
    repeat: 1 
});

tl.to("#box6", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: 1 /* it is work tow time and give value -1 so it work infinite */,
  yoyo: true /* The card goes and does not come directly; it comes back in reverse, just like a ball thrown to the wall.*/,
});