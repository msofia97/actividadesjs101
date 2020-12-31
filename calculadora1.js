

function numeroAleatorio (min,max){
    return Math.round(Math.random() * (max-min) + min )
}

let calculadora ={
    sumar: function(a,b){
        return a+b
    },
    restar:function(a,b){
    return a-b
} ,
multiplicar: function(a, b){
    return a*b
},
dividir: function(a,b){
    if(a !==0 && b!==0){
return a/b
    }else{
        let mensaje= 'Error';
        return mensaje
    }
}
}

/*console.log(calculadora.sumar(3,6))
console.log(calculadora.restar(8,100))
console.log(calculadora.multiplicar(12,6))
console.log(calculadora.dividir(18,6))*/

let numero1=numeroAleatorio(0,100);
let numero2=numeroAleatorio(0,100);

console.log("El resultado de la suma de " + numero1 + "+" + numero2 + "es igual a: " + calculadora.sumar(numero1,numero2))