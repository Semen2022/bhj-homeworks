'use strict'

const xhrRate = new XMLHttpRequest();

xhrRate.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhrRate.send();

xhrRate.addEventListener('readystatechange', () => {
    if (xhrRate.readyState === xhrRate.DONE) {
        console.log(xhrRate.response);
        document.getElementById("loader").classList.remove("loader_active");

        const ObjectRate = JSON.parse(xhrRate.response)['response']['Valute'];
        console.log('***---***---***' + ObjectRate + '***////***////');

        for (const item in ObjectRate) {
            console.log('PrinT ', ObjectRate[item].Value , ObjectRate[item].CharCode);
        }
    } 
})