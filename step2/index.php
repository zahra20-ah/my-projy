<?php
 $result = "";
 if($_SERVER['REQUEST_METHOD'] == 'POST') {
 $name = htmlspecialchars($_POST['name']);
 $weight = floatval($_POST['weight']);
 $height = floatval($_POST['height']);
 if($weight > 0 && $height > 0) {
 $bmi = $weight / ($height * $height);
 if($bmi < 18.5) {
 $interpretation = "Underweight";
 } elseif($bmi < 25) {
 $interpretation = "Normal weight";
 } elseif($bmi < 30) {
 $interpretation = "Overweight";
 } else {
 $interpretation = "Obesity";
 }
 $result = "Hello, $name. Your BMI is " . number_format($bmi,2) . " (
$interpretation).";
 } else {
 $result = "Invalid input values.";
 }
 }
 ?>