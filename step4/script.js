function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("يرجى إدخال قيم صحيحة للوزن والطول.");
        return;
    }

    let bmi = weight / (height * height);
    console.log("BMI:", bmi); // لمراقبة القيمة في Console

 document.getElementById("result").innerText =" مؤشر كتلة الجسم (BMI):"+bmi.toFixed(2);
}