var main = document.getElementById("main");
var cursor = document.getElementById("cursor");
var imgWrapper = document.querySelector(".img-wrapper");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

imgWrapper.addEventListener("mouseenter", function () {
  cursor.innerHTML="read more"
  gsap.to(cursor, {
    scale: 2,
    backgroundColor:"#fffb0",
  });
});

imgWrapper.addEventListener("mouseleave", function () {
  cursor.innerHTML=""
  gsap.to(cursor, {
    backgroundColor:"#fff",
    scale: 1,
  });
});
