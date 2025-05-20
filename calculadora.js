    const pantalla = document.getElementById('pantalla');
    const botoNumeros = document.querySelectorAll('.numero');
    const botoOperadors = document.querySelectorAll('.operador');
    const botoIgual = document.getElementById('igual');
    const botoNetejar = document.getElementById('netejar');
    const botoEsborrar = document.getElementById('borrar')

    let operacioSeleccionat = '';
    let valorAnterior = '';

    pantalla.textContent = '0';

    botoNumeros.forEach(boto => {
      boto.addEventListener('click', () => {
        if (pantalla.textContent === '0') {
          pantalla.textContent = boto.textContent;
        } else {
          pantalla.textContent += boto.textContent;
        }
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
      let resultat = 0;

      const numAnterior = parseFloat(valorAnterior);
      const numActual = parseFloat(valorActual);

      if (operacioSeleccionat === '+') {
        resultat = numAnterior + numActual;
      } else if (operacioSeleccionat === '-') {
        resultat = numAnterior - numActual;
      } else if (operacioSeleccionat === '*') {
        resultat = numAnterior * numActual;
      } else if (operacioSeleccionat === '/') {
        resultat = numActual !== 0 ? numAnterior / numActual : 'Error';
      }

      pantalla.textContent = resultat;
    });

    botoNetejar.addEventListener('click', () => {
      pantalla.textContent = '0';
      valorAnterior = '';
      operacioSeleccionat = '';
    });

botoEsborrar.addEventListener('click', () => {
  if (pantalla.textContent.length > 1) {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
  } else {
    pantalla.textContent = '0';
  }
});
