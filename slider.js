const slidesCount = document.querySelector('.slider__slides').children.length;
const prevButton = document.querySelector('.slider__prevButton');
const nextButton = document.querySelector('.slider__nextButton');
const body = document.querySelector('body');

let currentSlides = [1,2,3];
let prevSlides = [];
let nextSlides = [];

window.addEventListener('resize', ()=>{
    if(body.offsetWidth>900 && body.offsetWidth<1440){
        currentSlides = [1,2]
        document.querySelector('.slide3').classList.add('noneSlide');
    }
    if(body.offsetWidth<900){
        currentSlides = [1];
        document.querySelector('.slide2').classList.add('noneSlide');
        document.querySelector('.slide3').classList.add('noneSlide');
    }
})


