// Encabezados de página
class CabeceraPagina {

    // Propiedades
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    // Constructor
    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; // Valor por defecto
    }

    // obtener Propiedades
    getPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    // Establecer alineación
    setAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    // Imprimir propiedades
    imprimirPropiedades(): void {        
        console.log(`Título: ${this.getPropiedades().titulo}`);
        console.log('Propiedades de la cabecera:');
        console.log('-------------------------');
        console.log(`Color: ${this.getPropiedades().color}`);
        console.log(`Fuente: ${this.getPropiedades().fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
        
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial');
cabecera.setAlineacion('centrado');
cabecera.imprimirPropiedades();
