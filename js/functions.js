function validaCampos(person){
    // debugger
    console.log(person.username, person.password);
    if(!person.username) {
        return document.getElementById('idError').innerHTML = "Invalid Username"
    }

    if(!person.password) {
        return document.getElementById('idError').innerHTML = "Invalid Password"
    }
}

function login(){
    debugger
    let person = {
        username: document.getElementById('idUsername').value,
        password: document.getElementById('idPassword').value
    };
    
    if (!validaCampos(person)) {
    document.getElementById('form').submit();
    }
}
// button.addEventListener("click", function(event){
//     validaCampos();
// })