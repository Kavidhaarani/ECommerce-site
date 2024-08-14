function check() {
    var nameRegex = /^[a-zA-Z\-]+$/;
    var passregex = /^(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+*!]).*$/;
    var name = document.getElementById("username").value.match(nameRegex);;
    var password = document.getElementById("password").value.match(passregex);;
    if (name == "" || name == null) {
        alert("username should not be blank and name should be in letter");
        return false;
    }
    else if (password == "" || password == null) {
        alert("password should not be blank or must contain one special character ");
        return false;
    }
    else {
        location.href = 'home.html';
    }
}