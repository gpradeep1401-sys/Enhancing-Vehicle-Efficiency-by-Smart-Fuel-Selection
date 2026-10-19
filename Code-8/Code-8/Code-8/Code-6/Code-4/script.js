function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

var isLoggedIn = false;
function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}
function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (name && email && password) {
        alert('User registered successfully!');
        isLoggedIn = true;
        window.location.href = 'login.html';
    } else {
        alert('Please fill out all fields.');
    }
    return false;
}
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';

    } else {
        alert('Please enter your email and password.');
    }

    return false;
}
function predictFuel() {
    const vehicleType = localStorage.getItem('vehicleCategory');
    const engineCC = parseInt(localStorage.getItem('engineCC'));
    const resultDiv = document.getElementById('predictionResult');
    let predictedFuel = '';

    if (vehicleCategory === 'bike') {
        if (engineCC >= 0 && engineCC <= 50) {
            predictedFuel = '87 Octane';
        } else if (engineCC > 50 && engineCC <= 100) {
            predictedFuel = '87 Octane';
        } else if (engineCC > 100 && engineCC <= 150) {
            predictedFuel = '87 Octane';
        } else if (engineCC > 150 && engineCC <= 200) {
            predictedFuel = '87 Octane';
        } else if (engineCC > 200 && engineCC <= 250) {
            predictedFuel = '89 Octane';
        } else if (engineCC > 250 && engineCC <= 300) {
            predictedFuel = '89 Octane';
        } else if (engineCC > 300 && engineCC <= 350) {
            predictedFuel = '91 Octane';
        } else if (engineCC > 350 && engineCC <= 400) {
            predictedFuel = '91 Octane';
        } else if (engineCC > 400 && engineCC <= 450) {
            predictedFuel = '95 Octane';
        } else if (engineCC > 450 && engineCC <= 500) {
            predictedFuel = '95 Octane';
        } else if (engineCC > 500 && engineCC <= 550) {
            predictedFuel = '95 Octane';
        } else if (engineCC > 550 && engineCC <= 600) {
            predictedFuel = '95 Octane';
        } else if (engineCC > 600 && engineCC <= 650) {
            predictedFuel = '98 Octane';
        } else if (engineCC > 650 && engineCC <= 700) {
            predictedFuel = '98 Octane';
        } else if (engineCC > 700 && engineCC <= 750) {
            predictedFuel = '98 Octane';
        } else if (engineCC > 750 && engineCC <= 800) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 800 && engineCC <= 850) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 850 && engineCC <= 900) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 900 && engineCC <= 1000) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 1000 && engineCC <= 1100) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 1100 && engineCC <= 1200) {
            predictedFuel = '100 Octane';
        } else if (engineCC > 1200 && engineCC <= 1300) {
            predictedFuel = '100 Octane';
        } else {
            predictedFuel = 'Unknown';
        }
    } else if (vehicleCategory === 'car') {
        if (engineCC >= 800 && engineCC <= 1200) {
            predictedFuel = '87 Octane';
        } else if (engineCC > 1200 && engineCC <= 1500) {
            predictedFuel = '89 Octane';
        } else if (engineCC > 1500 && engineCC <= 1800) {
            predictedFuel = '91 Octane';
        } else if (engineCC > 1800 && engineCC <= 2200) {
            predictedFuel = '95 Octane';
        } else if (engineCC > 2200 && engineCC <= 2500) {
            predictedFuel = '98 Octane';
        } else if (engineCC > 2500 && engineCC <= 3000) {
            predictedFuel = '100 Octane';
        } else {
            predictedFuel = 'Unknown';
        }
    } else {
        predictedFuel = 'Please select a vehicle type and enter valid engine CC';
    }

    if (!vehicleType || isNaN(engineCC)) {
        predictedFuel = 'Please enter all details correctly';
    }

    console.log("Predicted Fuel:", predictedFuel);
    resultDiv.textContent = `Predicted Fuel Type: ${predictedFuel}`;
}
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}
window.onload = function () {
    const isLoggedIn = true;
    conso
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}