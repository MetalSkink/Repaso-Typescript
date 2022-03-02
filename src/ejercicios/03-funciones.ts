function sumar(a:number,b: number): number {
    return a+b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero? : number, base:number = 2):number{
    return numero*base;
}

// const resultado = multiplicar(8, 9);

// console.log(resultado);

interface PersonajeLOTR {
    nombre: string;
    pv:number; 
    mostrarHP: () => void; 
}

function curar(personaje: PersonajeLOTR, cantidad: any):void {
    personaje.pv += cantidad;
}

const nuevoPersonaje: PersonajeLOTR = {
    nombre: "Legolas",
    pv: 60,
    mostrarHP(){
        console.log('Vida actual: ', this.pv);
    }
}

curar(nuevoPersonaje,30);
nuevoPersonaje.mostrarHP();