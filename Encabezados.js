// Encabezados de página
var CabeceraPagina = /** @class */ (function () {
    // Constructor
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; // Valor por defecto
    }
    // obtener Propiedades
    CabeceraPagina.prototype.getPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    // Establecer alineación
    CabeceraPagina.prototype.setAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Imprimir propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.getPropiedades().titulo));
        console.log('Propiedades de la cabecera:');
        console.log('-------------------------');
        console.log("Color: ".concat(this.getPropiedades().color));
        console.log("Fuente: ".concat(this.getPropiedades().fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial');
cabecera.setAlineacion('centrado');
cabecera.imprimirPropiedades();
