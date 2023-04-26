'use strict'

const modalWindow = document.getElementById('subscribe-modal');

if (!getCloseCookie()) {
    window.addEventListener('load', () => {
    modalWindow.classList.add('modal_active');
});

    document.querySelector('.modal__close').addEventListener('click', () => {
    // console.log('click');
    modalWindow.classList.remove('modal_active');
    document.cookie = '.modal__close=true';
})

}

function getCloseCookie() {
    const pairs = document.cookie.split('; ');
    return pairs.includes('.modal__close=true');
}
