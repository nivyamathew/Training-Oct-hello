
let myLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
// myLeads.push("www.epiclead.com")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
deleteBtn.addEventListener("dbclick", function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})


// console.log(localStorage.getItem("myLeads"))
inputBtn.addEventListener("click", function () {
    // console.log("Button clicked ")
    myLeads.push("inputEl.value")
    // console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    // console.log(localStorage.getItem("myLeads"))
})
// function saveLead(){
//     console.log("Button.clicked!")
// }
function renderLeads() {
    let listItems = " "
    for (let i = 0; i < myLeads.length; i++) {


        listItems +=
           `<li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
        console.log(listItems)
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
