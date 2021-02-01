var counter = 1;
if(!window.matchMedia("(min-width: 1024px)").matches) {
    document.getElementById("button-dropdown").onclick = () => {   
        if (counter == 2) {
            document.getElementById("menu").style = "display: none";
            counter = 1;
        } else {
            document.getElementById("menu").style = "display: block";
            counter++;
        }
    }  
}

