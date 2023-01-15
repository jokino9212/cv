window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#burger').classList.toggle('header__burger-button--is-active')
		document.querySelector('#nav').classList.toggle('header__nav-is-active')
	})
})