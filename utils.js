// import { userData, passwordData } from './data.js';

const form = document.querySelector('#validation-form');
const userName = document.querySelector('#username');
const pass = document.querySelector('#pass');
const error = document.querySelector('.error').style.color = 'red';
// Login function 

form.addEventListener('submit', event => {
  event.preventDefault();
  if (userName.value === userData && pass.value === passwordData) {
    let newWindow = window.open('welcome-page.html', '_blank');
    newWindow.document.write(`<h1>Bienvenido ${userName.value}</h1>`);
    
  } else {
    document.querySelector('.error').innerHTML = "Incorrect user or password";
  }

});


