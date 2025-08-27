function verificarFlag() {
    const flagCorreta = 'SEGURANÇA';
    const inputUsuario = document.getElementById('flag-input').value.trim();
    if (inputUsuario === flagCorreta) {
        window.location.href = 'desafio2.html';
    } else {
        alert('ACESSO NEGADO!');
    }
}