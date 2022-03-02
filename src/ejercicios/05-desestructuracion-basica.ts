/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles:Detalles
}

interface Detalles {
    autor: string,
    year:number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Till i collapse',
    detalles: {
        autor: 'Eminem',
        year: 2009
    }
}

const { volumen, segundo,cancion, detalles:{autor: autorDetalle} } = reproductor
// const { autor } = detalles;

// console.log('El volumen actual es ', volumen);
// console.log('El volumen segundo es ',segundo);
// console.log('La cancion actual es ', cancion);
// console.log('El autor es ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
// console.log('Personaje 3:', p3);
