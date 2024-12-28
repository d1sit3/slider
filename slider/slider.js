const arrowLeft = document.querySelector('.arrow__left');
const arrowRight = document.querySelector('.arrow__right');
const slides = document.querySelectorAll('.right__img');
const controlSlides = document.querySelector('.control__slides');
const navFirst = document.getElementById('first');
const navSecond = document.getElementById('second');
const navThird = document.getElementById('third');

let currentIndex = 0;
const controlCircles = [];

function createControlCircles() {
    const div = document.createElement('div');
    div.className = 'circle';
    controlSlides.appendChild(div);
    controlCircles.push(div);
}

function addPagination() {
    slides.forEach(createControlCircles);
    controlCircles[0].classList.add('active');
    controlCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlide(index));
    });
}

function addActiveClass() {
    controlCircles[currentIndex].classList.add('active');
}

function removeActiveClass() {
    controlCircles[currentIndex].classList.remove('active');
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentIndex = slideIndex;
    addActiveClass();
    showSlide();
}





function showSlide(){
    slides [currentIndex].classList.add('block');
}
function hideSlide(){
    slides[currentIndex].classList.remove('block');
}

function nextSlide(){
    hideSlide();
    removeActiveClass();
    currentIndex ++;
    if(currentIndex > slides.length - 1){
        currentIndex = 0;
    }
    addActiveClass();
    showSlide();
}
function previousSlide(){
    hideSlide();
    removeActiveClass();
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    addActiveClass();
    showSlide();
}




addPagination();
arrowRight.addEventListener('click', () =>{
    nextSlide();
    changeSlide(currentIndex);
})
arrowLeft.addEventListener('click', () =>{
    previousSlide();
    changeSlide(currentIndex);
})
navFirst.addEventListener('click', () =>{
    changeSlide(0);
})
navSecond.addEventListener('click', () =>{
    changeSlide(1);
})
navThird.addEventListener('click', () =>{
    changeSlide(2);
})