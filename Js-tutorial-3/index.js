// console.log("hello world")
// let name = 'xyz';
// console.log(name);
// let age = 20;
// let isApproved = false;
// let firstName = undefined;
// let selectColor = null; 
ourReusableFunction()
function reusableFunction(){
    console.log("Hi world")
    reusableFunction()
}
console.log(reusableFunction())
function ourReusableFunction(){
    console.log("Heyy, world")
}
ourReusableFunction()
ourReusableFunction()
ourReusableFunction()
ourReusableFunction()
console.log(ourReusableFunction)
function ourFunctionWithArgs(a,b){
    console.log(a-b);
 }
