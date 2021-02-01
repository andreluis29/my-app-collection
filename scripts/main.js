var counter = 1;

function menuChange(media) {
    if (media.matches) {
        document.getElementById("menu").style = "display: block"
        document.getElementById("button-dropdown").style = "display: none"
    } else {
        document.getElementById("button-dropdown").style = "display: block"
        document.getElementById("menu").style = "display: none"
       
    }
}  

document.getElementById("button-dropdown").onclick = function () {
    console.log(counter)
    if(counter > 1) {
        counter = 1;
        document.getElementById("menu").style = "display: block"
    } else {
        document.getElementById("menu").style = "display: none"
        counter++
    }
}
const media = window.matchMedia("(min-width: 1024px)")
menuChange(media)
media.addListener(menuChange)

