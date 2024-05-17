/*const formElement = document.getElementById('myForm');

const selectElement = document.getElementById('select');

const vornameElement = document.getElementById('vorname');
const nachnameElement = document.getElementById('nachname');
const emailElement = document.getElementById('email');

formElement.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const vorname = vornameElement.value;
    const nachname = nachnameElement.value;
    const email = emailElement.value;
    const selectedOption = selectElement.value;

    const formData = {
        vorname: vorname,
        nachname: nachname,
        email: email,
        selectedOption: selectedOption
    };

    try {
        const response = await fetch('https://example.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Überprüfung
        if (response.ok) {
            const result = await response.json();
            console.log('Erfolgreich gesendet:', result);
            alert('Formular erfolgreich gesendet!');
        } else {
            console.error('Fehler beim Senden:', response.statusText);
            alert('Sorry, das Formular konnte nicht abgeschickt werden!');
        }
    } catch (error) {
        console.error('Netzwerkfehler:', error);
        alert('Netzwerkfehler beim Senden des Formulars');
    }
});

*/