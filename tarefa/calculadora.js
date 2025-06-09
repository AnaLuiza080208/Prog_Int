let display = document.getElementById('resposta');
let num1 = '';
let num2 = '';
let operacao = '';

function adicionarNumero(numero) {
  display.textContent += numero;
}

function escolherOperacao(op) {
  if (num1 === '') {
    num1 = display.textContent;
    operacao = op;
    display.textContent = '';
  }
}


function calcularResultado() {
  num2 = display.textContent;
  let resultado = 0;

  if (operacao === '+') {
    resultado = parseFloat(num1) + parseFloat(num2);
  } else if (operacao === '-') {
    resultado = parseFloat(num1) - parseFloat(num2);
  } else if (operacao === '*') {
    resultado = parseFloat(num1) * parseFloat(num2);
  }else if (operacao === '/') {
    resultado = parseFloat(num1) / parseFloat(num2);
  }

  display.textContent = resultado;
  num1 = resultado.toString();
  num2 = '';
  operacao = '';
}

function limpar() {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operacao = '';
  }

document.querySelectorAll('.numero').forEach(button => {
  button.addEventListener('click', () => adicionarNumero(button.value));
});


document.getElementById('soma').addEventListener('click', () => escolherOperacao('+'));
document.getElementById('sub').addEventListener('click', () => escolherOperacao('-'));
document.getElementById('vezes').addEventListener('click', () => escolherOperacao('*'));
document.getElementById('div').addEventListener('click', () => escolherOperacao('/'));
document.getElementById('igual').addEventListener('click', calcularResultado);
document.getElementById('clear').addEventListener('click', limpar);

