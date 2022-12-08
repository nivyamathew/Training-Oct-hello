const recipient = "James"
const email = `Hey ${recipient}! How is it going? Cheers Per`


console.log(email)
console.log (Boolean(""))
console.log (Boolean("0") )
console.log (Boolean(100) )
console.log (Boolean(null))
console.log (Boolean([0]))
console.log (Boolean(0))


// function greetUser(greeting, name){
    // welcomeEl.textContent = `${greeting}, ${name} 👋`
// }
// let hi = "Howdy"
// greetUser(hi, "James")
function add(num1, num2){
    return num1 + num2
}
console.log(add(3,4))
console.log(add(9, 102))

function getFirst(arr){
    return arr[0]
}
let firstCard = getFirst([10, 2, 5])
console.log(firstCard)
const player ="ABCD"
const opponent = "PQRS"
const game = "AmazingFighter"
let points = 0
let hasWon = false

 points += 100
 hasWon = true

if (hasWon){
    console.log(player + " got " + " points and won the " + game + " game!")
}
else{
    console.log("The winner is " + opponent + "! " + player + " lost the game")
}
let myCourse = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
function logItems(arr){
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}
logItems(myCourse )

// let myCredits = localStorage.getItem("myCredits")
// console.log(myCredits)

function generateSentance(desc, arr){
    let baseString = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1
    for (let i = 0; i< arr.length; i++){
        if (i === lastIndex){
        baseString += arr[i]
    }
    else{
        baseString += arr[i] + ", "
    }
}
    return baseString
}


const sentence = generateSentance("highest mountains",["Mount Everast", "K2"])
console.log(sentence)
