class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // metodo depositar dinero y verificar que sea mayor a 5
    depositar(cantidad: number): void {
        if (cantidad < 5.00) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente $${cantidad}.`);
        }
    }

    // metodo retirar dinero y verificar que sea mayor a 5 y que tenga saldo suficiente
    retirar(valor: number): void {
        if (valor < 5.00) {
            console.log('El valor a retirar debe ser mayor a $5.00');
        } else if (this.cantidad < valor) {
            console.log('No hay suficiente efectivo en la cuenta.');
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor}. Le queda $${this.cantidad} en su cuenta.`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
}

// Ejemplo de uso
const miCuenta = new Cuenta('Juan Pérez', 100.00, 'Ahorros', '1234567890');
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