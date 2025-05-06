window.addEventListener("scroll", function () {
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky-top", window.scrollY > 150);
});
