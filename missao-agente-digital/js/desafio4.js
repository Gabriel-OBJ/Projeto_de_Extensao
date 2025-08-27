function verificarFlag() {
    const flagCorreta = 'ACESSO_RESTRITO';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario === flagCorreta) {
        window.location.href = 'desafio5.html';
    } else {
        alert('NENHUM ARQUIVO ENCONTRADO. Verifique o caminho.');
    }
}