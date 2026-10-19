// Registration, Login, and Page Navigation

function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
    alert("Registration successful!");
    window.location.href = 'login.html';
    return false;
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (email === registeredEmail && password === registeredPassword) {
        alert("Login successful!");
        window.location.href = 'vehicle-category.html';
    } else {
        alert("Invalid email or password!");
    }
    return false;
}

function confirmSelection() {
    const category = localStorage.getItem("vehicleCategory");
    const model = category === "bike" ? document.getElementById("bikeModels").value : document.getElementById("carModels").value;
    if (model) {
        localStorage.setItem("selectedModel", model);
        window.location.href = "years.html";
    }
}

function confirmYear() {
    const year = document.getElementById("manufacturedYear").value;
    if (year) {
        localStorage.setItem("selectedYear", year);
        window.location.href = "predictor.html";
    } else {
        alert("Please select a year.");
    }
}

function confirmCC() {
    const engineCC = document.getElementById("engineCC").value;
    if (engineCC) {
        const fuelType = predictFuel(engineCC);
        document.getElementById("predictionResult").textContent = "Predicted Fuel Type: " + fuelType;
    } else {
        alert("Please enter the engine CC.");
    }
}

function predictFuel(engineCC) {
    const category = localStorage.getItem("vehicleCategory");
    engineCC = parseInt(engineCC);

    if (category === "bike") {
        if (engineCC <= 125) return "Petrol";
        else if (engineCC > 125 && engineCC <= 250) return "Petrol or E10";
        else return "Petrol (High Octane)";
    } else if (category === "car") {
        if (engineCC <= 1000) return "Petrol";
        else if (engineCC > 1000 && engineCC <= 2000) return "Diesel or Petrol";
        else return "Diesel";
    }
    return "Unknown fuel type";
}
