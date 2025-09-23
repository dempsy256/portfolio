// Get the main container element
const container = document.querySelector('.contain');

// Get the login and register buttons
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Add a click event listener to the "Register" button
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Add a click event listener to the "Login" button
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});