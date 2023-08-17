// Imprima la siguiente secuencia usando ciclos:
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
*/

let numbers = 123456789                            // Se declara la variable con los numeros del 1 al 9
function escalera(number) {                        // Se crea la funcion con argumento number
    let numbersString = number.toString();         // Se pasa el numero numbers a string
    let numbersList = numbersString.split('');     // Se separan los caracteres del string y entran en una lista
    let empty = '';                                // Se crea una variable vacia empty
    for (let i = 0; i < numbersList.length; i++) { // Se crea un ciclo For
        empty += numbersList[i] + ' ';             // Por cada ciclo se agrega cada caracter de numbersList a la variable vacia empty
        console.log(empty);                        // Se imprime una linea por cada ciclo
    }
}
escalera(numbers);                                 // Se llama la funcion escalera con argumento numbers

function escalera1(num) {           // Se crea la funcion con argumento num
    empty = ''                      // Se crea una variable vacia empty
    for (let i = 1 ; i <= 9; i++) { // Se crea un ciclo For
        empty += i + ' ';           // Por cada ciclo se agrega cada numero que toma i a la variable vacia empty
        console.log(empty);         // Se imprime una linea por cada ciclo
    }
    return num;                     // Se retorna num
}
escalera1();                        // Se llama la funcion escalera sin ningun argumento

// Lenin Santiago Muñoz Quintero