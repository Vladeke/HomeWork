document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login == 'Admin' && password == 'TheMaster')
        alert('Welcome!');

    else alert('I don\'t know you');
}

