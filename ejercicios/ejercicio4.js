// Escribe una función que tome un array de números y un valor objetivo como entrada, y devuelva un array de arrays que contengan pares de númneros en el array original que sumen al valor objetivo (While).
list1 = [2, 4, 3, 6, 9, 8];                                           // Lista de números
target1 = parseInt(10);                                               // Número objetivo
function sumaNumeros1(listNumeros1, numeroTarget1) {                  // Funcion con 2 argumentos, la lista de numeros y el numero objetivo
    const sumandos1 = [];                                             // Se crea la lista a la que vamos a agregar los sumandos
    k = 0;                                                            // Se crea el inicio del primer ciclo de iteracion
    l = k + 1;                                                        // Se crea el inicio del segundo ciclo de iteracion
    while (k < listNumeros1.length) {                                 // Ciclo While para hallar el primer sumando
        while (l < listNumeros1.length) {                             // Ciclo While para hallar el segundo sumando
            if (listNumeros1[k] + listNumeros1[l] == numeroTarget1) { // Condicional para mostrar que la suma de los dos sumandos sea igual al numero objetivo
                sumandos1.push([listNumeros1[k], listNumeros1[l]]);   // Se agregan los sumandos a la lista de sumandos
            }
            l++;                                                      // Se suma 1 a l cada vez que itera el segundo ciclo
        }
        k++;                                                          // Se suma 1 a k cada vez que itera el primer ciclo
        l = k + 1;                                                    // Se reinicia l cada vez que itera el primer ciclo para que vuelva a valer lo mismo que en el principio
    }
    return sumandos1;                                                 // Se retorna el reslutado despues de que terminen los ciclos While
}
console.log("4. Los sumandos son:", sumaNumeros1(list1, target1));    // Se imprime el resultado: [[2, 8], [4, 6]], ya que son los numeros que suman 10

// Lenin Santiago Muñoz Quintero