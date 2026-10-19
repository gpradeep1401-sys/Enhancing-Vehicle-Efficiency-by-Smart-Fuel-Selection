function predictFuel() {
    const vehicleType = document.getElementById('vehicleType').value;
    const engineCC = parseInt(document.getElementById('engineCC').value);
    const resultDiv = document.getElementById('result');

    let predictedFuel = '';

    if (vehicleType === 'bike') {
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
    } else if (vehicleType === 'car') {
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
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}
