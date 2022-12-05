let firstCard =  10  
let secondCard = 4
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
let message = "" 

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    cardsEl.textContent = "Cards: "  + firstcard + " " + secondcard
    sumEl.textContent = "Sum: " + sum
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
    console.log("Drawing a new card from the deck  ")
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