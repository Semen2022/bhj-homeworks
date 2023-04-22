'use strict'

const xhrRate = new XMLHttpRequest();

xhrRate.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhrRate.send();

xhrRate.addEventListener('readystatechange', () => {
    if (xhrRate.readyState === xhrRate.DONE) {
        // console.log(xhrRate.response);
        document.getElementById("loader").classList.remove("loader_active");

        const ObjectRate = JSON.parse(xhrRate.response)['response']['Valute'];
        // console.log('***---***---***' + ObjectRate + '***////***////');
        const insertElement = document.getElementById('items');
        
        for (const item in ObjectRate) {
            // console.log('PrinT ', ObjectRate[item].CharCode, ObjectRate[item].Value, ' руб.' );
            let output = '<div class="item">';
            output +='<div class="item__code">';
            output += ObjectRate[item].CharCode + '</div><div class="item__value">' + ObjectRate[item].Value;  
            output += '</div><div class="item__currency">руб.</div></div>';
            insertElement.insertAdjacentHTML("beforeend", output);            
        }
    } 
})