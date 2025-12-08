const fetch = require("node-fetch");

const url = "https://crudcrud.com/api/e48deef6106f41698ef24302a5e29992"

function obtenerPersonas() {
    return fetch(`${url}/persona`)
        .then((respuesta) => respuesta.json())
        .then((datos) => datos)
        .catch((error) => console.log("Error: " + error));
}

function obtenerUnaPersonaPorID(id){
    return fetch(`${url}/persona/${id}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos))
    .catch((error) => console.log("Error: " + error));
}

//obtenerUnaPersonaPorID("693434d9e9794a03e851e1be");

let persona3 = {
    nombre: "Juan",
    apellido: "De la Cruz",
    edad: 28
}

function guardarPersona(persona){
    return fetch(`${url}/persona`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos))
    .catch((error) => console.log("Error: " + error));
}

//guardarPersona(persona3);

function actualizarPersona(id, persona){
    return fetch(`${url}/persona/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
    
    
    .then((datos) => {
            if (datos.status == 200){
                console.log("La persona ha sido actualizada");
            }
            else{
                console.log("No se pudo actualizar la persona");
            }       
    })
    .catch((error) => console.log("Error: " + error));
}

let nuevaPersona = {
    nombre: "Ana",
    apellido: "Quevedo",
    edad: 32
}

//actualizarPersona("69343b66e9794a03e851e20d", nuevaPersona);

function eliminarPersona(id){
    return fetch(`${url}/persona/${id}`, {
        method: "DELETE"
    })
    .then((datos) => {
        if (datos.status == 200){
            console.log("La persona ha sido eliminada");
        }
        else{
            console.log("No se pudo eliminar la persona");
        }       
    })
    .catch((error) => console.log("Error: " + error));
}

//eliminarPersona("69343b63e9794a03e851e20c");