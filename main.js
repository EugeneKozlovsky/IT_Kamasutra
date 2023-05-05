
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    console.log(bmi)
    console.log(bmi <= 25);
    switch (true) {
        case (bmi <= 18.0): return 'Underweight';
            break;
        case (bmi <= 25.0): return 'Normal';
            break;
        case (bmi <= 30.0): return 'Overweight';
            break;
        default: return 'Obese';
            break;
    } 
    /*
    return (bmi <= 18) ? 'Underweight' :
    (bmi <= 25.0) ? 'Normal' :
    (bmi <= 30.0) ? 'Overweight' :
    'Obese';
    */
}






