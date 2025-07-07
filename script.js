//-----------საათი-----------

function updateClock() {
    const now=new Date();
    let hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    const ampm=hours >= 12 ? "PM" : "AM";

    hours=hours % 12;
    hours=hours ? hours : 12;

    const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":") + `${ampm}`;

    document.getElementById("clock").textContent = formattedTime;
}

updateClock();
setInterval(updateClock, 1000);

//---------------სლაიდერი------------ 


const slides=document.querySelectorAll(".slide");
const nextBtn=document.querySelector(".arrow.right");
const prevBtn=document.querySelector(".arrow.left");
const dotsContainer=document.querySelector(".dots");

let currentSlide=0;

slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => {
        goToSlide(index);
    });
    dotsContainer.appendChild(dot);
});

const dots=document.querySelectorAll(".dots button");

function updateActiveSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
        dots[index].classList.toggle("active", index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide=index;
    updateActiveSlide();
}

function nextSlide() {
    currentSlide=(currentSlide +1) % slides.length; 
    updateActiveSlide();
}

function prevSlide() {
    currentSlide=(currentSlide -1+ slides.length) % slides.length;
    updateActiveSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
    if (e.key==="ArrowRight") nextSlide();
    if (e.key==="ArrowLeft") prevSlide();
});

updateActiveSlide();