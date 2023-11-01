const contact = document.getElementsByClassName('contact-us');
const email = document.getElementsByClassName('Email');
const email2 =document.getElementsByID('email2');
const name = document.getElementsById('name');
// const send = document.addEventListener('send');
// const submit = document.addEventListener('submit')


send.addEventListener('click', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    validateEmail(email);
    validateName(name);
}


function validateEmail(email) {
    const nameValue = email.value.trim
}