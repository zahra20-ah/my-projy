$(document).ready(function(){
       $('#bmiForm').submit(function(e){
  e.preventDefault();
// Validate inputs using jQuery
 var name = $('#name').val().trim();
 var weight = parseFloat($('#weight').val());
 var height = parseFloat($('#height').val());
 if(name === "" || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
 $('#result').html('<div class="alert alert-warning">Please enter valid values inall fields.</div>');
 return;
 }
 // Send data via AJAX
 $.ajax({
 url: 'calculate.php',
 type: 'POST',
 data: { name: name, weight: weight, height: height },
 dataType: 'json',
 success: function(response) {
 if(response.success) {
 var alertClass = 'alert-info';
 if(response.bmi < 18.5) {
 alertClass = 'alert-warning';
 } else if(response.bmi < 25) {
 alertClass = 'alert-success';
 } else if(response.bmi < 30) {
 alertClass = 'alert-info';
 } else {
 alertClass = 'alert-danger';
}
 $('#result').html('<div class="alert ' + alertClass + '">' + response.message+'</div>');
 } else {
  $('#result').html('<div class="alert alert-danger">' + response.message +'</div>');
 }
 },
 error: function() {
 $('#result').html('<div class="alert alert-danger">Server error occurred.</div >');
 }
 });
 });
 });