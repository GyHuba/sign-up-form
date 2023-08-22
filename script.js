const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');

function checkPasswords() {
    if (password.value !== passwordConfirm.value || password.value.split('').length < 7) {
        password.style = 'border-color: red';
        passwordConfirm.style = 'border-color: red'
    }
    else {
        password.style = 'border-color: green';
        passwordConfirm.style = 'border-color: green'
    }
}

password.addEventListener('change', (e) => {
    checkPasswords()

})
passwordConfirm.addEventListener('change', (e) => {
    checkPasswords()

})