function verificarFlag() {
    const flagCorreta = 'NAO_CONFIE_EM_ESTRANHOS';
    const inputUsuario = document.getElementById('flag-input').value.trim();

    // Compara a resposta do usuário (em maiúsculas) com a flag correta
    if (inputUsuario.toUpperCase() === flagCorreta) {
        // Se estiver certo, vai para o próximo desafio
        window.location.href = '/desafio7.html';
    } else {
        // Se estiver errado, mostra um alerta
        alert('CÓDIGO ERRADO!');
    }
}