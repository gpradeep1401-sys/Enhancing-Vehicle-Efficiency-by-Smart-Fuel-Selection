// Show register form and hide login form
function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

// Show login form and hide register form
function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

// Dummy register function
function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && password) {
        alert('User registered successfully!');
        localStorage.setItem('isLoggedIn', 'true'); // Set login state
        window.location.href = 'index.html';  // Redirect to predictor page
    } else {
        alert('Please fill out all fields.');
    }

    return false;  // Prevent form from submitting
}

// Dummy login function
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true'); // Set login state
        window.location.href = 'index.html';  // Redirect to predictor page
    } else {
        alert('Please enter your email and password.');
    }

    return false;  // Prevent form from submitting
}
