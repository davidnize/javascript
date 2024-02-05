function bmiCalculator(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    var bmi = weight / (height * height);

    // Round BMI to the nearest whole number
    bmi = Math.round(bmi);

    return bmi;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi); 
