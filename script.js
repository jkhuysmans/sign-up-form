document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", function() {
            if (this.value.trim() !== "") {
                this.classList.add("interacted");
            } else {
                this.classList.remove("interacted");
            }
        });
    }

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("password-confirm");
    const matchingPasswords = document.getElementById("matching-passwords");

    function comparePasswords() {
        console.log("checking passwords");
        var password1 = passwordInput.value;
        var password2 = confirmPasswordInput.value;

        if (password1 !== password2 && password1 !== "" && password2 !== "") {
            matchingPasswords.textContent = "*Passwords do not match";
            passwordInput.setCustomValidity("Passwords do not match.")
            confirmPasswordInput.setCustomValidity("Passwords do not match.")
        } else {
            matchingPasswords.textContent = "";
            passwordInput.setCustomValidity("")
            confirmPasswordInput.setCustomValidity("")
        }
    }

    document.getElementById("password").addEventListener("input", comparePasswords);
    document.getElementById("password-confirm").addEventListener("input", comparePasswords);
});
