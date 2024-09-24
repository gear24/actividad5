class Canción {
    private autor: string;
    public título: string; 
    public género: string; 


    constructor(título: string, género: string) {
        this.título = título;
        this.género = género;
        this.autor = ''; 
    }

    
    public getAutor(): string {
        return this.autor;
    }

    
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    
    public mostrarDatos(): void {
        console.log(`Título: ${this.título}`);
        console.log(`Género: ${this.género}`);
        console.log(`Autor: ${this.autor}`);
    }
}
