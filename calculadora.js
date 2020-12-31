let calculadora ={
    sumar: function(numeroA,numeroB){
        return numeroA+numeroB
    },
    restar:function(numeroA,numeroB){
    return numeroA-numeroB
} ,
multiplicar: function(numeroA, numeroB){
    return numeroA*numeroB
},
dividir: function(numeroA,numeroB){
    if(numeroA !==0 && numeroB!==0){
return numeroA/numeroB
    }else{
        let mensaje= 'Error';
        return mensaje
    }
}
}

console.log(calculadora.sumar(3,6))
console.log(calculadora.restar(8,100))
console.log(calculadora.multiplicar(12,6))
console.log(calculadora.dividir(18,6))
