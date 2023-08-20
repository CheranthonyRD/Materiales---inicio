//promises

// const promesa = new Promise((resolve, reject)=>{
//     const cumple = false;

//     if(cumple){
//         resolve("cumplio");
//     }else{
//         reject("no cumplio");
//     }
// });

// promesa
//     .then(resultado =>{
//         console.log(resultado);
//     })
//     .catch(error =>{
//         console.log(error)
//     })

let paises = [];

const nuevoPais = pais => new Promise(resolve=>{
    setTimeout(()=>{
        paises.push(pais);
        resolve(`Pais: ${pais} agregado`);
        console.log(paises);
    }, 3000)
});

nuevoPais('Haiti')
.then(resultado => {
    console.log(resultado);
    return nuevoPais("Republica Dominicana")
})
.then(resultado =>{
    console.log(resultado);
})
