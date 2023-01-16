const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const slider =document.querySelector('.content__slider');
const sliderImages =document.querySelectorAll('.content__slider-img');
const sliderLine =document.querySelector('.content__slider-line');

const sliderBtnPrev =document.querySelector('.content__btn--prev');
const sliderBtnNext =document.querySelector('.content__btn--next');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

window.addEventListener('DOMContentLoaded', function () {
	burger.addEventListener('click', function () {
		burger.classList.toggle('header__burger-button--is-active')
		nav.classList.toggle('header__nav--is-active')
	})
})

document.addEventListener('click', (e) => {
	const clickBurger = e.composedPath().includes(burger);
	const clickNav = e.composedPath().includes(nav);
	if (!clickBurger && !clickNav) {
		burger.classList.remove('header__burger-button--is-active')
		nav.classList.remove('header__nav--is-active')
	}
})

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function nextSlide() {
	sliderCount++;

	if (sliderCount >= sliderImages.length) {
		sliderCount = 0;
	}
	rolSlider();
}

function prevSlide() {
	sliderCount--;

	if (sliderCount < 0) {
		sliderCount = sliderImages.length -1;
	}
	rolSlider();
	
}

function rolSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

setInterval(() => {
	nextSlide()
	}, 5000);