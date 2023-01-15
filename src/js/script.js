window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#nav').classList.toggle('header__nav-is-active')
	})
})