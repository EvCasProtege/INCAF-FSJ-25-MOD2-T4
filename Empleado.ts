import { Persona } from "./Persona";

// Importamos la clase Persona
class Empleado extends Persona {
    // Atributo específico de la clase Empleado
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        // Llamamos al constructor de la clase padre
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    // seteamos el sueldo
    setSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }
    // Método para imprimir el sueldo del empleado
    imprimirDatosYSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es $${this.sueldo}.`);
    }

    // Método para mostrar los datos del empleado
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sueldo: $${this.sueldo}`);
    }
}

const empleado = new Empleado('Ana', 'García', 'Calle Falsa 123', '555-1234', 30, 1500);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirDatosYSueldo();
