 const pantalla = document.getElementById ('pantalla');
        const botoNumeros = document.querySelectorAll('.numero');
        const botoOperadors = document.querySelectorAll('.operador');
        const botoIgual = document.getElementById('igual');
        const BotoNetejar = document.getElementById('netejar');

        let operacioActual = '';
        let operacioSeleccionat = '';
        let valorAnterior = '';
        
        pantalla.textContent = '0';

        botoNumeros.forEach(boto => {
            boto.addEventListener('click' , () => {
                if (pantalla.textContent === '0') {
                pantalla.textContent = boto.textContent;
                } else {
                    pantalla.textContent += boto.textContent;
                }
            });
        });

        botoOperadors.forEach(boto => {
            boto.addEventListener('click' , () => {
            valorAnterior = pantalla.textContent;
            operacioSeleccionat = boto.textContent; 
            pantalla.textContent = "";
            });
        });