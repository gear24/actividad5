class Cuenta {
    private nombre: string;         
    private cantidad: number;       
    private tipoDeCuenta: string;   
    private numeroDeCuenta: string;  

    
    constructor(nombre: string, cantidad: number, tipoDeCuenta: string, numeroDeCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoDeCuenta = tipoDeCuenta;
        this.numeroDeCuenta = numeroDeCuenta;
    }

    
    public depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}. Nueva cantidad: $${this.cantidad}.`);
        }
    }

    
    public retirar(valor: number): void {
        if (this.cantidad <= 5) {
            console.log("No hay suficiente dinero en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Cantidad restante: $${this.cantidad}.`);
        }
    }


    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoDeCuenta}`);
        console.log(`Número de cuenta: ${this.numeroDeCuenta}`);
    }
}
