// for (let i = 0; i = 6; i = 1){
//     console.log(i)
// }
// for (let i =  10; i < 101; i += 10){
//     console.log(i)
// }
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you",
//     "all good. Been working on my portfolio",
//     "Same here!"
// ]
// for (let i = 0; i < 5; i += 1){
//     console.log(messages(i))
// }
// console.log(messages)
// let sentence = ["Hello", "my","name", "is", "Nivya"]
// let greetingEl = documnet.getElementById ("greeting-el") 
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime(){
//     if (player1Time < player2Time){
//         return player1Time
//     }
//     else if (player2Time < player1Time){
//         return player2Time
//     }
//     else{
//         return player1Time
//     }
//     }
//     let fastestRace = getFastestRaceTime()
//     console.log(fastestRace)

//     function getTotalRaceTime(){
//         return player1Time + player2Time
//     }
//     let totalTime = getTotalRaceTime()
//     console.log(totalTime)
//      let randomNumber = Math.random()
//      console.log(randomNumber)
//      randomNumber = Math.floor(Math.random() * 6) + 1
//      console.log(randomNumber)

     let hasCompletedCourse = true
     let givesCertificate = true

     if (hasCompletedCourse === true && givesCertificate === true){
        generateCertificate()
     }
     function generateCertificate(){
        console.log("Generating certificate...")
     }
     let likesDocumentaries = true
     let likesStartups = true

     if (likesDocumentaries === true || likesStartups === true){
        recommendMovie()
     }
     function recommendMovie() {
        console.log("Hey, check out this new new film we think you will like")

     }
     let course = {
        title: "Learn CSS Grid for free",
        lessons: 16,
        creator: "Per Harald Borgen",
        length: 63,
        level: 2,
        isFree: true,
        tags: ["html", "css"]
     }
     console.log( course.tags)
     let castle = {
        title: "Live like a king in my castle",
        price: 190,
        isSuperHost: true,
        images: ["img/inex.jpeg", "img/index1.jpeg"]
     }
     console.log(castle.price)
     console.log(castle.isSuperHost)  
     let data = {
     Name : "Nivya",
      age : 23,
      country : "India"
     }
     function logData(){
        console.log(data.Name + " is " + data.age + " years old and lives in " + data.country )
     }
     logData()

     let age = 15
     function passengerDiscount(){
        if(age < 6){
            console.log("free")
        }
        else if(age < 18){
            console.log("child-discount")
        }
        else if( age < 27){
            console.log("student-discount")
        }
        else if( age < 67 ){
            console.log("full-prize")
        }
        else{
            console.log("senior-citizen-discount")
        }
     }
     let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
     console.log("The 5 largest countries in the world:")
     for (let i = 0; i < largeCountries.length; i++){
        console.log("-" + largeCountries[i])
     }
     let largestCountries = ["Tuvalu", "India","USA","Indonesia","Monaco"]