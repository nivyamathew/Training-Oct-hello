for (let i = 0; i = 6; i = 1){
    console.log(i)
}
for (let i =  10; i < 101; i += 10){
    console.log(i)
}
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you",
    "all good. Been working on my portfolio",
    "Same here!"
]
for (let i = 0; i < 5; i += 1){
    console.log(message(i))
}
// console.log(messages)
// let sentence = ["Hello", "my","name", "is", "Nivya"]
// let greetingEl = documnet.getElementById ("greeting-el") 
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }
let player1Time = 102
let player2Time = 107
function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    }
    else if (player2Time < player1Time){
        return player2Time
    }
    else{
        return player1Time
    }
    }
    let fastestRace = getFastestRaceTime()
    console.log(fastestRace)

    function getTotalRaceTime(){
        return player1Time + player2Time
    }
    let totalTime = getTotalRaceTime()
    console.log(totalTime)
     let randomNumber = Math.random()
     console.log(randomNumber)
     randomNumber = Math.floor(Math.random() * 6) + 1
     console.log(randomNumber)

     let hasCompletedCourse = true
     let givesCertificate = true

     if (hasCompletedCourse === true && givesCertificate){
        generateCertificate()
     }
     function generateCertificate(){
        console.log("Generating certificate...")
     }