var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    // Método getter para obtener el autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método setter para establecer el autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.getAutor()));
    };
    return Cancion;
}());
// Ejemplo de uso
var cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos();
