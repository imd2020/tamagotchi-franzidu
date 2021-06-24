import gsap from "./gsap.min.js";

const imdRechteck = {
  x: 200,
  y: 300,
};

function draw() {
  clear();
  circle(imdRechteck.x, imdRechteck.y, 50, 50);
}

function doMyAnimation() {
  gsap.to(imdRechteck, {
    duartion: 0.5,
    ease: "easeInQuad",
    x: 100,
    y: 100,
    onComplete: () => {
      gsap.to(imdRechteck, {
        dusration: 0.5,
        ease: "easeOutQuad",
        x: Math.random() * 700,
        y: 300,
        onComplete: () => {
          doMyAnimation();
        },
      });
    },
  });
}
doMyAnimation();
