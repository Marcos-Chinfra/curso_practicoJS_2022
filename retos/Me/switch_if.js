const tipoDeSuscripcion = "Basic";
/*
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}*/
/*
if(tipoDeSuscripcion === 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año");
};
""""
EN EL CASO de switch tenemos un break para que se rompa la ejecucion del codigo si es que se llego a un resultado, en IF  no tenemos ua opcion pero podemos encapsularlo en una funcion y colocarle RETURN para que se rompa en ese momento, las FUNCIONES se terminan donde se encuentra el RETURN 
""""
*/

if(tipoDeSuscripcion === 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año");
};

/*Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este 
comportamiento con arrays u objetos y un solo condicional.???? */


const tiposDeSuscripciones = {
    free : "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año"
    /*CREACION DEL OBJETO */
};


//CREACION DE FUNCION
function searchSusctip(SUS){
    if(tiposDeSuscripciones[SUS]){
        console.log(tiposDeSuscripciones[SUS])//propiedad de objeto
        return
    };
    console.warn('esa suscripcion on existe');
};

searchSusctip("free");
