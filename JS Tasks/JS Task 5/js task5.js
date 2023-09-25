function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        displayError('name', 'This field is required');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        displayError('email', 'A valid email address is required');
        return;
    }

    if (website.trim() !== '') {
        const urlPattern = /^(https?:\/\/)?([^\s:/?#]+)(?:\/([^?\s#]*))?$/;
        if (!website.match(urlPattern)) {
            displayError('website', 'A valid URL is required');
            return;
        }
    }

    
    if (message.trim() === '') {
        displayError('message', 'This field is required');
        return;
    }


    console.log('Form submitted successfully!');
}

function displayError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');

    const errorDiv = document.getElementById(`${fieldId}Error`);
    errorDiv.innerText = errorMessage;
}
