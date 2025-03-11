document.getElementById('verify-btn').addEventListener('click', function() {
    // Ocultamos el botón original y mostramos el botón de Telegram
    document.getElementById('verify-btn').style.display = 'none';
    document.getElementById('telegram-login-btn').style.display = 'block';

    // Opcional: Puedes agregar un mensaje o acción para informar al usuario que están a punto de iniciar sesión
    alert('Please log in using your Telegram account');
});
