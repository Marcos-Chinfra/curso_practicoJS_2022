const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


h1.innerHTML = 'que haces depues de besar una puca bien rasurada. <br> Ponerla en la cuna'; /*InnerHTML nos permite modificar el HTML dentro de la etiqueca que estamos manipulando. Por eso podemos poner la etiqueca <br> porque solo estamos cambiando el codigo en el codumento HTML*/

//PERO EN CAMBIO, para mas seguridad usamos 

p.innerText = 'Hola <br> que tal?' /*ESTE solo nos modifica el TEXTO en el documento HTML */

// COMO LE PODEMOS DAR UNA CLASE A UNA ETIQUEDA? 
/*Hay 2 maneras en especifico en el tema de dar clases que nos ayudan a modificar esto. */

console.log(h1.getAttribute('class'));//getAtribute nos ayuda a leer los ATRIBUTOS que tenga nuestra etiqueta. 
h1.setAttribute('class', 'rojo');/*Aca modificamos la clase, primero ponemos el atributo que queremos cambiar y despues el valor nuevo del atributo. */

//FUNCION ESPECIFICAMENTE PARA CLASES

h1.classList.add('rojo')//AGREGAR CLASES
h1.classList.remove('verde')//REMOVER CLASES

//MODIFICANDO EL VALUE DEL INPUT

input.value = "456"

//COMO CREAMOS UNA ETIQUEDA DESDE 0

const img = document.createElement('img'); /*Creamos la eitqueda de imagen y la guardamos en la variable */
img.setAttribute('src', 'https://images.pexels.com/photos/11606102/pexels-photo-11606102.jpeg'); /*a la etiqueda le pusismos el atributo de una URL donde esta nuestra imagen */

pid.append(img); /*Luego metemos o insertamos la imagen dentro de un contenedor o una etiqueta que ya existia.*/

/*tambien podemos hacerlo de esta maneta

img.src = URL; */

 