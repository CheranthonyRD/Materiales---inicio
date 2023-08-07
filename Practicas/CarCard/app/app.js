const img = document.querySelector(".card__img");

const red = document.querySelector(".red");
const black = document.querySelector(".black");
const white = document.querySelector(".white");

const colors = {
    red: "./assets/imgs/roja.avif",
    black: "./assets/imgs/negra.webp",
    white: "./assets/imgs/blanca.jpg"
}

red.addEventListener("click", changeRed);
black.addEventListener("click", changeBlack);
white.addEventListener("click", changeWhite);


//functions
function changeRed(){
    img.src = colors.red;
}

function changeBlack(){
    img.src = colors.black;
}

function changeWhite(){
    img.src = colors.white;
}
