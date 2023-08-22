//obtener data TXT

const btnTxt = document.querySelector("#cargarTxt");
export const contenido = document.querySelector("#contenido");
const url = "./data/datos.txt";

btnTxt.addEventListener("click", loadTxt);

//functions-start

async function loadTxt(){
    try {
        const response = await fetch(url);
        const txt = await response.text();
        paintTxt(txt);
    } catch (error) {
        console.log(error);
    }
}

function paintTxt(txt){
    const div = document.createElement("DIV");
    div.textContent = txt;
    contenido.appendChild(div);
    deleteElement(div).then(el => el.remove());
}

//functions-end

//promises-start
   export const deleteElement = element =>  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(element);
        }, 2000);
    });
//promises-end