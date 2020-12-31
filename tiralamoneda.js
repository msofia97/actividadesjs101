/* Crear una funcion que reciba por parametro un numero, para ser usado dentro de la misma como el 
numero de intentos. Usar la estructura correspondiente que permita simular 'tirar una moneda' con dos resultados
posibles, cara o seca (los representaremos con 0 o 1). Para ello usaremos las funciones nativas de JS Math.random(), 
que retorna un numero pseudo-aleatorio en el rango [0,1]
y Math.round(), que retorna un numero redondeado al entero más cercano.
Cuando acaben los intentos previstos, debe mostrarse en consola cuantas veces salió cara
(representado por el 0) en el numero de intentos, acompañado por el porcentaje de efectividad en los aciertos.
*/

function tiraLaMoneda(intentos){
    switch(true){
        case isNaN(intentos) :
            return "Debe ingresar un número"
        case intentos <= 0 :
            return "Debe ingresar un numero de intentos"
    }

    let contador = 0;
    let veces = 0;

    while (veces < intentos) {
        let moneda = Math.round(Math.random());
        if (moneda === 0){
            contador++
        }
        veces++
    }
    return "En " + intentos + " intentos salió " + contador + " seca. Con una efectividad de " + (contador * 100 / intentos) + "%"
}

console.log(tiraLaMoneda(100))