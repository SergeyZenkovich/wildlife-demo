const prevButton = document.querySelector('.slider__prevButton');
const nextButton = document.querySelector('.slider__nextButton');
const slides = document.querySelector('.slider__slides');
const body = document.querySelector('body');
function calculateTranslate(){
    let translate = document.querySelector('.slider__slides').style.transform || 0;
    let value  = translate===0? 0: Number(translate.slice(translate.indexOf('(')+1,translate.indexOf('px')));
    return value;
}


prevButton.addEventListener('click', (e)=>{
    let value = calculateTranslate();
    if(value!==0 && body.offsetWidth<1440){
        slides.style.transform = `translate(${330+value}px)`;
    }
    
});
nextButton.addEventListener('click', (e)=>{
    let value = calculateTranslate();
    console.log(value);
    if(value>-660 && body.offsetWidth<900){
        slides.style.transform = `translate(-${Math.abs(value-330)}px)`;
    }
    if(value>-330 && body.offsetWidth<1440){
        slides.style.transform = `translate(-${Math.abs(value-330)}px)`;
    }
    
})