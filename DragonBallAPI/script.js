const url = "https://dragonball-api.com/api";

function cargarPersonajes() {
  fetch(`${url}/characters`)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      datos.items.forEach((personaje) => {
        obtenerPersonajeTarjeta(personaje);
      });
    })

    .catch((error) => console.log("Error: " + error));
}

function obtenerPersonajeTarjeta(personajeTarjeta) {
  let bodyelement = document.getElementById("detallePersonaje");

  bodyelement.innerHTML += `
    <div class="card" style="width 18rem; margin: 10px; color:black;">
        <img src="${personajeTarjeta.image}" class="card-img-top" alt="${personajeTarjeta.name}" style="height: 200px; object-fit:contain;">
            <div class="card-body">
                <h5 class="card-title">${personajeTarjeta.name}</h5>
                <p class="card-text">
                Especie: ${personajeTarjeta.race} <br>
                Base KI: ${personajeTarjeta.ki} <br>
                Total Ki: ${personajeTarjeta.maxKi} <br>
                Afiliacion: ${personajeTarjeta.affiliation} <br>
                </p>
            </div>
    </div>
    `;
}
