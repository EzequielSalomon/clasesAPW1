console.log("hola mundo 5");
//practicando funciones --
const mensaje = function() {
    return "Aguante River";
};
const bienvenida = function(nombre, frase) {
    return frase() + " " + nombre;
}
const texto = bienvenida("Juan", mensaje);
console.log(texto);

//ejercicio A
function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar();

//ejercicio B
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Andrés");

//ejercicio C
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
const edad = 20;
const resultado = esMayorDeEdad(edad);
console.log(resultado); 

//ejercicio 2
//a
const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
const edadUsuario = 15;
const resultadoFlecha = esMayorDeEdad(edadUsuario);
console.log(resultadoFlecha); // false

//b
const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`);
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`);
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`);
    }
};

for (let i = 0; i <= 10; i++) {
    compararNumeros(i, 5);
}

//ejercicio 3
//a


function suma(numero1, numero2) {
    const total = numero1 + numero2;
    console.log(`El resultado de la suma es ${total}`);
}

function resta(numero1, numero2) {
    const total = numero1 - numero2;
    console.log(`El resultado de la resta es ${total}`);
}

//a (queda comentado porque el b lo mejora)
/*
const operacion = (numero1, numero2, callback) => {
    callback(numero1, numero2);
};
*/

//b
const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        console.log("Debe ingresar solo números.");
    } else {
        callback(numero1, numero2);
    }
};

operacion(10, 4, suma);    // El resultado de la suma es 14
operacion(10, 4, resta);   // El resultado de la resta es 6
operacion(10, "4", suma);  // Debe ingresar solo números.