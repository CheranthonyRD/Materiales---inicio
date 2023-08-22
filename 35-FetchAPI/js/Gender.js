const url = "https://api.genderize.io?name=";
const nombre = document.querySelector("#nombre");
const btn = document.querySelector("#btn-gender");


btn.addEventListener("click", getGender);



async function getGender(){
    try {
        const response = await fetch(url + nombre.value);
        const nameResponse = await response.json();
        paintPerson(nameResponse);
    } catch (error) {
        console.log(error);
    }
}

function paintPerson(person){

    const li = document.createElement("LI");
    const ul = document.querySelector("#ul");

//pintar los datos en el nav
    li.classList.add("nav-item", "bg-white");
    li.textContent = `Nombre: ${person.name}
                    Genero: ${person.gender}
                    Probabilidad: ${person.probability}`;
    ul.appendChild(li);
}