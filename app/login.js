// step-1: add click event handler with the submit button
document.getElementById('btn-login').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const userEmail = document.getElementById('input-email');
    const email = userEmail.value;

    // setp-3: get password
    // 3.01: set id on the html element
    // 3.02: get the element
    // 3.03: get the value form the element
    const userPass = document.getElementById('input-pass');
    const pass = userPass.value;

    // DANGER: DO NOT VARIFY email password on the client side
    // step-4: varify email and password
    if(email === 'sontan@baap.com' && pass === 'chotoSontanAmin'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tumi amr sontan na. invalid user');
    }
});