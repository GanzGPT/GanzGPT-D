function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
            initializeContent(); // Az új tartalom betöltése után újrainicializálás
        })
        .catch(error => {
            document.getElementById('content-area').innerHTML = "<p>Hiba történt az oldal betöltésekor.</p>";
        });
}

function initializeContent() {
    const students = ['Anna', 'Béla', 'Csaba', 'András', 'Gábor', 'Anikó'];

    // Eredeti lista megjelenítése
    const originalListElement = document.getElementById('original-list');
    if (originalListElement) {
        originalListElement.innerHTML = ''; // Tisztítás az újrainicializálás előtt
        students.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = student;
            originalListElement.appendChild(listItem);
        });
    }

    // Nagybetűs lista
    const uppercaseList = students.map(student => student.toUpperCase());
    const uppercaseListElement = document.getElementById('uppercase-list');
    if (uppercaseListElement) {
        uppercaseListElement.innerHTML = ''; // Tisztítás az újrainicializálás előtt
        uppercaseList.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = student;
            uppercaseListElement.appendChild(listItem);
        });
    }

    // A-val kezdődő diákok szűrése
    const filteredList = students.filter(student => student.startsWith('A'));
    const filteredListElement = document.getElementById('filtered-list');
    if (filteredListElement) {
        filteredListElement.innerHTML = ''; // Tisztítás az újrainicializálás előtt
        filteredList.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = student;
            filteredListElement.appendChild(listItem);
        });
    }

    // Diákok számának kiszámítása
    const studentsCount = students.reduce((count) => count + 1, 0);
    const studentsCountElement = document.getElementById('students-count');
    if (studentsCountElement) {
        studentsCountElement.textContent = `Diákok száma: ${studentsCount}`;
    }
}

// Eseménykezelő, amely az oldal betöltése után lefut
document.addEventListener('DOMContentLoaded', function() {
    initializeContent();
});
