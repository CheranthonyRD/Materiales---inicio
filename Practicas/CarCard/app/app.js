const img = document.querySelector(".card__img");
const buttons = document.querySelector(".buttons");
const label = document.querySelector(".label");
const title = document.querySelector("title");

const colors = {
    red: "./assets/imgs/roja.avif",
    black: "./assets/imgs/negra.webp",
    white: "./assets/imgs/blanca.jpg"
}

const backgrounds = {
    red: "red",
    white: "#fff",
    black: "#000"
}

buttons.addEventListener("click", changeColor);

//functions
function changeColor(e){
    const attr = e.target.getAttribute("color");
    if(e.target.classList.contains("btn")){
        img.src = colors[attr];
        if(attr === "white"){
            label.style.backgroundColor = backgrounds[attr];
            label.style.color = "black";
        }

        if(attr === "black"){
            label.style.backgroundColor = backgrounds[attr];
            label.style.color = "#fff";
        }

        label.style.backgroundColor = backgrounds[attr];
        
    }
}



