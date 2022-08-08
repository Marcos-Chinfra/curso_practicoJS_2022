const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



form.addEventListener('click', sumaValues);
/*Nuestros inputs y nuestro boton estan dentro de un formulario y HTML lo que haces es que en el ultimo boton que esta dentro de un formulario AUTOMATICAMENTE lo convierte en un SUBMIT y recarga la pagina. */
function sumaValues(event){
    event.preventDefault();/*Este es el metodo del eventon que nos ayuda a cancelar esa recarga que tiene. */
    const suma =  input1.value + input2.value
    pResult.innerText = "Resultado: " + suma
 }