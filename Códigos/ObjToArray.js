// OBJETO COM 2 CHAVES E VALORES
const objeto = {
    chave1: 'valor1',
    chave2: 'valor2'
};

// MÉTODO 1: Usando Object.keys()
Object.keys(objeto);
// Resultado esperado: ['chave1', 'chave2']

// MÉTODO 2: Usando Object.values()
Object.values(objeto);
// Resultado esperado: ['valor1', 'valor2']

// MÉTODO 3: Usando Object.entries()
Object.entries(objeto);
// Resultado esperado: [ ['chave1', 'valor1'], ['chave2', 'valor2'] ]



// Teste console
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));