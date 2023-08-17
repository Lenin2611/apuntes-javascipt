// Funcion que no retorna ni recibe parametros
function mensaje() {
    console.log("Hello World!");
}
mensaje();
console.log(mensaje());

console.log(" ");
// Funcion que retorna pero no recibe paramentros

function retorno() {
    return "Hello World!";
}
retorno();
console.log(typeof retorno());
console.log(retorno());

// Funcion que no retorna pero recibe paramentros

function areaRectangulo(base,altura) {
    resultado = base * altura;
    console.log(resultado);
}
areaRectangulo(2,3);

// Funcion que retorna y recibe paramentros

function areaRectangulo(base,altura) {
    return base * altura;
}
console.log(areaRectangulo(2,3));

// Lenin Santiago Muñoz Quintero