document.addEventListener('DOMContentLoaded', function() {

    const signIn = document.getElementsByTagName('button')[0];
    const closeButton = document.querySelector('.close')
    const modal = document.querySelector('.modal');
    const submitButton = document.querySelector('.submit');
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('pass');

    signIn.addEventListener('click', function() {
        console.log('Sign-in button has been pressed');
        modal.style.display = 'inline';

    })

    closeButton.addEventListener('click', function() {
        console.log('Close button has been pressed');
        if (modal.style.display != 'none') {
            modal.style.display = 'none';
        }
    })

    submitButton.addEventListener('click', function() {
        userInput.classList.add('error');
        passwordInput.classList.add('error');
    })

    userInput.addEventListener('click', function() {
        userInput.classList.remove('error');
    })


})