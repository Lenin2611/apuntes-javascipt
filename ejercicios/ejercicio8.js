// Crea un arreglo de 10 posiciones de numeros con valores aleatorios. Muestra por consola el indice y el valor al que corresponde. Usa dos metodos, uno para rellenar valores y otro para mostrar.

let array = [];                                       // Creamos un array vacio
function rellenar(array1) {                           // Creamos una funcion con argumento array1
    for (let i = 0; i < 10; i++) {                    // Iniciamos un ciclo For
        array1.push(Math.round(Math.random() * 100)); // Metemos un numero random a array1 por cada ciclo que se haga (10)
    }
    return array1;                                    // Se retorna array1
}

function indice(array1) {                             // Creamos una funcion con argumento array1
    for (let i = 0; i < 10; i++) {                    // Iniciamos un ciclo For
        console.log(`${i + 1}: ${array1[i]}`);        // Imprimimos el indice + 1 y su valor dentro del array1
    }
}
rellenar(array);                                      // Llamamos la funcion rellenar con argumento array
indice(array);                                        // Llamanos la funcion indice con argumento array