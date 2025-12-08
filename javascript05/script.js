/*console.log("Mi primer Hola mundo desde Javascript a html")
let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);

titulo.innerHTML = "El mejor titulo del mundo";
console.log(titulo.innerHTML);

let titulos = document.getElementsByTagName("h1");
console.log(`Numero de titulos: ${titulos.length}`);
//console.log(titulos.item(1).innerHTML);
for(let element of titulos){
    console.log(element.innerHTML);
}

Array.from(titulos).forEach( elemento => {
    console.log(elemento.innerHTML);
});

let elementosPorClaseCss = document.getElementsByClassName("azul");
console.log(elementosPorClaseCss);
console.log(`numero de titulos: ${elementosPorClaseCss.length}`);
for (let elemento of elementosPorClaseCss){
    console.log(elemento.innerHTML);
}*/

let elementosQuerySelector = document.querySelectorAll("h2.azul");
console.log(`numero de clasess: ${elementosQuerySelector.length}`);
for (let elemento of elementosQuerySelector){
    console.log(elemento.innerHTML);
}