 // Function to calculate BMI
    function bmiCalculator(weight, height) {
        // BMI formula: weight (kg) / (height (m) * height (m))
        var bmi = weight / (height * height);

        // Round BMI to the nearest whole number
        bmi = Math.round(bmi);

        return bmi;
    }

    // Call the BMI calculator function
    var bmi = bmiCalculator(65, 1.8);

    // Log the BMI to the console
    console.log(bmi);
