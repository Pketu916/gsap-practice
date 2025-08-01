var intialPath = `M 10 100 Q 500 100 990 100`;
var path = `M 10 100 Q 500 100 990 100`;

var svg = document.querySelector("#svg");

svg.addEventListener("mousemove", function (dets) {
  var path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  gsap.to("#svg svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});



svg.addEventListener("mouseleave", function () {

  gsap.to("#svg svg path", {
    attr: {
      d: intialPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
