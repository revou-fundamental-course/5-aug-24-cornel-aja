function calculateBMI() {
    const weightError = document.getElementById('weightErrorMessage');
    const ageError = document.getElementById('ageErrorMessage');
    const heightError = document.getElementById('heightErrorMessage');
    const resultDescription = document.getElementById('result-description')
    const resultAdvice = document.getElementById('result-advice'); // ID elemen pesan


    // Kosongkan pesan kesalahan sebelumnya
    if (weightError) weightError.textContent = '';
    if (ageError) ageError.textContent = '';
    if (heightError) heightError.textContent = '';

    // Validasi Input
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;

    if (weight === "" || age === "" || height === "") {
        alert('Please fill in all fields.');
        return;
    }

    // Validasi Age
    if (age <= 0) {
        if (ageError) {
            ageError.textContent = 'Please enter a valid age greater than 0.';
        }
        return;
    }

    // Validasi Weight
    if (weight <= 0) {
        if (weightError) {
            weightError.textContent = 'Please enter a valid weight greater than 0.';
        }
        return;
    }

    // Validasi Height
    if (height <= 0) {
        if (heightError) {
            heightError.textContent = 'Please enter a valid height greater than 0.';
        }
        return;
    }

    // Menghitung BMI dengan rumus BMI = Weight / (Height/100)^2
    const bmi = weight / ((height / 100) ** 2);

    let description = '';
    if (bmi < 18.5) {
        description = 'Underweight';
        advice = 'You are in the underweight category. Please consider maintaining a balanced diet to reach a healthier weight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Normal/Ideal';
        advice = 'You are in the normal/ideal weight category. Keep up your healthy lifestyle and balanced diet!';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        description = 'Overweight';
        advice = 'You are in the overweight category. It is advisable to maintain a balanced diet and consult a healthcare provider for personalized advice.';
    } else {
        description = 'Obesity';
        advice = 'You are in the obesity category. It is important to seek advice from a healthcare provider to develop a plan for a healthier lifestyle.';
    }

    // Result
    document.getElementById('result-display').textContent = bmi.toFixed(2);
    resultDescription.textContent = description;
    resultAdvice.textContent = advice;

    // Reset
    document.getElementById('reset-btn').addEventListener('click', function() {
        document.getElementById('result-display').textContent = 'N/A';
        document.getElementById('result-description').textContent = '';
        document.getElementById('result-advice').textContent = '';
    });
}
