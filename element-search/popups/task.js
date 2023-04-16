let modalWindow = document.getElementById('modal_main');

modalWindow.classList.add("modal_active");

const modalClose = document.querySelectorAll('.modal__close');
const modalCloseArr = Array.from(modalClose);

//const  = document.getElementById('modal_success');
console.log(modalClose);
console.log(modalCloseArr);
console.log(modalCloseArr[0]);
console.log(modalCloseArr[1]);
console.log(modalCloseArr[2]);

function closeModal() {
    console.log('YES');
    modalWindow.classList.remove("modal_active");
}

function showSuccess() {
    console.log('YES_YES');
    document.getElementById('modal_success').classList.add('modal_active');
}

function closeModalSucces() {
    console.log('YES_yes_YES');
    document.getElementById('modal_success').classList.remove('modal_active');
}

modalCloseArr[0].addEventListener('click', closeModal);

modalCloseArr[1].addEventListener('click', closeModal);
modalCloseArr[1].addEventListener('click', showSuccess);

modalCloseArr[2].addEventListener('click', closeModalSucces);
