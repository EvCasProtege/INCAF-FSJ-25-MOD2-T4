class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }

    // Método getter para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método setter para establecer el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}

// Ejemplo de uso
const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos();
