function verificarFlag() {
    const flagCorreta = 'INFORMACAO_CONFIDENCIAL';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario === flagCorreta) {
        window.location.href = 'desafio6/';
    } else {
        alert('COOKIE INVÁLIDO. Verifique o valor correto.');
    }
}