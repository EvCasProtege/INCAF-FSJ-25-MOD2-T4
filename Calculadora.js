// Clase Calculadora
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Métodos sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Métodos restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Métodos multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Métodos dividir
    Calculadora.prototype.dividir = function (a, b) {
        // Verificar si b es cero
        if (b === 0) {
            // Lanzar un error si se intenta dividir por cero
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    };
    // Métodos potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        // Usa el metodo pow de la clase Math
        return Math.pow(base, exponente);
    };
    // Método factorial
    Calculadora.prototype.factorial = function (n) {
        // Variable si el número es positivo o cero
        var resultado = 1;
        // Verificar si el número es negativo
        if (n < 0) {
            throw new Error('No se puede calcular el factorial de un número negativo');
        }
        // Verificar si el número es cero
        if (n === 0) {
            return resultado;
        }
        // Calcular el factorial
        for (var i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Ejemplo de uso
var calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2
console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(5, 3)); // 1.666...
console.log(calculadora.potencia(2, 3)); // 8
console.log(calculadora.factorial(5)); // 120
