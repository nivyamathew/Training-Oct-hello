// console.log("Hello from JavaScript")
// var a
// var b = 2
// console.log(a)
// a = 1
// b = console.log(a)
// var c = "I am a"
// c = c + " String!";
// console.log(c)
// var difference = 40 -10
// console.log(difference)
// var mystring = "I am a \"double quoted\" string inside \"double quotes\""
// console.log(mystring)
// var string = 'I am a "double quoted" string inside "double quotes"'
// console.log(string)
// var escapeString = "FirstLine\n\r\\SecondLine\nThirdLline"
// console.log(escapeString)
// var myStr = "tello world"
// myStr = "Hello world"
// console.log(myStr)
// var lastName = "curriculum"
// var thirdToLastLetterOfLastName = lastName[lastName.length -3]
// console.log(thirdToLastLetterOfLastName) 
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     var result = "";
//     result += "The " + myAdjective +  myNoun + myVerb + " to the store " + myAdverb
//     return result;
// }
// console.log(wordBlanks(" dog", " big", " ran", "quickly"))
// var ourArray = [["John", 23],["everything",24354]]
// console.log(ourArray)
// var array = [[18,64, 99],[4,5,6],[3,5,776],[[67,68,5],13,78]]
// // array[0] = 33
// var myData = array[2][1]
// console.log(myData)
// var stringArray = [334,445,33]
// var removearray = stringArray.splice(1,2 )
// console.log(removearray)
// var ourarray  = ["Stimpson", "j", "cat"]
// ourarray.push(["happy","joy"])
// console.log(ourarray)
// var splicearray = [33,35,55,"sdsd"]
// splicearray.splice(2,2, 24,'shdg')
// console.log(splicearray)
// function ourReusableFunction(){
//     console.log("Heyya, World")
// }
//08/12/2022
// ourReusableFunction()
// function reusableFunction(){
//     console.log("Hi world")
//     reusableFunction()
// }
// console.log(reusableFunction())
// function ourReusableFunction(){
//     console.log("Heyy, world")
// }
// ourReusableFunction()
// ourReusableFunction()
// ourReusableFunction()
// ourReusableFunction()
// console.log(ourReusableFunction)
// function ourFunctionWithArgs(a,b){
//     console.log(a-b);
//  }
//  ourFunctionWithArgs(15.67, 7)
// var myGlobal = 10
// function fun1(){

// }
// function fun2(){
//     var output = ""
//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal
//     }
//     if (typeof oopsGlobal != "undefined"){
//         output += "oopsGlobal: " + oopsGlobal
//     }
//     console.log(output);
// }
// fun1()
// fun2()
// console.log(fun1)
// console.log(fun2 )
// function myLocalScope(){
//     var myVar = 5
//     console.log(myVar);
// }
// myLocalScope() 
// var outerWear = "T-Shirt"
// function myOutfit(){
// return outerWear
// }
// console.log(myOutfit())
// function testLogicalAnd(val){
    // if (val <= 50 && val >= 25){
            // return "yes"
    // }
    // return "NO";
//  }
//  testLogicalAnd(10)
//  console.log(testLogicalAnd)
// function test(val){
    
//     if (val > 5){
//         console.log(" bigger than 5")
//     }
//     else if
//     (val < 5)
//     {    
//         console.log (" smaller than 5")
//     }
//     else
//     console.log("5")
// }
// test(10)
// var names = ["Hole-in-one!", "Eagle", "Birdie", "par", "Bogey", "Double Bogey", "winner"]
// function golfScore(par, strokes){
//     if(strokes === 1){
//         return names[0]
//     }
//     else if (strokes <= par -2){
//         return names[1]
//     }
//     else 
//         return names[4]     
// }
// console.log(golfScore(5,4))
// function caseSwitch(val){
//     var answer = ""
//     switch(val) {
//         case 1:
//             answer = "alpha"
//             break
//             case 2:
//                 answer = "beta"
//                 break
//                 case 3:
//                     answer = "gamma"
//                     break
//                     case 4:
//                         answer = "delta"
//     } 
//     return answer;
// }
// console.log(caseSwitch(5))
// function Than(a,b){
//     return a < b;
// }     
// console.log(Than(50, 15))
// function abTest(a,b){
//     if (a < 0 || b < 0){
//         return undefined
//     }
//     return Math.round(Math.poe(Math.sqrt(b), 2))
// }
// console.log(abTest(-2, 2))
// var count = 0
// function cc(card){
//     switch(card){
//         case 2:
//             case 3:
//                 case 4:
//                     case 5:
//                         count++;
//                         break;
//                         case 10:
//                             case "J":
//                                 case "Q":
//                                     case "k":
//                                         case "A":
//                                             count--;
//                                             break;

                                           
//     }
//     var holdbet = 'Hold'
//     if (count > 0){
//         holdbetv= ' bet'
//     }
//     return count + holdbet;
// }
// console.log(cc(card))
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everythig!"]
}
ourDog.bark = "bow-wow";
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}
myDog['bark'] = "woof!"
console.log(myDog)
