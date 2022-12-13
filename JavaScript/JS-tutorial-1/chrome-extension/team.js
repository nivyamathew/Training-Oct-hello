const imgs = [
    "img/img1.jpg",
    "img/img2.webp",
    "img/img3.png"
]
const container = document.getElementById("container")
function renderImages(){
    let imgsDom = ""
    for (let i = 0; i < imgs.length; i++){
        imgsDOM +=`<img alt ="students in the Guitar Class" class = "team-img" src="${imgs[i]}"> `
    }
    container.innerHTML = imgsDOM
}
renderImages()