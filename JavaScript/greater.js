let firstNumber = -30
let secondNumber = 15.001
let thirdNumber = 15.001

 function greatestNumber() {
    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        return firstNumber
    }
    else if(secondNumber > thirdNumber && secondNumber > firstNumber){
        return secondNumber
    }
    else
    return thirdNumber
 }
 let greaterNumber = greatestNumber()
 console.log (greaterNumber)