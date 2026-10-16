//  Mayor o menor de edad
let edad = 20;
 
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
 
// Par o impar
let numero = 7;
 
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
 
// Nota - aprobado, reprobado o excelente
let nota = 8;
 
if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}
 

// Números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 
// Números del 10 al 1  
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
 
// Par o impar en 20 iteraciones
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
 
// Igual que el anterior, pero con template literals
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}
 