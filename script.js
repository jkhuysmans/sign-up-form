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

    const matchingPasswords = document.getElementById("matching-passwords");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("password-confirm");

    function comparePasswords() {
        console.log("checking passwords");
        var password1 = passwordInput.value;
        var password2 = confirmPasswordInput.value;

        if (password1 !== password2 && password1 !== "" && password2 !== "") {
            matchingPasswords.textContent = "*Passwords do not match";
            passwordInput.style.outline = "1px solid var(--invalid-color)";
        } else {
            matchingPasswords.textContent = "";
        }
    }

    document.getElementById("password").addEventListener("input", comparePasswords);
    document.getElementById("password-confirm").addEventListener("input", comparePasswords);
});
