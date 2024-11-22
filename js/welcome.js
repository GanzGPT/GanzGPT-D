function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content-area').innerHTML = "<p>Hiba történt az oldal betöltésekor.</p>";
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Főoldalra való visszalépés
        });
    }
});