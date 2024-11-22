// "Igen" gomb kattintás esemény kezelése
// A bejelentkezési űrlapot azonnal megjelenítjük, és elrejtjük a többi elemet

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('question').style.display = 'none';
});

// "Nem" gomb kattintás esemény kezelése
// A regisztrációs űrlapot azonnal megjelenítjük, és elrejtjük a többi elemet

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('question').style.display = 'none';
});

// A "Regisztráció" gomb megjelenítése
// Az átirányítás a regisztrációs űrlapra történik

const showRegisterButton = document.getElementById('show-register-button');
if (showRegisterButton) {
    showRegisterButton.addEventListener('click', function() {
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    });
}

// A "Bejelentkezés" gomb megjelenítése
// Az átirányítás a bejelentkezési űrlapra történik

const showLoginButton = document.getElementById('show-login-button');
if (showLoginButton) {
    showLoginButton.addEventListener('click', function() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    });
}

// A "Regisztráció" gomb kattintás esemény kezelése
// A regisztrációs űrlap beküldésekor egy POST kérés készül a szerver felé

document.getElementById('register-button').addEventListener('click', function() {
    const username = document.getElementById('new-username').value; // Új felhasználónév lekérése
    const password = document.getElementById('new-password').value; // Új jelszó lekérése

    if (username && password) { // Ellenőrizzük, hogy minden mező ki van töltve
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/register', true); // Aszinkron POST kérés a '/register' URL-re
        xhr.setRequestHeader('Content-Type', 'application/json'); // Beállítjuk az adat típusát JSON-ra
        xhr.onload = function() {
            if (xhr.status === 200) { // Ha a kérés sikeres volt (HTTP státusz 200)
                const message = xhr.responseText; // A szerver válaszának lekérése
                alert(message); // A válasz megjelenítése felugró üzenetben
                if (message === 'Sikeres regisztráció!') {
                    // Ha sikeres volt a regisztráció, megjelenítjük a bejelentkezési űrlapot
                    document.getElementById('login-form').style.display = 'block';
                    document.getElementById('register-form').style.display = 'none';
                }
            } else {
                console.error('Hiba történt a regisztráció során.'); // Hiba esetén kiírjuk a konzolba
            }
        };
        xhr.send(JSON.stringify({ username, password })); // Elküldjük a felhasználónevet és jelszót JSON formátumban
    } else {
        alert('Kérlek töltsd ki az összes mezőt!'); // Ha nem töltötték ki az összes mezőt, figyelmeztetést küldünk
    }
});

// A "Bejelentkezés" gomb kattintás esemény kezelése
// A bejelentkezési űrlap beküldésekor egy POST kérés készül a szerver felé

document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value; // Felhasználónév lekérése
    const password = document.getElementById('password').value; // Jelszó lekérése

    if (username && password) { // Ellenőrizzük, hogy minden mező ki van töltve
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/login', true); // Aszinkron POST kérés a '/login' URL-re
        xhr.setRequestHeader('Content-Type', 'application/json'); // Beállítjuk az adat típusát JSON-ra
        xhr.onload = function() {
            if (xhr.status === 200) { // Ha a kérés sikeres volt (HTTP státusz 200)
                const message = xhr.responseText; // A szerver válaszának lekérése
                alert(message); // A válasz megjelenítése felugró üzenetben
                if (message === 'Sikeres bejelentkezés!') {
                    window.location.href = 'welcome.html'; // Sikeres bejelentkezés esetén átirányítjuk az üdvözlő oldalra
                }
            } else {
                alert('Sikertelen bejelentkezés. Helytelen felhasználónév vagy jelszó.'); // Sikertelen bejelentkezés esetén figyelmeztetést küldünk
            }
        };
        xhr.send(JSON.stringify({ username, password })); // Elküldjük a felhasználónevet és jelszót JSON formátumban
    } else {
        alert('Kérlek töltsd ki az összes mezőt!'); // Ha nem töltötték ki az összes mezőt, figyelmeztetést küldünk
    }
});
