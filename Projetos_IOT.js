// Exemplo de funcionalidade interativa com JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Exemplo de alerta ao clicar no botão de assistir vídeo
    const videoButton = document.querySelector('a.btn-primary');
    videoButton.addEventListener('click', () => {
        alert('Você está sendo redirecionado para o vídeo da turma!');
    });
});
