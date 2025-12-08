console.log("Alfredo Mauricio Ordóñez Saa")
// Ejercicio #1: Imprimir en consola los números mayores a 10 de un arreglo
arregloNumeros = [1, 2, 30, 40, 50];
for (let i = 0; i < arregloNumeros.length; i++){
    if (arregloNumeros[i] >10){
        console.log(arregloNumeros[i])
    }
}


//Ejercicio #2: Contar nombres con mas de 5 letras en un arreglo de nombres

console.log("Alfredo Mauricio Ordóñez Saa")

arregloNombres = ["Alfredo", "Juan", "Katherine", "Miguel", "Sofia", "Andres"]
let contador = 0
for (let i = 0; i < arregloNombres.length; i++){
    if (arregloNombres[i].length > 5){
        contador++
    }
}
console.log("Nombres con mas de 5 letras: " + contador)

// Ejercicio #3: construir un arreglo vacío y llenarlo con los números del 1 al 5 utilizando un ciclo while
console.log("Alfredo Mauricio Ordóñez Saa")

arregloVacio = []

let x = 0
while (arregloVacio.length < 5){
    x++
    arregloVacio.push(x)
}
console.log(arregloVacio)

//Ejercicio #4: eliminar por posicion una fruta de un arreglo con splice

console.log("Alfredo Mauricio Ordóñez Saa")

arregloFrutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"]

arregloFrutas.splice(2, 1)

console.log(arregloFrutas)

//Ejerccicio #5: calcular promedio con forEach

arregloNumerico = [10, 20, 30, 40, 50]
let suma = 0
arregloNumerico.forEach(element => {
    suma += element
    promedio = suma / arregloNumerico.length
    
});
console.log("El promedio: " + promedio)

//Ejercicio #6: contar del 1 al 5 usando do - while

console.log("Alfredo Mauricio Ordóñez Saa")

let contadorEj6 = 1
do {
    console.log(contadorEj6)
    contadorEj6++
} while (contadorEj6 <= 5);

//ejercicio #7: extraer con slice una porcion de un arreglo

console.log("Alfredo Mauricio Ordóñez Saa")

arregloColores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado"]

let arregloColoresCortado = arregloColores.slice(0,3)

console.log(arregloColoresCortado)

//Ejercicio #8: Filtrar mayores de un arreglo de objetos

console.log("Alfredo Mauricio Ordóñez Saa")

arregloObjetos = [
    {nombre: "Alfredo", edad: 25},
    {nombre: "Juan", edad: 15},
    {nombre: "Katherine", edad: 30},
    {nombre: "Miguel", edad: 12},
    {nombre: "Sofia", edad: 22},
    {nombre: "Andres", edad: 18}
]

arregloObjetos.forEach(element => {
    if (element.edad >= 18){
        console.log(element.nombre + " es mayor de edad")
    }
});

//Ejercicio#9: Arreglo de objetos - Mostrar propiedades producto, precio

console.log("Alfredo Mauricio Ordóñez Saa")

arregloInventario = [
    {producto: "Camisa", precio: 20},
    {producto: "Pantalon", precio: 30},
    {producto: "Zapatos", precio: 50},
    {producto: "Sombrero", precio: 15}
]

arregloInventario.forEach(element => {
    console.log("Producto: " + element.producto + ", Precio: " + element.precio)
});

//Ejercicio #10: Arreglo de objetos - Buscar la nota mas alta de estudiantes con nombre y nota con for

console.log("Alfredo Mauricio Ordóñez Saa")

arregloEstudiantes = [
    {nombre: "Alfredo", nota: 5},
    {nombre: "Juan", nota: 9},
    {nombre: "Katherine", nota: 8},
    {nombre: "Miguel", nota: 7},
    {nombre: "Sofia", nota: 8},
    {nombre: "Andres", nota: 4}
]

let notaMasAlta = 0
let nombreEstudiante = ""

for (let i = 0; i < arregloEstudiantes.length; i++){
    if (arregloEstudiantes[i].nota > notaMasAlta){
        notaMasAlta = arregloEstudiantes[i].nota
        nombreEstudiante = arregloEstudiantes[i].nombre
    }
}
console.log("La nota mas alta es de " + nombreEstudiante + " con una nota de " + notaMasAlta)