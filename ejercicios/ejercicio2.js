// Crear una función que tome un valor de grados Celsius y la pase a grados Farenheit (ºF = 32 + (9 * ºC / 5)).
function cambio(celcius) {                                              // Funcion con los ºC
    farenheit = 32 + (9 * celcius / 5);                                 // Calcular el cambio de ºC a ºF
    resultado = `2. El cambio de ${celcius}ºC a ºF es: ${farenheit}ºF`; // Lo que se va a imprimir
    return resultado;                                                   // Se retorna el resultado del calculo
}
console.log(cambio(2));                                                 // Se imprime el return

// Lenin Santiago Muñoz Quintero