'use strict'

const xhrRate = new XMLHttpRequest();

xhrRate.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhrRate.send();

xhrRate.addEventListener('readystatechange', () => {
    if (xhrRate.readyState === xhrRate.DONE) {
        //console.log(xhrRate.responseText);
        document.getElementById("loader").classList.remove('loader_active');
        
    } 
})