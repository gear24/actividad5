class Calculadora {
    // suma
    sumar(a: number, b: number): number {
        return a + b;
    }

    // resta
    restar(a: number, b: number): number {
        return a - b;
    }

    // multiplicacion
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // dividir
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    // la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // factorial
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}

// Ejemplo de uso
const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));      
console.log(calculadora.restar(5, 3));     
console.log(calculadora.multiplicar(5, 3));  
console.log(calculadora.dividir(5, 0));       
console.log(calculadora.potencia(2, 3));      
console.log(calculadora.factorial(5));        
