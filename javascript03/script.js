let arregloAutos = ["BMW", "Toyota", "Lada", "Chevrolet", "Mazda"];
console.log(arregloAutos);
console.log(arregloAutos[0]);
console.log(arregloAutos[1]);
console.log(arregloAutos[2]);
console.log(arregloAutos[3]);
console.log(arregloAutos[4]);

arregloAutos.push("Volkswagen");
arregloAutos.push("Citroën");
console.log(arregloAutos);

arregloAutos.pop();
console.log(arregloAutos);

arregloAutos.shift();
console.log(arregloAutos);

arregloAutos.splice(2, 2);
console.log(arregloAutos);

arregloAutos.splice(1, 0, "Chery");
console.log(arregloAutos);

arregloAutos.forEach((element) => {
  console.log(`El vehiculo es ${element}`);
});

let arregloNumerico = [1, 2, 3, 4, 5];
console.log(arregloNumerico);
console.log(arregloNumerico[0]);
console.log(arregloNumerico[1]);
console.log(arregloNumerico[2]);
console.log(arregloNumerico[3]);
console.log(arregloNumerico[4]);

arregloNumerico.push(6);
arregloNumerico.push(7);
console.log(arregloNumerico);

arregloNumerico.pop();
console.log(arregloNumerico);

arregloNumerico.shift();
console.log(arregloNumerico);

arregloNumerico.splice(2, 2);
console.log(arregloNumerico);

arregloNumerico.splice(1, 0, 10);
console.log(arregloNumerico);

arregloNumerico.forEach((element) => {
  console.log(element);
});

let estudiante = {
  nombre: "",
  apellido: "",
  edad: 0,
  soltero: false,
};

estudiante.nombre = "Juan";
estudiante.apellido = "Perez";
estudiante.edad = 25;
estudiante.soltero = true;

console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.edad);
console.log(estudiante.soltero);

let arregloEstudiantes = [
  {
    id: 1,
    nombre: "Emrick",
    apellido: "Candelo",
    edad: 20,
    soltero: true,
  },
  {
    id: 2,
    nombre: "Carlos",
    apellido: "Ramirez",
    edad: 24,
    soltero: false,
  },
  {
    id: 3,
    nombre: "Kevin",
    apellido: "Lozano",
    edad: 24,
    soltero: false,
  },
  {
    id: 4,
    nombre: "Jhon",
    apellido: "Gonzales",
    edad: 24,
    soltero: false,
  },
  {
    id: 5,
    nombre: "Carlos",
    apellido: "Mantilla",
    edad: 24,
    soltero: true,
  },
  {
    id: 6,
    nombre: "Alfredo",
    apellido: "Ordóñez",
    edad: 24,
    soltero: false,
  },
  {
    id: 7,
    nombre: "Chantal",
    apellido: "Peñafiel",
    edad: 27,
    soltero: true,
  },
];

console.log(arregloEstudiantes);
console.log(arregloEstudiantes[6]);
console.log(arregloEstudiantes[6].nombre);
console.log(arregloEstudiantes[6].apellido);
console.log(arregloEstudiantes[6].edad);
console.log(arregloEstudiantes[6].soltero);

let estudiantePepe = {
  nombre: "Pepe",
  apellido: "Noboa",
  edad: 29,
  soltero: false,
};

arregloEstudiantes.forEach((element) => {
  if (element.id == 1) {
    console.log(`el estudiante es ${JSON.stringify(element)}`);
    console.log(`El estudiante es ${element.nombre + " " + element.apellido}`);
    
  }else{
    console.log(`el estudiante con el id ${element.id} no ha sido encontrado`)
  }
});

arregloEstudiantes.push({
  estudiantePepe,
});
console.log(arregloEstudiantes);

arregloEstudiantes.pop();
console.log(arregloEstudiantes);

arregloEstudiantes.shift();
console.log(arregloEstudiantes);

arregloEstudiantes.splice(0, 1);
console.log(arregloEstudiantes);

arregloEstudiantes.splice(1, 0, estudiantePepe);
console.log(arregloEstudiantes);

let arr = [1, 2, 3];
let newArr = arr.slice(1);
console.log(newArr);

arregloEstudiantes.forEach((element) => {
  console.log(`el estudiante es ${element.nombre}`);
});

for (let x = 0; x < arregloEstudiantes.length; x++) {
  console.log(
    `El estudiante en la posicion ${x} es ${arregloEstudiantes[x].nombre}`
  );
}

let x = 0;
while (x < arregloEstudiantes.length) {
  console.log(
    `El estudiante en la posicion ${x} es ${arregloEstudiantes[x].nombre}`
  );
  x++;
}

let y = 0;
do console.log(arregloEstudiantes[y]), y++;
while (y < arregloEstudiantes.length);

arregloEstudiantes.forEach((element) => {
  if (element.nombre == "Carlos") {
    console.log(`el estudiante es ${element.nombre} ${element.apellido}`);
  }
});

console.log(arregloEstudiantes)


let estudianteEncontrar = arregloEstudiantes.find((x) => x.id == 4);
if (estudianteEncontrar == null) {
  console.log("estudiante no encontrado");
} else {
  console.log(estudianteEncontrar);
}


let arregloMixto = [1,2,'Maria','Pedro',3]
console.log(arregloMixto);

arregloMixto.forEach(element => {
    //console.log(`El Elemento ${element} es ${typeof element}`)
    if(typeof element == 'number'){
        console.log(`el elemento ${element} es numerico`)
    }

    if(typeof element == 'string'){
        console.log(`el elemento ${element} es string `)
    }
})

let identificacion = 2.5
if (typeof identificacion != 'string'){
    console.log('Digite correctamente su identificacion')
    
}