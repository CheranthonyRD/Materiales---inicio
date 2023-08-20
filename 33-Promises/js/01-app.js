

//callback

// function practica(num1, num2, callback){
//     return callback(num1, num2);
// }

// console.log(practica(5,5, (num1, num2)=>{
//     return num1*num2;
// }));


//variables
const paises = ['Noruega', "Republica Dominicana", "Argentina", "Chile", "Suecia"];


//functions

function showContries(paises){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais);
        })
    }, 1000)
}

//function con callback
function addCountry(pais, callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    }, 2000);
}


//llamadas a funciones
showContries(paises);

addCountry('Alemania', ()=>{
    showContries(paises);
});
