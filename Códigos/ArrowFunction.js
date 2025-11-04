// VARIÁVEIS PARA SOMA
let num1 = 3
let num2 = 2

// FUNÇÃO TRADICIONAL
function soma(a, b) {
    return a + b;
};
// 3 linhas de código
// Resultado esperado: 5

// FUNÇÃO ARROW
const somaArrow = (a, b) => a + b;
// Apenas 1 linha de código
// Resultado esperado: 5


// Teste console
console.log("função tradicional: " + soma(num1, num2));
console.log("função arrow: " + somaArrow(num1, num2));