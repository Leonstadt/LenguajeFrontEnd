const api = "https://rickandmortyapi.com/api"

function cargarPersonajes(){
    fetch(`${api}/character`)
    .then((respuesta) => respuesta.json())
    .then((datos)=> {
        datos.results.forEach((personaje) => {
        obtenerTarjetaPersonaje(personaje);
        
    });
    })
    .catch((error) => console.log(error))
}

function verValores() {
    fetch(`${api}/character`)
    .then((respuesta) => respuesta.json())
    .then ((datos) => console.log(datos))
}


function obtenerTarjetaPersonaje(tarjetaPersonaje) {

    let bodyelement = document.getElementById("detallePersonaje")

    bodyelement.innerHTML += ` 
    <div class="tarjeta-personaje">
            <img class="imagen-personaje" src="${tarjetaPersonaje.image}" alt="${tarjetaPersonaje.name}">
            <div class="tarjeta-cuerpo">
                <h5>${tarjetaPersonaje.name}</h5>
                <p>
                    Estado: ${tarjetaPersonaje.status}<br>
                    Especie: ${tarjetaPersonaje.species} <br>
                    Género: ${tarjetaPersonaje.gender} <br>
                </p>
            </div>


    </div>
    
    
    
    
    `




} 