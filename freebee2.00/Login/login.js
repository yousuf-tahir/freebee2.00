
let loginIDs = JSON.parse(localStorage.getItem('loginIDs')) || [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Login attempt with username:", username, "and password:", password);

    const isValid = loginIDs.some(id => id.username === username && id.password === password);

    const loginMessageElement = document.getElementById('loginMessage');
    if (isValid) {
        console.log("Login successful. Redirecting to homepage...");
     
        window.location.href = "/freebee2.00/homepage/index.html";
    } else {
        console.log("Invalid username or password.");
        loginMessageElement.textContent = 'Invalid username or password.';
        loginMessageElement.style.color = 'red';
    }
});
