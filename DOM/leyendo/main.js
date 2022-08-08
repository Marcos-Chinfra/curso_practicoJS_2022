//Es para ser mas practico almacenar ese elemento de HTML en una variable de JavaScript, para llegar a esa variable utilizamos funciones(METODOS) que nuestro entorno de ejecucino de JS nos da (browser) querySelector() es un metodo
const h1 = document.querySelector('h1');
const p = document.querySelector('p');//si queremos hacer un lista(array) puedmos usar  '''querySelectorAll'''
const parrafito = document.querySelector('.parrafito');// getElementBy*** y getElementsBy***
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
// h1 {color: red} en css
console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
