document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.kategori-knapper button');
    const form = document.querySelector('form');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('kontaktNavn').value.trim();
        const emailInput = document.getElementById('kontaktEmail').value.trim();
        const messageInput = document.getElementById('besked').value.trim();

        if (nameInput && emailInput && messageInput) {
            alert('Besked sendt! Tak for din henvendelse.');
            form.reset(); // Tøm formularen efter indsendelse
        } else {
            alert('Udfyld venligst alle felter.');
        }
    });
});