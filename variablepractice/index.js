// let firstName= "Nivya"
// let lastName= "Mathew"
// let fullName = firstName + " " + lastName 
// console.log(fullName)
// let myname = "Hannah"
// let greeting = "Hi there"
//  function greetings() {
//     console.log(greeting + ", " + myname + "!")
//  }
//  let count = 6
//  console.log(count)
//  let myPoints = 3
//  function add3Points() {
//     myPoints += 3
//  }
//  function remove1Points(){
//     myPoints -= 1
//  }
//  add3Points()
//  add3Points()
//  add3Points()
//  remove1Points()
//  remove1Points()
 
//  console.log(myPoints)
//  console.log("2" + 2)
//  console.log(11+7)
//  console.log(6 + "5")

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "something went wrong"
}
//////////////////////////////////////////CALCULATOR////////////////////////////////
   
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl= document.getElementById("sum-el")

function add(){
    let result= num1 + num2  
    sumEl.textContent = "Sum: " + result
    // console.log("add clicked")
}
    function substract(){
        let result = num1 - num2
        sumEl.textContent = "Sum: " + result
    }
    function divide(){
        let result = num1 / num2
        sumEl.textContent = "Sum: " + result
    }
    function multiply(){
        let result = num1 * num2
        sumEl.textContent = "Sum: " + result
    }