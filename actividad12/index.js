//ejercicio 1
//a
const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Ingrese un número:"));
    numeros.push(numero);
}
console.log(numeros);


//b
const numerosImpares = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Ingrese un número:"));
    if (numero % 2 !== 0) {
        numerosImpares.push(numero);
    }
}
console.log(numerosImpares);


//c
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
});
console.log(frutas);


//d
const listaFrutas = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = listaFrutas.map((fruta) => {
    return fruta.toUpperCase();
});
console.log(listaFrutas);       // el original no cambia
console.log(frutasMayusculas);  // el nuevo arreglo


//e
const frutasConNa = listaFrutas.filter((fruta) => {
    if (fruta.includes("na")) {
        return true;
    } else {
        return false;
    }
});
console.log(frutasConNa);




//ejercicio 2
//a
const producto = {
    nombre: "Remera básica",
    precio: 15000,
    stock: 20,
    talles: ["s", "m", "l"]
};
console.log(producto);

//b

const productos = [
    { nombre: "Remera", precio: 15000, stock: 3, talles: ["s", "m", "l"] },
    { nombre: "Pantalón", precio: 35000, stock: 12, talles: ["s", "m", "l"] },
    { nombre: "Campera", precio: 60000, stock: 2, talles: ["m", "l"] },
    { nombre: "Buzo", precio: 40000, stock: 8, talles: ["s", "m"] }
];

productos.forEach((item) => {
    if (item.stock < 5) {
        console.log(item);
    }
});

//c

const productosConDescuento = productos.map((item) => {
    return {
        nombre: item.nombre,
        precio: item.precio * 0.9,
        stock: item.stock,
        talles: item.talles
    };
});
console.log(productosConDescuento);

//d

const productosConStock = productos.filter((item) => {
    if (item.stock > 10) {
        return true;
    } else {
        return false;
    }
});
console.log(productosConStock);

