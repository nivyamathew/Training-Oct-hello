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