'use strict';
// MODAL WINDOW
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function (e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/*// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'we use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.clolneNode(true));
// header.before(message);
// header.after(message)

// delete elements
document.querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.parentElement.removeChild(message);
    });*/

/*// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; 1
console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav_logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.src);
console.log(logo.getAttribute('src'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
// logo.className = 'Jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log('height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth);

    // scrolling
    // window.scrollTo(s1coords.left, s1coords.top + window.pageXOffset,
    //     s1coords.top + window.pageYOffset);

    // window.scrollTo({
    //     left:s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behaviour: 'smooth',
    // });
    section1.scrollIntoView({ behavior: 'smooth' });
});*/

/*const h1 = document.querySelector('h1');
const alertH1 = function (e) {
    alert('addEventListener: Great! Ypu are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1);
// h1.addEventListener('mouseenter',function (e){
//     alert('addEventListener: Great! You are reading the heading :D');
// });
// h1.onmouseenter = function (e) {
//     alert('onmouseenter: Great! You are reading the heading :D')
// };
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);*/


const randomInt = (min,max) =>
Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0,255)})`;
// console.log(randomColor);

document.querySelector('.nav_link').addEventListener('click',function(e){
    // console.log('LINK');
    this .style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // stopPropagation
    // e.stopPropagation();
});
document.querySelector('.nav_link').addEventListener('click',function(e){
    console.log('LINK');
    this .style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);

});
document.querySelector('.nav_link').addEventListener('click',function(e){
    console.log('LINK');
    this .style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);

}, 
true
);


