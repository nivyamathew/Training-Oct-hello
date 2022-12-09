// let firstCard =  getRandomCard() 
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = "" 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)
function getRandomCard(){
    return Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
        renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    // sumEl.textContent = "Sum: " + sum
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
if (sum <= 20 ) {
    message = "Do you want to draw a new card! 🙂"
}
else if (sum === 21){  
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
}
else {
    message = "You're out of the game! 😭" 
    isAlive = false
}
messageEl.textContent = message
}
function newCard(){
    let card = getRandomCard()
    sum = card
    cards.push(card)
    console.log(cards)
    renderGame()
}

// console.log(4 === 3)
// console.log(5 > 2)
// console.log(12 > 12)
// console.log(3 < 0)
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)
// let age = 110
// if (age < 100){
//     console.log("Not eligible")
// }
// else if(age === 100){
//     console.log("Here is the birthday card from the king")
// }
// else{
//     console.log("Not eligible, You have already gotten")
// }
// let featuredPosts = ["Checkout my  Netflix clone", 
//         "Here's thecode for my project",
//         "I've just relaunched my portfolio"
//     ]
//     // let experience = ["Trainee at Vonnue", "frontend developer"] 
//     // console.log (experience[1])
//     // console.log (experience[2])
//     console.log(featuredPosts.length) 