var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // metodo depositar dinero y verificar que sea mayor a 5
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5.00) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente $".concat(cantidad, "."));
        }
    };
    // metodo retirar dinero y verificar que sea mayor a 5 y que tenga saldo suficiente
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5.00) {
            console.log('El valor a retirar debe ser mayor a $5.00');
        }
        else if (this.cantidad < valor) {
            console.log('No hay suficiente efectivo en la cuenta.');
        }
        else {
            this.cantidad -= valor;
            console.log("Ha retirado $".concat(valor, ". Le queda $").concat(this.cantidad, " en su cuenta."));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de Cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de Cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
// Ejemplo de uso
var miCuenta = new Cuenta('Juan Pérez', 100.00, 'Ahorros', '1234567890');
miCuenta.mostrarDatos();
miCuenta.depositar(10.00);
miCuenta.retirar(20.00);
miCuenta.retirar(200.00);
miCuenta.depositar(5.00);
miCuenta.retirar(10.00);
miCuenta.retirar(5.00);
miCuenta.depositar(100.00);
miCuenta.retirar(50.00);
miCuenta.depositar(1.00);
