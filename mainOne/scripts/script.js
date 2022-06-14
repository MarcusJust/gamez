const carouselSlajd = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";

//buttons listeners
nextBtn.addEventListener("click",()=>{
    if(counter >=carouselImages.length -1) return;
    carouselSlajd.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click",()=>{
    if(counter <=0)return;
    carouselSlajd.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlajd.addEventListener("transitioned", ()=>{
    if(carouselImages[counter].id === "lastClone"){
        carouselSlajd.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";

    }
    if(carouselImages[counter].id === "firstClone"){
        carouselSlajd.style.transition = "none";
        counter = carouselImages.length  - counter;
        carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";

    }
});