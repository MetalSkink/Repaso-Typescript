let habilidades: (boolean| string | number)[] = ['Parry', 'Counter', 'Healing'];

habilidades.push(true);


interface Personaje {
    nombre: string,
    lvl: number,
    habilidades: string[];
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: "Alucard",
    lvl: 9,
    habilidades: ['Parry', 'Counter', 'Healing']
}

personaje.puebloNatal = "smallville";

console.table(personaje);