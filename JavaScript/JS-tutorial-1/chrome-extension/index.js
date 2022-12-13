
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

const tabBtn = document.getElementById("tab-btn")

// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
//   const tabs = [
    // {url: "htttps://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.SetItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    // console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// console.log(localStorage.getItem("myLeads"))
inputBtn.addEventListener("click", function () {
    // console.log("Button clicked ")
    myLeads.push("inputEl.value")
    // console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})
// function saveLead(){
//     console.log("Button.clicked!")
// }
function render(leads) {
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {


        listItems +=
           `<li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
        console.log(listItems)
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.textContent = listItems
}
