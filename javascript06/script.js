
function guardarPersona(){
let formulariosHtml = document.forms["formulario"]

let nombre = formulariosHtml['idNombre'].value
let apellido = formulariosHtml['idApellido'].value
let edad = formulariosHtml['idEdad'].value

console.log(`El estudiante es: ${nombre} ${apellido} ${edad}`)


document.getElementById("respuesta").innerHTML = `<h1>El estudiante es: ${nombre + " " + apellido + " " + edad}</h1>`; 
mostrarPersona(nombre,apellido,edad)
}

function mostrarPersona(nombre,apellido,edad){
    let bodyelement = document.getElementById("detalle")
    console.log(bodyelement);
    bodyelement.innerHTML += `
     <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
     </tr>
    `
}
