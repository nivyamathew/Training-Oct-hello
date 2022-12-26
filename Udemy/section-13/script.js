'use strict';
// MODAL WINDOW
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}; ``
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

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const img = document.querySelector('.img')
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
header.prepend(message);
header.append(message);
//  header.append(message.clolneNode(true));
header.before(message);
header.after(message)

/* // delete elements
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
document.documentElement.style.setProperty('--color-primary', 'orangered');*/

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
});
/*// Page navigation
document.querySelectorAll('nav_link').forEach(function(el){
    el.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({
            behavior:'smooth'
        });
    });
});*/


document.querySelector('.nav_links').addEventListener('click', function (e) {
    // console.log(e.target);
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav_link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        })
        console.log('LINK')
    }
});
// tabbed component

const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelector('.operations_tab-container');
const tabsContent = document.querySelectorAll('operations_content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations_tab');
    console.log(clicked);

    // Guard clause
    if (!clicked) return;

    //  Remove Active classes
    tabs.forEach(t => t.classList.remove
        ('operations_tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations_content--active'));

    // Activate tab
    clicked.classList.add('operations_tab--active');
    // if(clicked){
    // }

    // Activate content area
    document.querySelector(`.operations_content--${clicked.dataset.tab}`)
        .classList.add('operations_content--active');
});

/*// menu fade animation
const handleHover = function (e) {

    if (e.target.classList.contains('nav_link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav_link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }

};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

*/
/*// sticky navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(this.window.scrollY > initialCoords.top)
    nav.classList.add('sticky');
    else nav.classList.remove('sticky');

});*/
// sticky navigation: intersection observer API
// const obsCallback = function(entries, observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// };
// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver
// (obsCallback, obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);
    // nav.classList.add('sticky');
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Revealnsections
// const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})
allSections.forEach(function (section) {

    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    // entry.target.classList.remove('lazy-img');
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg,
    {
        root: null,
        threshold: 0,
        rootMargin: '-200px',
    });
imgTargets.forEach(img => imgObserver.observe(img));

// slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider_btn--left');
    const btnRight = document.querySelector('.slider_btn--right');
    const dotContainer = document.querySelector('.dots');
    // const slider = document.querySelector('.slider');
    // slider.style.transform = 'scale(0.2) translateX(-800px)';
    // slider.style.overflow = 'visible';

    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend',
                `<button class="dots_dot" data-slide="${i}"></button>`
            );
        });
    };
    createDots();
    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots_dot')
            .forEach(dot => dot.classList.remove('dots_dot--active'));
        document.querySelector(`.dots_dot[data-slide="${slide}"]`)
            .classList.add('dots_dot--active');
    };
    // activateDot(0);
    let curSlide = 0;
    const maxSlide = slides.length

    // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
    const goToSlide = function (slide) {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));

    }
    // goToSlide(0);
    // btnRight.addEventListener('click', function(){
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        activateDot(curSlide);

    };
    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    const init = function () {
        goToSlide(0);
        activateDot(0);
    }
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots_dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide)

        }
    });
    init()
};
slider();

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


const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor);

document.querySelector('.nav_link').addEventListener('click', function (e) {
    // console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // stopPropagation
    // e.stopPropagation();
});
document.querySelector('.nav_link').addEventListener('click', function (e) {
    console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);

});
document.querySelector('.nav_link').addEventListener('click', function (e) {
    console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);

},
    true
);

const h1 = document.querySelector('h1');

/*// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';*/

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibiling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
});
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree built!', e);
});
window.addEventListener('Load', function (e) {
    console.log('page fully loaded', e);
});
// window.addEventListener('beforeunload', function(e){
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// });
