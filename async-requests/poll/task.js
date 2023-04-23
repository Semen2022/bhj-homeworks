'use strict'

const xhrPoll = new XMLHttpRequest();

xhrPoll.addEventListener('readystatechange', () => {
    if (xhrPoll.readyState === xhrPoll.DONE) {
        // console.log(xhrPoll.response);
        const ObjectPoll = JSON.parse(xhrPoll.response);
        // console.log('***---***---***' + ObjectPoll + '***////***////');
        document.getElementById('poll__title').innerHTML = ObjectPoll.data.title;
        const answers = ObjectPoll.data.answers;
        // console.log(answers);
        const blockButtons = document.getElementById('poll__answers');
        for (let key of answers) {
            let btnAnswer = `<button class="poll__answer"> ${key} </button>`;
            blockButtons.insertAdjacentHTML('beforeend', btnAnswer);
        }

        const btnClick = document.querySelectorAll('.poll__answer');
        console.log(btnClick);
        for (let btn of btnClick) {
            btn.addEventListener('click', () => {
                blockButtons.remove();
                alert('Спасибо, Ваш голос засчитан!');    
            });  
        }
    }
});

xhrPoll.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhrPoll.send();