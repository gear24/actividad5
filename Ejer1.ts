class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centro';
    }

    // título, color y fuente
    obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }

    // alineación del título
    establecerAlineacion(alineacion: 'centro' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    // imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}


