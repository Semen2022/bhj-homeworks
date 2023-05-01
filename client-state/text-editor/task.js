'use strict'

const storageText = localStorage.getItem('text');

document.getElementById("editor").textContent = storageText;

const textField = document.getElementById("editor");
textField.addEventListener('keydown', () => {
    localStorage.setItem('text', textField.value);
})
