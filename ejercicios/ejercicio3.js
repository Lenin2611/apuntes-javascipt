// Escribe una función que tome un array de números y un valor objetivo como entrada, y devuelva un array de arrays que contengan pares de númneros en el array original que sumen al valor objetivo (For).
list = [2, 4, 3, 6, 9, 8];                                         // Lista de números
target = parseInt(10);                                             // Número objetivo
function sumaNumeros(listNumeros, numeroTarget) {                  // Funcion con 2 argumentos, la lista de numeros y el numero objetivo
    const sumandos = [];                                           // Se crea la lista a la que vamos a agregar los sumandos
    for (let i = 0; i < listNumeros.length; i++) {                 // Ciclo For para hallar el primer sumando
        for (let j = i + 1; j < listNumeros.length; j++) {         // Ciclo For para hallar el segundo sumando
            if (listNumeros[i] + listNumeros[j] == numeroTarget) { // Condicional para mostrar que la suma de los dos sumandos sea igual al numero objetivo
                sumandos.push([listNumeros[i], listNumeros[j]]);   // Se agregan los sumandos a la lista de sumandos
            }
        }
    }
    return sumandos;                                               // Se retorna el reslutado despues de que terminen los ciclos For
}
console.log("3. Los sumandos son:", sumaNumeros(list, target));    // Se imprime el resultado: [[2, 8], [4, 6]], ya que son los numeros que suman 10

// Lenin Santiago Muñoz Quintero