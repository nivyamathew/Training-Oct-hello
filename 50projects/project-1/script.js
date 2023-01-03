'use strict';
const card = document.querySelectorAll('.cards')
card.forEach((cards)=> {
    cards.addEventListener('click', ()=>{
        removeActiveClasses()
        cards.classList.add('active')
    })
})
function removeActiveClasses() {
    card.forEach(cards => {
        cards.classList.remove('active')
    })
}