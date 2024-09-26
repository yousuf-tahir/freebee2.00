// Predefined login IDs
let loginIDs = JSON.parse(localStorage.getItem('loginIDs')) || [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

   
    const isUsernameTaken = loginIDs.some(id => id.username === newUsername);

    const signupMessageElement = document.getElementById('signupMessage');
    if (isUsernameTaken) {
        signupMessageElement.textContent = 'Username already taken. Please choose another.';
        signupMessageElement.style.color = 'red';
    } else {
      
        loginIDs.push({ username: newUsername, password: newPassword });
        localStorage.setItem('loginIDs', JSON.stringify(loginIDs));
        signupMessageElement.textContent = 'Signup successful! You can now log in.';
        signupMessageElement.style.color = 'green';
    }

    
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
});
