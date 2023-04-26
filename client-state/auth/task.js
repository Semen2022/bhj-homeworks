'use strict'

const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

document.forms.signin__form.addEventListener('submit', (ev) => {
    ev.preventDefault();
console.log('Кнопка нажата');
    const formData = new FormData(document.forms.signin__form);
    const xhrReg = new XMLHttpRequest();

    xhrReg.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhrReg.responseType = 'json';
    xhrReg.addEventListener('readystatechange', () => {
        if (xhrReg.readyState === xhrReg.DONE) {
            localStorage.setItem('user_id', xhrReg.response.user_id);
            console.log(xhrReg.response);
            console.log(xhrReg.response['user_id']);

            console.log('signIn', signIn);
            signIn.classList.remove("signin_active");
            welcome.classList.add("welcome_active");
            userId.textContent = xhrReg.response.user_id;
        }
    })
    
    
    xhrReg.send(formData);



})

