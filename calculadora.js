const pantalla = document.getElementById('pantalla');
const botoNumeros = document.querySelectorAll('.numero');
const botoOperadors = document.querySelectorAll('.operador');
const botoIgual = document.getElementById('igual');
const botoNetejar = document.getElementById('netejar');
const botoEsborrar = document.getElementById('borrar');

let operacioSeleccionat = '';
let valorAnterior = '';

pantalla.textContent = '0';


botoNumeros.forEach(boto => {
  boto.addEventListener('click', () => {
    pantalla.textContent =
      pantalla.textContent === '0'
        ? boto.textContent
        : pantalla.textContent + boto.textContent;
  });
});


botoOperadors.forEach(boto => {
  boto.addEventListener('click', () => {
    valorAnterior = pantalla.textContent;
    operacioSeleccionat = boto.textContent;
    pantalla.textContent = '';
  });
});


botoIgual.addEventListener('click', () => {
  const valorActual = pantalla.textContent;
  const numAnterior = parseFloat(valorAnterior);
  const numActual = parseFloat(valorActual);
  let resultat = 0;

  switch (operacioSeleccionat) {
    case '+':
      resultat = numAnterior + numActual;
      break;
    case '-':
      resultat = numAnterior - numActual;
      break;
    case '*':
      resultat = numAnterior * numActual;
      break;
    case '/':
      resultat = numActual !== 0 ? numAnterior / numActual : 'Error';
      break;
    default:
      resultat = 'Error';
  }

  pantalla.textContent = resultat;
});

botoNetejar.addEventListener('click', () => {
  pantalla.textContent = '0';
  valorAnterior = '';
  operacioSeleccionat = '';
});

botoEsborrar.addEventListener('click', () => {
  pantalla.textContent =
    pantalla.textContent.length > 1
      ? pantalla.textContent.slice(0, -1)
      : '0';
});