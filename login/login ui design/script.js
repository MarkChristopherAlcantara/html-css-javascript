document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        window.location.href = "mobile.html";
    }
});

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        alert('Login successful!');
    }
}
