const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
document.addEventListener('click', (e) => {
	const clickBurger = e.composedPath().includes(burger);
	const clickNav = e.composedPath().includes(nav);
		if (!clickBurger && !clickNav) {
			burger.classList.remove('header__burger-button--is-active')
			nav.classList.remove('header__nav--is-active')
		}
})

window.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.getElementById('burger').classList.toggle('header__burger-button--is-active')
		document.getElementById('nav').classList.toggle('header__nav--is-active')
	})
})