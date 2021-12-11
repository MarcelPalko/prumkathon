const dotsDiv = document.getElementById("dots");
const textDiv = document.getElementById("slider__text");
if (dotsDiv) {

  let currentImageIndex = 0;
  let nextImageInterval = setInterval(() => nextImage(), 8000);

  const nextImage = () => {
    currentImageIndex += 1;
    if (currentImageIndex >= IMAGES_SRC.length) currentImageIndex = 0;
    changeImageUrl(currentImageIndex);
  };

  const changeImageUrl = (imgIndex) => {
    const sliderDiv = document.getElementById("slider");
    const dots = document.getElementsByClassName("slider__dots__dot");
    const loaderLine = document.getElementById("slideLoaderLine");
    loaderLine.style.animation = "";
    void loaderLine.offsetWidth;
    loaderLine.style.animation = "loader 8s linear";
    Array.from(dots).forEach((item) => {
      item.classList.remove("slider__dots__dot-active");
    });
    dots[imgIndex].classList.add("slider__dots__dot-active");

    textDiv.innerHTML = SLIDER_TEXTS[imgIndex % SLIDER_TEXTS.length]
    sliderDiv.style.backgroundImage = `url(${IMAGES_SRC[imgIndex]})`;

    sliderDiv.style.animation = ""
    void sliderDiv.offsetWidth;
    sliderDiv.style.animation = "fadeIn 500ms";
    //setTimeout(() => (sliderDiv.style.animation = ""), 500);
    clearInterval(nextImageInterval);
    nextImageInterval = setInterval(() => nextImage(), 8000);
  };

  for (let i = 0; i < IMAGES_SRC.length; i++) {
    let newDot = document.createElement("span");
    newDot.classList.add("slider__dots__dot");
    newDot.addEventListener("click", () => {
      changeImageUrl(i);
      currentImageIndex = i;
    });
    dotsDiv.appendChild(newDot);
  }

  changeImageUrl(0);
}
