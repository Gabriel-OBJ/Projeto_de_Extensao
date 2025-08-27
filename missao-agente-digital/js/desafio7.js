function verificarFlag() {

    const flagCorreta = 'DADOS_EMPACOTADOS';
    const inputUsuario = document.getElementById('flag-input').value.trim();

    if (inputUsuario.toUpperCase() === flagCorreta) {
        // Se estiver certo, vai para o desafio final
        window.location.href = 'desafio8.html';
    } else {
        // Se estiver errado, mostra um alerta
        alert('DECODIFICAÇÃO FALHOU.');
    }
}