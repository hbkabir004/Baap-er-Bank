
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email & password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = "banking.html"
    }
    else if (userEmail == 'baaperbeti.mitheee@baap.com' && userPassword == 'dxersathegulugulu') {
        window.location.href = "banking.html"
    }
    else {
        alert('ঠিকঠাক আইডি-পাসওয়ার্ড দে ফইন্নি🤬');
    }
})


