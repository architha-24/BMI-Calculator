document.getElementById('calculate').addEventListener('click', function () {
    let weight = parseFloat(document.getElementById('weight').value);
    let weightUnit = document.getElementById('weightUnit').value;
    let height = parseFloat(document.getElementById('height').value);
    let heightUnit = document.getElementById('heightUnit').value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    if (weightUnit === "pounds") {
        weight = weight * 0.453592;
    }

    if (heightUnit === "cm") {
        height = height / 100;
    } else if (heightUnit === "inches") {
        height = height * 0.0254;
    } else if (heightUnit === "feet") {
        height = height * 0.3048;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 40) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} kg/m² (${category})`;
});
document.getElementById('cancel').addEventListener('click', function () {
    document.getElementById('weight').value = "";
    document.getElementById('weightUnit').selectedIndex = 0;

    document.getElementById('height').value = "";
    document.getElementById('heightUnit').selectedIndex = 0;

    document.getElementById('result').textContent = "";
});
