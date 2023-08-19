//indexDB

document.addEventListener("DOMContentLoaded", crmDB);

function crmDB(){
    //creando la base de datos
    let crmDB = window.indexedDB.open("crm", 1);

    crmDB.onerror = function(){
        console.log("Hubo un error creando la base de datos");
    }

    crmDB.onsuccess = function(){
        console.log("Creada correctamente");
    }

    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;
        console.log(db);
        const config = {
            keyPath: "crm",
            autoIncrement: true
        }

        const objetcStore = db.createObjectStore("crm", config);

        //agregando tabla
        objetcStore.createIndex("nombre", "nombre", {unique: false});

        
    }


}