let number = 96
let a =0
let b = 0
function primeNumber(){
    if (number >= 2){    
    for(let i = 2; i < number; i++){   
        if (number % i === 0 ){
            a++
        }
        // else{
        //     b = b + 1
        // }    
 }
 if(a === 0){
    console.log("Prime Number")
 }
 else
    console.log("Not a Prime Number")
}
else
    console.log("Not a Prime Number")
}
let prime = primeNumber()

