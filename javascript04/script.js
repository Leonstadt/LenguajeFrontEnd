console.log("Funciones en Javascript");

function sumar(num1, num2 = 8) {
  return num1 + num2;
}

console.log(sumar(5, 5));

//Funciones expresadas

const suma = function (a, b) {
  return a + b;
};

console.log(suma(4, 3));

//Funciones flecha

const multiplicacion = (d, c) => {
  return d * c;
};

console.log(multiplicacion(8, 8));

const division = (x, y) => x / y;
console.log(division(8, 8));

const persona = {
  nombre: "Alfredo",
  saludarNormal: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
  saludarFlecha: () => {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

console.log(persona.saludarNormal());
console.log(persona.saludarFlecha());

/*
setTimeout( () => {
    console.log("Hola a todos despues de 9 segundos");
}, 9000);

setTimeout(function(){
    console.log("Hola a todos despues de 6 segundos");
}, 6000);*/

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let person1 = new Persona("Alfredo", "Ordóñez");
console.log(person1);
person1.nombre = "Mauricio";
console.log(person1)


try{
    let y =20;

    console.log(x)
}

catch(error){
    console.log("Error capturado: " + error);
}

finally{
    console.log("Termina la revision de errores");
}

let promesa = new Promise((resolve, reject) => {
    let todoBien = true;

    if (todoBien){
        resolve("Todo salio bien");
    }
    else{
        reject("Lo sentimos no salio nada bien");
    }
});

promesa.then(respuesta => console.log(respuesta)).catch(error => console.log(error))

//Async y Await