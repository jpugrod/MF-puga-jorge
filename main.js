// 1. Ejercicio Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4)

function dimeTipoMotor() {
    let tipoBomba = document.querySelector('#bomba')
    let tipo = Number(document.querySelector('#motor').value);
    switch (tipo) {
        case 0: tipoBomba.innerHTML = 'No hay establecido un valor definido para el tipo de bomba';
            break;
        case 1: tipoBomba.innerHTML = 'La bomba es una bomba de agua';
            break;
        case 2: tipoBomba.innerHTML = 'La bomba es una bomba de gasolina';
            break;
        case 3: tipoBomba.innerHTML = 'La bomba es una bomba de hormigón';
            break;
        case 4: tipoBomba.innerHTML = 'La bomba es una bomba de pasta alimenticia';
            break;
        default: tipoBomba.innerHTML = 'No existe un valor válido para ese tipo de bomba';
            break;
    }
}

document.querySelector('#btn1').addEventListener('click', (e) => {
    e.preventDefault()
    dimeTipoMotor()
})



// 2. Ejercicio. Escribir un programa que me pida un número entero y validar si el número es impar.

function impar() {
    let resultado = document.querySelector('#impar')
    let numero = document.getElementById("numero").value;
    if (numero % 2 !== 0) {
        resultado.innerHTML = `${numero} es impar.`;
    } else {
        resultado.innerHTML = `${numero} no es impar.`;
    }
}

document.querySelector('#btn2').addEventListener('click', (e) => {
    e.preventDefault()
    impar()
})

// 3. Ejercicio. Añadir un nuevo elemento <p> con nombre de clase “miParrafo“ y con el texto que ponga tu nombre y apellidos y sea hijo del body.

function addText() {
    if (document.querySelector('.miParrafo')) return
    let text = document.createElement('p')
    text.innerHTML = 'Jorge Puga Rodríguez'
    text.className = 'miParrafo'
    document.querySelector('body').append(text)
}

document.querySelector('#btn3').addEventListener('click', (e) => {
    e.preventDefault()
    addText()
})


// 4 . Ejercicio. Calcular el área de un triángulo y mostrar por pantalla el resultado. 

function areaTriangulo(){
    let areaResultado = document.getElementById("areaResultado");
    let b = Number(document.getElementById("base").value);
    let h = Number(document.getElementById("altura").value);
 
    let area = (b * h) / 2;
 
    areaResultado.innerHTML = "" + area;
}

document.querySelector('#btn4').addEventListener('click', (e) => {
    e.preventDefault()
    areaTriangulo()
})


