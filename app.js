document.addEventListener("DOMContentLoaded", function () {
   var calculateButton = document.getElementById("calculate");
   var weightInput = document.getElementById("weight");
   var heightInput = document.getElementById("height");
   var ageInput = document.getElementById("age");
   var genderSelect = document.getElementById("gender"); // Add gender selection in HTML
   var bmrResult = document.getElementById("bmrResult");

   calculateButton.addEventListener("click", function () {
       var weight = parseFloat(weightInput.value);
       var height = parseFloat(heightInput.value);
       var age = parseInt(ageInput.value);
       var gender = genderSelect.value; // Get the selected gender (e.g., "male" or "female")

       if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
           // Calculate BMR based on gender
           var bmr = (gender === "male") ?
               calculateMaleBMR(weight, height, age) :
               calculateFemaleBMR(weight, height, age);

           bmrResult.textContent = bmr.toFixed(2);
       } else {
           alert("Please enter valid numeric values for weight, height, and age.");
       }
   });

   // Function to calculate BMR for males using the formula you provided
   function calculateMaleBMR(weight, height, age) {
       var bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (4.676 * age);
       return bmr;
   }

   // Function to calculate BMR for females using the formula you provided
   function calculateFemaleBMR(weight, height, age) {
       var bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
       return bmr;
   }
});
