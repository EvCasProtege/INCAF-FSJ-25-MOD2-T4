"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Objeto abstracto Persona con atributos y métodos comunes a los objetos que heredan de él.
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si la persona es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
exports.Persona = Persona;
