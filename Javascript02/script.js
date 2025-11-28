console.log("Mi primer Hola mundo en Javascript");

let numeroUno = 8;
let numeroDos = 12;
let suma = numeroUno + numeroDos;
let sumados = +numeroUno;
console.log(`La suma es ${sumados}`);

console.log(`La suma es ${suma}`);

let resta = numeroDos - numeroUno;
console.log(`La resta es ${resta}`);

let multiplicacion = numeroDos * numeroUno;
console.log(`La resta es ${multiplicacion}`);

let division = numeroDos / numeroUno;
console.log(`La resta es ${division}`);

let nota = 8;
let estadoMateria = nota > 5 ? "Materia Aprobada" : "Materia Reprobada";
console.log(estadoMateria);

let edad = 20;
/*let mayorEdad = edad > 18 ? "Mayor de Edad" : "Menor de edad"*/
let mayorEdad = edad > 18 ? true : false;
console.log(mayorEdad);

let numeroCuatro = "500";
let segundoNumero = 100;
let sumar = parseInt(numeroCuatro) + segundoNumero;
console.log(`El numero es ${sumar}`);

let edadActual = 25;
console.log(`La edad de Chantal es ${edadActual.toString()}`);
console.log(typeof edad);
console.log(typeof edad.toString());

let promedio = 8;
let edadAlumno = 15;
if (promedio > 6) {
  console.log(" Ud. ha aprobado la materia");
  if (edadAlumno > 18) {
    console.log("Ud. es mayor de edad");
  } else {
    console.log("El estudiante es menor de edad");
  }
} else {
  console.log("Lo siento, ud ha reprobado la materia");
  if (edadAlumno > 18) {
    console.log("Ud. es mayor de edad");
  } else {
    console.log("El estudiante es menor de edad");
  }
}

let diaSemana = 1;

if (diaSemana == 1) {
  console.log("El dia de la semana es Lunes");
} else if (diaSemana == 2) {
  console.log("El dia de la semana es Martes");
} else if (diaSemana == 3) {
  console.log("El dia de la semana es Miercoles");
} else if (diaSemana == 4) {
  console.log("El dia de la semana es Jueves");
} else if (diaSemana == 5) {
  console.log("El dia de la semana es Viernes");
} else if (diaSemana == 6) {
  console.log("El dia de la semana es Sabado");
} else if (diaSemana == 7) {
  console.log("El dia de la semana es Domingo");
} else {
  console.log("Número Invalido");
}

switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número invalido");
}

let numeros = [1, 2, 4, 9, 10, 11];
let nombres = [
  "Chantal",
  "Mantilla",
  "Candelo",
  "Kevin",
  "Ordoñez",
  "Jhon",
  "Ramirez",
];
console.log(numeros);

numeros.forEach((num) => {
  console.log(`El numero es ${num}`);
});

nombres.forEach((nombre) => {
  console.log(`El estudiante ${nombre} es muy aplicado`);
});
