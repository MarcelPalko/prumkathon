const imagesSrcArray = ['imgs/slider1.png', 'imgs/slider2.jpg',"imgs/slider3.jpg"];
const dotsDiv = document.getElementById("dots");
let currentImageIndex = 0;


const changeImageUrl = (imgIndex) => {
    const sliderDiv = document.getElementById("slider");
    sliderDiv.style.backgroundImage = `url(${imagesSrcArray[imgIndex]})`
    sliderDiv.style.animation = "fadeIn 500ms"
    const dots = document.getElementsByClassName("slider__dots__dot");
    Array.from(dots).forEach(item => {
        item.classList.remove("slider__dots__dot-active")
    });
    dots[imgIndex].classList.add("slider__dots__dot-active");
    setTimeout(() => {
        sliderDiv.style.animation = "";
    }, 500);
}
for (let i = 0; i < imagesSrcArray.length; i++) {
    let newDot = document.createElement("span");
    newDot.classList.add("slider__dots__dot");
    newDot.addEventListener('click',()=>{changeImageUrl(i) ; currentImageIndex = i});
    dotsDiv.appendChild(newDot);
}
setInterval(() => {
    currentImageIndex += 1;
    if (currentImageIndex >= imagesSrcArray.length) currentImageIndex = 0;
    changeImageUrl(currentImageIndex)
}, (8000));

changeImageUrl(0);




