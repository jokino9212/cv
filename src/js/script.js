const nav = document.getElementById('nav');
const burger = document.getElementById('burger');


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