// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



// Simulate a delay using setTimeout
setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
}, 2000); 
