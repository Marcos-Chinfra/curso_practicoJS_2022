const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*addEventListener lo que haces es agregar un "Escuchador de Eventos" o sea cada vez que pase un evento en la etiqueda seleccionada, haz lo que yo te diga.
el primer argumento  que estara dentro del metodo addEventListener('EVENTO', FUNCION), notece que lo que queremos que suceda NO esta en comillas y NO tiene parentesis, a diferencia de como lo agregamos en el HTML. */

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const suma =  input1.value + input2.value
    pResult.innerText = "Resultado: " + suma
 }