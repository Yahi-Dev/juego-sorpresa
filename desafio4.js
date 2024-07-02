// //1
// let listaGenerica = [];

// //2
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// //3
// lenguajesDeProgramacion.push('Java');
// lenguajesDeProgramacion.push('Ruby');
// lenguajesDeProgramacion.push('GoLang');


// //4
// function MostrarLenguajes() {
//     console.log(lenguajesDeProgramacion);
// }

// //5
// function MostrarLenguajesOrdenInverso() {
//     console.log(lenguajesDeProgramacion.reverse());
// }

// //6
// function calcularPromedio(listasDeNumeros) {
//     let sumatoria = 0;
    
//     for (let index = 0; index < listasDeNumeros.length; index++) {
//         sumatoria += listasDeNumeros[index];
//     }
//     return sumatoria / listasDeNumeros.length;
// }

// let listasDeNumeros = [2, 4, 8, 1230, 16];
// console.log(calcularPromedio(listasDeNumeros));

// //7
// function MenorYMayor(lista) {
//     let numeroMayor = Math.max(...lista);
//     let numeroMenor = Math.min(...lista);
//     return `El numero menor ${numeroMenor} el numero mayor ${numeroMayor}`
// }

// let listasDeNumeros2 = [0, 1000, 999, 1001];
// console.log(MenorYMayor(listasDeNumeros2));



// //8
// function calcularSumatoria(listasDeNumeros) {
//     let sumatoria = 0;
    
//     for (let index = 0; index < listasDeNumeros.length; index++) {
//         sumatoria += listasDeNumeros[index];
//     }
//     return `La sumatoria de la lista ${sumatoria}.`;
// }

// let listasDeNumeros3 = [2, 4, 8, 1230, 15];
// console.log(calcularSumatoria(listasDeNumeros3));


//9
// function FindNumber(lista, numero) {
//     let numeroEncontrado = lista.find(l => l == numero);
//     return numeroEncontrado == null ? -1 : numeroEncontrado;
// }

// let listasDeNumeros4 = [2, 4, 8, 1230, 15];
// console.log(FindNumber(listasDeNumeros4, 17));


//10
// function sumar(lista1, lista2) {
//     let listaNumerosSumados = [];
//     if (lista1.length == lista2.length) {
        
//         for (let index = 0; index < lista1.length; index++) {
//             let numLista1 = lista1[index];
//             let numLista2 = lista2[index];
//             let resultado = numLista1 + numLista2;
//             listaNumerosSumados.push(resultado);
//         }
//         return listaNumerosSumados;
//     }
//     else
//     {
//         return 'Las listas no tienen la mismas cantidad de elementos';
//     }
// }

// let lista1 = [2, 4, 6, 10];
// let lista2 = [3, 6, 9, 10];
// console.log(sumar(lista1, lista2));


//11
// function Cuadrado(lista1) {
//     if (lista1.length != null) {

//         for (let index = 0; index < lista1.length; index++) {
//             let num = lista1[index];
//             lista1[index] = num*2;
//         }
//         return lista1;
//     }
//     else
//     {
//         return 'La lista esta vacia';
//     }
// }

// let lista1 = [2, 4, 6, 10];
// console.log(Cuadrado(lista1));