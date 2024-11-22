document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('question').style.display = 'none';
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('question').style.display = 'none';
});

document.getElementById('show-register-button')?.addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
});

document.getElementById('show-login-button')?.addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

document.getElementById('register-button').addEventListener('click', function() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (username && password) {
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            if (message === 'Sikeres regisztráció!') {
                document.getElementById('login-form').style.display = 'block';
                document.getElementById('register-form').style.display = 'none';
            }
        })
        .catch(error => console.error('Hiba történt a regisztráció során:', error));
    } else {
        alert('Kérlek töltsd ki az összes mezõt!');
    }
});

document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Sikertelen bejelentkezés. Helytelen felhasználónév vagy jelszó.');
            }
        })
        .then(message => {
            alert(message);
            if (message === 'Sikeres bejelentkezés!') {
                window.location.href = 'welcome.html';
            }
        })
        .catch(error => alert(error.message));
    } else {
        alert('Kérlek töltsd ki az összes mezõt!');
    }
});




