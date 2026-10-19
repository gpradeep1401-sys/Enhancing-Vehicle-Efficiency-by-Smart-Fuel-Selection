document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const engineSize = document.getElementById('engineSize').value;
    const result = document.getElementById('result');

    let petrolType = '';

    if (engineSize < 100) {
        petrolType = 'Normal Petrol (87 Octane)';
    } else if (engineSize >= 100 && engineSize <= 1500) {
        petrolType = 'Regular Petrol (91-93 Octane)';
    } else if (engineSize > 1500 && engineSize <= 3000) {
        petrolType = 'Premium Petrol (95-98 Octane)';
    } else if (engineSize > 3000) {
        petrolType = 'Super Premium Petrol (99+ Octane)';
    } else {
        petrolType = 'Unknown Petrol Type';
    }

    result.textContent = `Recommended Petrol: ${petrolType}`;
});
