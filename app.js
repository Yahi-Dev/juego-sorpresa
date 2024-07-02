let intentos = 1;
let listaNumerosSorteados = [];
let numeroMax;
let numeroSecreto;
let inicio = true;

function MensajeLimitar() {
    AsignarTextoElemento('h1', 'Adivina el número secreto');
    AsignarTextoElemento('p', `Digita el número máximo donde saldrá el número aleatorio.`);
}

function Limitar() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (inicio) {
        numeroMax = numeroUsuario;

        if (numeroMax > 0) {
            numeroSecreto = GenerarNumeroSecreto();
            CondicionesIniciales();
            inicio = false;
        } else {
            AsignarTextoElemento('p', `El número no es válido.`);
        }
    } else {
        VerificarIntento();
    }
}

function VerificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        AsignarTextoElemento('p', `Acertaste el número. Lo has acertado en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            AsignarTextoElemento('p', 'El número secreto es menor');
        } else {
            AsignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
}

function LimpiarCaja() {
    let valorCaja = document.getElementById('valorUsuario');
    valorCaja.value = '';
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

    if (listaNumerosSorteados.length === numeroMax) {
        AsignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function AsignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function CondicionesIniciales() {
    AsignarTextoElemento('h1', 'Juego del número secreto');
    AsignarTextoElemento('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    LimpiarCaja();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

MensajeLimitar();