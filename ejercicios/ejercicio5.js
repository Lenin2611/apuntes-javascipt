// Se desea realizar la suma de los numeros pares y la suma de los numeros impares (Por aparte), de los numeros comprendidos entre 1 y 578934.

let final = parseInt(578934);                                                // Llamo la variable final con valor numerico 578934
function sumas(final1) {                                                     // Creo la funcion con argumento final1
    let sumaPares = 0;                                                       // Se crea la variable sumaPares con valor 0
    let sumaImpares = 0;                                                     // Se crea la variable sumaImpares con valor 0
    for (i = 1; i <= final1; i++) {                                          // Ciclo For empezando desde 1 y terminando en 578934
        if ((i % 2) == 0) {                                                  // Opcion pares
            sumaPares += i;                                                  // Se suman los pares dentro de sumaImpares
        }
        else {                                                               // Opcion impares
            sumaImpares += i;                                                // Se suman los impares dentro de sumaImpares
        }
    }
    let igual = (`Suma Pares: ${sumaPares} \nSuma Impares: ${sumaImpares}`); // Lo que se va a imprimir
    return igual;                                                            // Se retorna lo que se va a imprimir
}
console.log(sumas(final));                                                   // Se imprime el resultado

// Lenin Santiago Muñoz Quintero