gsap.registerPlugin(MotionPathPlugin);

const path1 = document.querySelector("#semiPath1");
const path2 = document.querySelector("#semiPath2");
const path3 = document.querySelector("#semiPath3");
const logo1_1 = document.getElementById("logo1_1");
const logo1_2 = document.getElementById("logo1_2");
const logo1_3 = document.getElementById("logo1_3");
const logo1_4 = document.getElementById("logo1_4");
const logo1_5 = document.getElementById("logo1_5");
const logo1_6 = document.getElementById("logo1_6");

const logo2_1 = document.getElementById("logo2_1");
const logo2_2 = document.getElementById("logo2_2");
const logo2_3 = document.getElementById("logo2_3");
const logo2_4 = document.getElementById("logo2_4");
const logo2_5 = document.getElementById("logo2_5");
const logo2_6 = document.getElementById("logo2_6");

const logo3_1 = document.getElementById("logo3_1");
const logo3_2 = document.getElementById("logo3_2");
const logo3_3 = document.getElementById("logo3_3");
const logo3_4 = document.getElementById("logo3_4");
const logo3_5 = document.getElementById("logo3_5");
const logo3_6 = document.getElementById("logo3_6");

function animateLogo(path, logo, start_offset, reverse = false) {
  gsap.killTweensOf(logo);

  const pathLength = path.getTotalLength();
  const speed = 10;
  const duration = pathLength / speed;

  gsap.set(logo, { x: 0, y: 0 });

  const start = reverse ? start_offset + 1 : start_offset;
  const end = reverse ? start_offset : start_offset + 1;

  gsap.to(logo, {
    duration: duration,
    repeat: -1,
    ease: "linear",
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      //   autoRotate: true,
      start: start,
      end: end,
    },
  });
}

animateLogo(path1, logo1_1, 0.0833);
animateLogo(path1, logo1_2, 0.25);
animateLogo(path1, logo1_3, 0.4166);
animateLogo(path1, logo1_4, 0.5833);     
animateLogo(path1, logo1_5, 0.75);      
animateLogo(path1, logo1_6, 0.9166);   

animateLogo(path2, logo2_1, 0.0833);
animateLogo(path2, logo2_2, 0.25);
animateLogo(path2, logo2_3, 0.4166);
animateLogo(path2, logo2_4, 0.5833);     
animateLogo(path2, logo2_5, 0.75);      
animateLogo(path2, logo2_6, 0.9166);   

animateLogo(path3, logo3_1, 0.0833);
animateLogo(path3, logo3_2, 0.25);
animateLogo(path3, logo3_3, 0.4166);
animateLogo(path3, logo3_4, 0.5833);     
animateLogo(path3, logo3_5, 0.75);      
animateLogo(path3, logo3_6, 0.9166);   


// window.addEventListener("resize", () => {
//   animateLogo();
// });
