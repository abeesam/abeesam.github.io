document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    form.addEventListener("submit", function (event) {
        let valid = true;

        if (username.value.trim() === "") {
            showError(usernameError, "Username is required");
            valid = false;
        } else {
            hideError(usernameError);
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.value.trim() === "") {
            showError(emailError, "Email is required");
            valid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(emailError, "Invalid email format");
            valid = false;
        } else {
            hideError(emailError);
        }

        if (password.value.trim() === "") {
            showError(passwordError, "Password is required");
            valid = false;
        } else if (password.value.length < 8) {
            showError(passwordError, "Password must be at least 8 characters");
            valid = false;
        } else {
            hideError(passwordError);
        }

        if (confirmPassword.value.trim() === "") {
            showError(confirmPasswordError, "Please confirm your password");
            valid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPasswordError, "Passwords do not match");
            valid = false;
        } else {
            hideError(confirmPasswordError);
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Real-time validation on input blur
    username.addEventListener("blur", function () {
        if (username.value.trim() === "") {
            showError(usernameError, "Username is required");
        } else {
            hideError(usernameError);
        }
    });

    email.addEventListener("blur", function () {
        if (email.value.trim() === "") {
            showError(emailError, "Email is required");
        } else if (!emailPattern.test(email.value)) {
            showError(emailError, "Invalid email format");
        } else {
            hideError(emailError);
        }
    });

    password.addEventListener("blur", function () {
        if (password.value.trim() === "") {
            showError(passwordError, "Password is required");
        } else if (password.value.length < 8) {
            showError(passwordError, "Password must be at least 8 characters");
        } else {
            hideError(passwordError);
        }
    });

    confirmPassword.addEventListener("blur", function () {
        if (confirmPassword.value.trim() === "") {
            showError(confirmPasswordError, "Please confirm your password");
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPasswordError, "Passwords do not match");
        } else {
            hideError(confirmPasswordError);
        }
    });

    // Helper functions to show and hide error messages
    function showError(element, message) {
        element.innerHTML = message;
        element.style.display = "block";
        element.parentElement.classList.add("error");
    }

    function hideError(element) {
        element.innerHTML = "";
        element.style.display = "none";
        element.parentElement.classList.remove("error");
    }
});
