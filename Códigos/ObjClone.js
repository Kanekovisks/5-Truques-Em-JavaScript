// OBJETO COM 2 CHAVES E VALORES
const objeto = {
    chave1: 'valor1',
    chave2: 'valor2'
};

// MÉTODO 1: Usando Object.assign()
const clone1 = Object.assign({}, objeto);
// Resultado esperado: { chave1: 'valor1', chave2: 'valor2'}

// MÉTODO 2: Usando spread(...)
const clone2 = {...objeto};
// Resultado esperado: { chave1: 'valor1', chave2: 'valor2'}

// MÉTODO 3: Usando JSON.parse() e JSON.stringify()
const clone3 = JSON.parse(JSON.stringify(objeto));
// Resultado esperado: { chave1: 'valor1', chave2: 'valor2'}

// Teste console
console.log(objeto);
console.log(clone1);
console.log(clone2);
console.log(clone3);
