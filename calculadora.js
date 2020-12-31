let calculadora = {
    sumar: function(num1, num2){
        return num1 + num2
    },
    restar: function(num1, num2){
        return num1 - num2
    },
    multiplicar: function(num1, num2){
        return num1 * num2
    },
    dividir: function (num1, num2){
        if(num1 !== 0 && num2 !== 0){
            return num1 / num2
        }else{
            let mensaje= 'la calculadora no funciona';
            return mensaje
        }
    }
}

console.log(calculadora.sumar(4, 4))
console.log(calculadora.restar(5, 3))
console.log(calculadora.multiplicar(2, 3))
console.log(calculadora.dividir(5, 0))