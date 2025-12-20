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
    <div class="card" style="width 18rem; margin: 10px; color:black;">
        <img src="${tarjetaPersonaje.image}" class="card-img-top" alt="${tarjetaPersonaje.name}" style="height: 200px; object-fit:contain;">
            <div class="card-body">
                <h5 class="card-title">${tarjetaPersonaje.name}</h5>
                <p>
                    Estado: ${tarjetaPersonaje.status}<br>
                    Especie: ${tarjetaPersonaje.species} <br>
                    Género: ${tarjetaPersonaje.gender} <br>
                </p>
            </div>
    </div>
    `;



} 