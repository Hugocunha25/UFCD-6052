let contador = 0;
        let intervalo;

        function atualizarContador() {
            contador++;
            document.getElementById('contador').textContent = contador;
        }

        document.getElementById('iniciar').addEventListener('click', function() {
            if (!intervalo) { // Verifica se o contador já está em execução
                intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada 1 segundo
            }
        });

        document.getElementById('parar').addEventListener('click', function() {
            clearInterval(intervalo); // Para o contador
            intervalo = null; // Reseta a variável do intervalo
        });