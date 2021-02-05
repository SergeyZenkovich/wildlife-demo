const slidesCount = document.querySelector('.slider__slides').children.length;
const prevButton = document.querySelector('.slider__prevButton');
const nextButton = document.querySelector('.slider__nextButton');

let currentSlides = [1,2,3];
let hiddenSlides = [];

function hideSlide(hiddenSlides){
    hiddenSlides.forEach(el=> document.querySelector(`.slide${el}`).classList.add('noneSlide'));
}
function showSlide(currentSlides){
    currentSlides.forEach(el=> document.querySelector(`.slide${el}`).classList.remove('noneSlide'));
}

function setSliderView(){
    if(window.innerWidth>1439){
        currentSlides = [1,2,3];
        hiddenSlides = []
        showSlide(currentSlides);
    }
    if(window.innerWidth>900 && window.innerWidth<1440){
            currentSlides = [1,2];
            hiddenSlides = [3];
        showSlide(currentSlides);
        hideSlide(hiddenSlides);
    }
    if(window.innerWidth<900){
        currentSlides = [1];
        hiddenSlides = [2,3];
        showSlide(currentSlides);
        hideSlide(hiddenSlides);
    }
}

function changeSliderView(){
    if(window.innerWidth>1439){
        currentSlides = [1,2,3];
        hiddenSlides = []
        showSlide(currentSlides);
    }
    if(window.innerWidth>900 && window.innerWidth<1440){
        if(currentSlides.length === 1){
            currentSlides[0] === 3 ? currentSlides.unshift(hiddenSlides.pop()) : currentSlides.push(hiddenSlides.shift());
        }
        else if(currentSlides.length === 3){
            currentSlides = [1,2];
            hiddenSlides = [3];
        }
        showSlide(currentSlides);
        hideSlide(hiddenSlides);
    }
    if(window.innerWidth<900){
        if(currentSlides.length === 2){
            hiddenSlides.unshift(currentSlides.pop());
            showSlide(currentSlides);
            hideSlide(hiddenSlides);
        }
    }
}

function listToNextSlide(){
    if( currentSlides[currentSlides.length-1]!==3){
        currentSlides.push(hiddenSlides.shift());
        hiddenSlides.push(currentSlides.shift());
        showSlide(currentSlides);
        hideSlide(hiddenSlides);
    }
}
function listToPrevSlide(){
    if(currentSlides[0]!==1){
        currentSlides.unshift(hiddenSlides.pop());
        hiddenSlides.unshift(currentSlides.pop());
        showSlide(currentSlides);
        hideSlide(hiddenSlides);
    }
}
window.onload = setSliderView;

window.addEventListener('resize', changeSliderView);
nextButton.addEventListener('click', listToNextSlide);
prevButton.addEventListener('click', listToPrevSlide);


