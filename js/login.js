'use strict';

const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const cancelButton = document.querySelector('#cancelButton');

const createAccountLink = document.querySelector('#createAccountLink');
let isLoggedIn = false;
const signInLink = document.querySelector('#signInLink');


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');

    try {
        const username = event.target.username.value;
        const password = event.target.password.value;

        let user = localStorage.getItem(username);
        console.log(user);
        if (!user) {
            throw new Error('User not found');
        }

        user = JSON.parse(user);

        if(user.password === password) {
            document.querySelector('#loginError').textContent = 'Login successful';
            isLoggedIn = true;
            signInLink.innerText = 'Signed in';
            window.location.assign('/index.html');
        } else {
            throw new Error('Incorrect password');
        }
    } catch (error) {
        document.querySelector('#loginError').textContent = error.message;
    }
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
        const username = event.target.regUsername.value;
        const name = event.target.regName.value;
        const email = event.target.regEmail.value;
        const password1 = event.target.password1.value;
        const password2 = event.target.password2.value;

        if (localStorage.getItem(username)) {
            throw new Error('User already exists!');
        }

        if (password1 !== password2) {
            throw new Error('Passwords do not match!');
        }

        const user = {
            username : username,
            password : password1,
            name: name,
            email: email
        }

        localStorage.setItem(username, JSON.stringify(user));
        console.log('User registered');
        hideRegisterForm();

    } catch (error) {
        document.querySelector('#registerError').textContent = error.message;
    }
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    hideRegisterForm();
});

createAccountLink.addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.style.display = 'flex';
    loginForm.style.display = 'none';
});

function hideRegisterForm() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
}