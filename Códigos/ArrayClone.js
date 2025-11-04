// ARRAY COM 3 ELEMENTOS
const array = ['A','B','C'];

// MÉTODO 1: Usando slice()
const clone1 = array.slice();
// Resultado esperado: [ 'A', 'B', 'C' ]

// MÉTODO 2: Usando spread(...)
const clone2 = [...array];
// Resultado esperado: [ 'A', 'B', 'C' ]

// Teste console
console.log(array);
console.log(clone1);
console.log(clone2);