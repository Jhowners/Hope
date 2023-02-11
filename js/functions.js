function validaCampos(person){
    if(!person.username) {
        return document.getElementById('idError').innerHTML = "Invalid Username"
    }

    if(!person.password) {
        return document.getElementById('idError').innerHTML = "Invalid Password"
    }
}

function login(){
    let person = {
        username: document.getElementById('idUsername').value,
        password: document.getElementById('idPassword').value
    };
    
    if (!validaCampos(person)) {
    document.getElementById('form').submit();
    }
}
