document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const liveInUS = document.getElementById("liveInUS");
    const zipcodeContainer = document.getElementById("zipcodeContainer");
    const successMessage = document.getElementById("successMessage");

    liveInUS.addEventListener("change", function () {
        if (liveInUS.checked) {
            zipcodeContainer.classList.remove("hidden");
        } else {
            zipcodeContainer.classList.add("hidden");
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        // Name Validation
        const name = document.getElementById("name").value.trim();
        const nameError = document.getElementById("nameError");
        if (name.length < 3) {
            nameError.textContent = "Name must be at least 3 characters.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Year of Birth Validation
        const birthYear = parseInt(document.getElementById("birthYear").value, 10);
        const currentYear = new Date().getFullYear();
        const birthYearError = document.getElementById("birthYearError");
        if (isNaN(birthYear) || birthYear <= 1900 || birthYear >= currentYear) {
            birthYearError.textContent = "Enter a valid birth year.";
            isValid = false;
        } else {
            birthYearError.textContent = "";
        }

        // Zipcode Validation (if applicable)
        const zipcode = document.getElementById("zipcode").value.trim();
        const zipcodeError = document.getElementById("zipcodeError");
        if (liveInUS.checked) {
            if (!/^\d{5}$/.test(zipcode)) {
                zipcodeError.textContent = "Zipcode must be 5 digits.";
                isValid = false;
            } else {
                zipcodeError.textContent = "";
            }
        }

        // Password Validation
        const password = document.getElementById("password").value;
        const passwordError = document.getElementById("passwordError");
        if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        // Pizza Preference Validation
        const pizzaType = document.querySelector('input[name="pizzaType"]:checked');
        const pizzaTypeError = document.getElementById("pizzaTypeError");
        if (!pizzaType) {
            pizzaTypeError.textContent = "Please select a pizza preference.";
            isValid = false;
        } else {
            pizzaTypeError.textContent = "";
        }

        // If all validations pass
        if (isValid) {
            successMessage.classList.remove("hidden");
            form.reset();
            zipcodeContainer.classList.add("hidden");
        } else {
            successMessage.classList.add("hidden");
        }
    });
});
