/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Huawei P20',
    precio: 5000
}

const tableta: Producto = {
    desc: 'iPad Pro',
    precio: 4500
}

export function calculaISV(productos: Producto[]): [number, number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono,tableta];

const [total, isv] = calculaISV(articulos);

// console.log(total);
// console.log(isv);
