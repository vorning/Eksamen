document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('nyhedsbrevForm');
    if (!form) {
        console.error('Form not found');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submission event triggered');

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        console.log('Name Input Element:', nameInput);
        console.log('Email Input Element:', emailInput);

        if (!nameInput || !emailInput) {
            console.error('Input fields not found');
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        console.log('Entered Name:', name);
        console.log('Entered Email:', email);

        if (name && email) {
            alert(`Tak, ${name}! Du er nu tilmeldt vores nyhedsbrev.`);
        } else {
            alert('Udfyld venligst alle felter.');
        }
    });
});
