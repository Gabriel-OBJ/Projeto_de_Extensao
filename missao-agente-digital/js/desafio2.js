function verificarFlag() {
    const flagCorreta = 'PHANTASMA';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario.toUpperCase() === flagCorreta) {
        window.location.href = 'desafio3.html';
    } else {
        alert('CÓDIGO INCORRETO! Continue tentando.');
    }
}