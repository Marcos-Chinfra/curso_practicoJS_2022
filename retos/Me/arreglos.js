
function imptArreglos(elemento){
    console.log(elemento[0])
}

imptArreglos(["Marcos", "Maria", "Michelle", "Miguel"])

function oneForOne(items){
    for(var item of items){
        console.log(item)
    }
    
}

oneForOne(["Marcos", "Maria", "Michelle", "Miguel"])

oneForOne([
    {nombre: "Marcos", edad: 25},
    {nombre:"Maria", edad: 15},
    {nombre:"Michelle", edad: 24},
    {nombre:"Miguel", edad: 10}
])





