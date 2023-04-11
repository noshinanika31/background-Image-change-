const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  // opacity will be change and it will decrese it when we scroll it . 
   bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}