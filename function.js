//Suma de dos numeros

// function suma(a,b){
//     return a + b 
// }

// const resultado = suma (5,3)
// console.log(resultado);

//-------------------------------------------
//Invertir a mayusculas

// function convertirMayusculas (texto){
//     return texto.toUpperCase();
// }

// const mensaje = "hola, como estas?"
// const mensajeMayuscula = convertirMayusculas(mensaje)
// console.log(mensajeMayuscula)

//----------------------------------------------

//Sumar impares

// function sumaImparesHasta(numero){
//     let suma = 0 

//     for(let i = 1; i<=numero; i+=2){
//         suma += i
//     }

//     return suma;
// }

// console.log(sumaImparesHasta(5))//9
// console.log(sumaImparesHasta(7))//16
// console.log(sumaImparesHasta(3))//4

//----------------------------------------------

//Repetir

// function repetir (valor, cantidad){
//     const resultado = []

//     for(let i = 0; i<cantidad; i++){
//         resultado.push(valor);
//     }

//     return resultado;
// }

// console.log(repetir("daniela", 4));

//--------------------------------------------

// Obtener indice

// function obtenerIndice(valor, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === valor) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // Salida: 2
// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // Salida: -1
  
//-------------------------------------------------------

//Cuenta regresiva
// function cuentaRegresiva(initial){
//   let numeros = [];

//   for(let i= initial; i>=0; i--){
//     numeros.push(i);
//   }
//   return numeros;

// }

// console.log(cuentaRegresiva(3)); // Salida: [3, 2, 1, 0]
// console.log(cuentaRegresiva(5)); // Salida: [5, 4, 3, 2, 1, 0]

//------------------------------------------------------------------

//Capitalizar plabras

function capitalizarPalabra(string){
  const palabras = string.split(' ');

  const palabrasCapitalizadas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));

  const resultado = palabrasCapitalizadas.join(' ');

  return resultado;
}

console.log(capitalizarPalabra('Esto es un título'))
console.log(capitalizarPalabra('había una vez'))
console.log(capitalizarPalabra('OMG'))