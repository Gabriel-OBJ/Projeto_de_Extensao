function verificarFlag() {
    const flagCorreta = '16/11/2021';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario === flagCorreta) {
        window.location.href = 'desafio4.html';
    } else {
        alert('A pista deve estar em outro lugar...');
    }
}