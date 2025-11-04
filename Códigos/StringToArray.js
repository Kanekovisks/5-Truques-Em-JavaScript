// String comum
let string = "STRING";

// MÉTODO 1: Usando split()
string.split('');
// Resultado esperado: ['S','T','R','I','N','G']

// MÉTODO 2: Usando spread(...)
[...string]
// Resultado esperado: ['S','T','R','I','N','G']

// MÉTODO 3: Usando Array.from()
Array.from(string);
// Resultado esperado: ['S','T','R','I','N','G']

// MÉTODO 4: Usando Object.assign()
Object.assign([], string);
// Resultado esperado: ['S','T','R','I','N','G']

// Console teste
console.log(string.split(''));
console.log([...string]);
console.log(Array.from(string));
console.log(Object.assign([], string));