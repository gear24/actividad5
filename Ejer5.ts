abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected dirección: string;
    protected teléfono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, dirección: string, teléfono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dirección = dirección;
        this.teléfono = teléfono;
        this.edad = edad;
    }

    
    public verificarEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    
    public abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    // Constructor que llama al constructor de la clase base
    constructor(nombre: string, apellido: string, dirección: string, teléfono: string, edad: number, sueldo: number) {
        super(nombre, apellido, dirección, teléfono, edad);
        this.sueldo = sueldo;
    }

    
    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    
    public imprimirSueldo(): void {
        console.log(`Sueldo de ${this.nombre} ${this.apellido}: $${this.sueldo}`);
    }

    
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.dirección}`);
        console.log(`Teléfono: ${this.teléfono}`);
        console.log(`Edad: ${this.edad}`);
    }
}
