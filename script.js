
const hamBtn = document.querySelector('.nav-icon');
const navBar = document.querySelector('nav');

hamBtn.addEventListener('click', function(){
    hamBtn.classList.toggle('changeIcon');
    navBar.classList.toggle('showNav');
});