document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const messageElement = document.getElementById('message');

    button.addEventListener('click', () => {
        messageElement.textContent = 'Hello, this is an interactive message from JavaScript!';
        console.log('Button was clicked and a message was displayed.');
    });
});
