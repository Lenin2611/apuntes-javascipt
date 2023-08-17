// Crea un arreglo de 10 posiciones de numeros con valores aleatorios. Muestra por consola el indice y el valor al que corresponde. Usa dos metodos, uno para rellenar valores y otro para mostrar.

let array = []; // Creamos 
function rellenar(array1) {
    for (let i = 0; i < 10; i++) {
        array1.push(Math.round(Math.random() * 100));
    }
    return array1;
}

function indice(array1) {
    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${array1[i]}`);
    }
}
rellenar(array);
indice(array);