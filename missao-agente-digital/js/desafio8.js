function verificarFlag() {
    const flagCorreta = 'Mimi2008';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario === flagCorreta) {
        window.location.href = 'final.html';
    } else {
        alert('SENHA INCORRETA. O SISTEMA PERMANECE ATIVO.');
    }
}