//1
// function obtenerDatos(params) {
//     let alturaUsuario = parseInt(document.getElementById('valorUsuario').value);
//     let pesoUsuario = parseInt(document.getElementById('valorUsuario2').value);

//     alert("Su IMC es " + CalcularImc(alturaUsuario, pesoUsuario));
// }

// function CalcularImc(altura, peso) {
//     let imc = peso / (altura * altura);
//     return imc;
// }






//2
// function Factorial(params) {
//         let factorial = parseInt(document.getElementById('valorUsuario').value);
//         alert("El factorial den numero dado es " + CalcularFactorial(factorial));
// }

// function CalcularFactorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * CalcularFactorial(n - 1);
// }






//3
// function Dolar(params) {
//     let cantidad = parseInt(document.getElementById('valorUsuario').value);
//     alert('La cantidad en dolar es ' + CalcularDolar(cantidad));
//     return;    
// }

// function CalcularDolar(n) {
//     let dolar = 59.08;
//     return n / dolar;
// }







//4 
// function JavaScript(params) {
//     let altura = parseInt(document.getElementById('valorUsuario').value);
//     let anchura = parseInt(document.getElementById('valorUsuario2').value);
//     alert(CalcularAlturaYPerimetro(altura, anchura));
//     return;
// }

// function CalcularAlturaYPerimetro(altura, anchura) {
//     let area = altura * anchura;
//     let perimetro = 2 * (altura * anchura);
//     return `El area de los datos proporcionados ${area} y el perimetro es ${perimetro}`;
// }







//5
// function JavaScript(params) {
//     let numero = parseInt(document.getElementById('valorUsuario').value);
//     let multplicacion = Multiplicar(numero);
//     AsignarTextoElemento('p', multplicacion);
//     return;
// }

// function Multiplicar(n) {
//     for (let index = 1; index <= 10; index++) {
//         console.log(`${n} x ${index} = ${n * index}`);
//     }
//     return;
// }

// function AsignarTextoElemento(elemento, texto)
// {
//     let elementoHtml = document.querySelector(elemento);
//     elementoHtml.innerHTML = texto;
//     return;
// }