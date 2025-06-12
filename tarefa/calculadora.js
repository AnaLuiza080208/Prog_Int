let display = document.getElementById('resposta');
let expressao = '';

function adicionarNumero(numero) {
  expressao += numero;
  display.textContent = expressao;
}

function adicionarOperacao(op) {
  expressao += op;
  display.textContent = expressao;
}

function calcularResultado() {
  try {
    const resultado = eval(expressao);
    display.textContent = resultado;
    expressao = resultado.toString();
  } catch (error) {
    display.textContent = 'Erro';
    expressao = '';
  }
}

function limpar() {
  display.textContent = '';
  expressao = '';
}

document.querySelectorAll('.numero').forEach(button => {
  button.addEventListener('click', () => adicionarNumero(button.value));
});

document.getElementById('soma').addEventListener('click', () => adicionarOperacao('+'));
document.getElementById('sub').addEventListener('click', () => adicionarOperacao('-'));
document.getElementById('vezes').addEventListener('click', () => adicionarOperacao('*'));
document.getElementById('div').addEventListener('click', () => adicionarOperacao('/'));
document.getElementById('abrePar').addEventListener('click', () => adicionarOperacao('('));
document.getElementById('fechaPar').addEventListener('click', () => adicionarOperacao(')'));

document.getElementById('igual').addEventListener('click', calcularResultado);
document.getElementById('clear').addEventListener('click', limpar);