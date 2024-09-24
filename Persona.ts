// Objeto abstracto Persona con atributos y métodos comunes a los objetos que heredan de él.
export abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si la persona es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }
    // método abstracto para mostrar los datos de la persona
    abstract mostrarDatos(): void;
}
