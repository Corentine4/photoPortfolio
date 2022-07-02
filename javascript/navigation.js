// ----- NAVIGATION SCROLL EFFECT -----

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
        navigation.classList.add('navscroll');
    } else{
        navigation.classList.remove('navscroll');
    }
});

// ----- BURGER MENU -----

// Appearance of navigation : when the user clicks on the burger menu
const navbar = document.querySelectorAll('.burger');
const burger = document.querySelectorAll('nav ul');

navbar[0].addEventListener('click', () => {
    burger[0].classList.toggle('showNav');
});


// Close the burger menu when clicking on a li
const navbarli = document.querySelectorAll('nav ul li');

navbarli.forEach(function closeNav (i) {
    i.addEventListener('click', function(){
        burger[0].classList.toggle('showNav');
    });
});