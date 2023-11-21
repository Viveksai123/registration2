document.addEventListener("DOMContentLoaded", function () {
    // Assuming your date input has the id "dob"
    var dobInput = document.getElementById("dob");

    dobInput.addEventListener("change", function () {
        var dob = new Date(this.value);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();

        // Check if the user is between 18 and 55 years old
        if (age < 18 || age > 55) {
            alert("Please enter a valid date of birth between the ages of 18 and 55.");
            this.value = ""; // Clear the input field
        }
    });

    var registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        // Add your form submission logic here
        event.preventDefault(); // Prevent the form from submitting for this example
        alert("Form submitted!");
    });
});
