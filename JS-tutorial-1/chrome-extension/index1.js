// const playerName = "Nivya"
// let credits = 45
// credits = credits - 10
// playerNmae = "Something else"

// let baseprice = 250
// let discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"
//  shippingCost = 15
//  shippingTime = "7-14 days"
//   const fullPrice = baseprice - discount + shippingCost
//   console.log("Total cost: " + fullPrice + ".It will arrive in" + shippingTime)
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'> Buy! </button>"
function buy(){
    container.innerHTML = "<p>Thank you for buying!</p>"
}