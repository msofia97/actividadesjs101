/*Ejercicio PARES e IMPARES
 Crear una función expresada que al recibir un numero como parametro imprimima por consola
 “El número es par” si lo es o “El número es impar” si no lo es. En el caso que el numero fuese 0
 mostrar un mensaje de error. Se debe incluir un if ternario en script*/

 let analizarNumero=function(numero){
if (numero===0){
    return "el número debe ser distinto a 0"
}
return numero % 2 === 0 ? "El número es par" : "El número es impar";
 }
 console.log(analizarNumero(3))