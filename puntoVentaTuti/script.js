let botonPago = document.getElementById("idBotonPago");
console.log(botonPago.disabled);

document.getElementById("menuPegajoso").style.position = "sticky";
document.getElementById("menuPegajoso").style.top = "0px";

let productos = [
  { codigo: 1010, descripcion: "Manzana", precio: 0.25 },
  { codigo: 1011, descripcion: "Pasta Colgate", precio: 1.15 },
  { codigo: 1012, descripcion: "Yogurt griego", precio: 0.5 },
  { codigo: 1013, descripcion: "Jabon", precio: 1.0 },
  { codigo: 1014, descripcion: "Cubeta de Huevos", precio: 3.5 },
];

let arregloAgregadoProducto = [];

function buscarAgregarProducto() {
  let obtenerCodigoProducto = document.getElementById("idProducto").value;
  console.log(obtenerCodigoProducto);

  if (
    obtenerCodigoProducto == "" ||
    obtenerCodigoProducto == null ||
    obtenerCodigoProducto == undefined
  ) {
    enviarAlerta(
      "alert",
      "alert-warning",
      "Estimado Usuario debe ingresar un codigo de producto para realizar la búsqueda."
    );
  } else {
    let productoEncontrado = productos.find(
      (x) => x.codigo == obtenerCodigoProducto
    );
    console.log(productoEncontrado);
    if (productoEncontrado == null || productoEncontrado == undefined) {
      enviarAlerta(
        "alert",
        "alert-danger",
        "Estimado Usuario el producto con el código ingresado no se encuentra en stock."
      );
    } else {
      arregloAgregadoProducto.push(productoEncontrado);

      renderizarTabla();
      calcularValores();
      vuelto();
    }
  }
}

function renderizarTabla() {
  document.getElementById("idDetalle").innerHTML = "";
  arregloAgregadoProducto.forEach((element, index) => {
    document.getElementById("idDetalle").innerHTML += `
        <tr>
            <td>${element.codigo}</td>
            <td>${element.descripcion}</td>
            <td>1</td>
            <td>${element.precio.toFixed(2)}</td>
            <td><span onclick="eliminarProducto(${index})" class="material-symbols-outlined">delete</span></td>
        </tr>
              `;
  });
}

//idSubtotal, idIva, idTotal

function calcularValores() {
  let sumaSubtotal = 0;
  arregloAgregadoProducto.forEach((element) => {
    sumaSubtotal += element.precio;
  });
  document.getElementById("idSubtotal").value = "$" + sumaSubtotal.toFixed(2);
  let iva = sumaSubtotal * 0.12;
  document.getElementById("idIva").value = "$" + iva.toFixed(2);
  let total = sumaSubtotal + iva;
  document.getElementById("idTotal").value = "$" + total.toFixed(2);

  return total;
}

function eliminarProducto(index) {
  arregloAgregadoProducto.splice(index, 1);
  renderizarTabla();
  calcularValores();
  vuelto();
}

function enviarAlerta(primeraClase, segundaClase, mensaje) {
  let alerta = document.getElementById("idAlerta");

  alerta.classList.add(`${primeraClase}`, `${segundaClase}`);
  alerta.innerHTML = mensaje;
  setTimeout(() => {
    alerta.classList.remove(`${primeraClase}`, `${segundaClase}`);
    alerta.innerHTML = "";
  }, 3000);
}

document
  .getElementById("idValorRecibido")
  .addEventListener("input", function () {
    vuelto();
  });

function vuelto() {
  let valorRecibido = document.getElementById("idValorRecibido").value;
  let valorTotal = calcularValores();
  let cambio = valorRecibido - valorTotal;

  let elementoCambio = document.getElementById("idCambio");
  elementoCambio.value = "$ " + cambio.toFixed(2);
  elementoCambio.style.fontSize = "30px";

  if (cambio < 0) {
    botonPago.disabled = true;
    elementoCambio.style.color = "red";
    elementoCambio.style.backgroundColor = "lightyellow";
  } else {
    botonPago.disabled = false;
    elementoCambio.style.color = "limegreen";
    elementoCambio.style.backgroundColor = "black";
  }
}
