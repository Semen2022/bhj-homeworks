'use strict'

   // находим нашу форму на странице и сразу прослушиваем отправку.
document.forms.form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    const xhrForm = new XMLHttpRequest();
    xhrForm.upload.onprogress = function (event) {
        const progress = document.getElementById( 'progress' );
        progress.value = event.loaded / event.total;
    }

    xhrForm.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhrForm.send(document.forms.form);
});
