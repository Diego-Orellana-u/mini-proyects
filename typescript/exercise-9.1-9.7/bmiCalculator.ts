function calculateBmi(height: number, weight: number): string {
  let square = (height / 100) ** 2;
  let bmi = weight / square;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Over weight";
  } else {
    return "Obese";
  }
}

console.log(calculateBmi(180, 74));
