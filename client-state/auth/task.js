'use strict'

const singIn = document.getElementById('singin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

document.forms.signin__form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(document.forms.signin__form);
    const xhrReg = new XMLHttpRequest();

    xhrReg.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhrReg.addEventListener('readystatechange', () => {
        if (xhrReg.readyState === xhrReg.DONE) {
            localStorage.setItem(xhrReg.response.user__id);
            welcome.textContent = user__id;
        }
    })
    
    
    xhrReg.send(formData);



})

