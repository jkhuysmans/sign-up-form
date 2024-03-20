document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll("input");
    var buttonFocus = document.getElementById("submit");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", function() {
            if (this.value.trim() !== "") {
                this.classList.add("interacted");
            } else {
                this.classList.remove("interacted");
            }
        });
    }

    const matchingPasswords = document.getElementById("matching-passwords")

    function comparePasswords() {
        console.log("checking passwords")
        var password1 = document.getElementById("password").value
        var password2 = document.getElementById("password-confirm").value

        if (password1 !== password2) {
            matchingPasswords.textContent = "*Passwords do not match";
        } else {
            matchingPasswords.textContent = "";
        }
    }

    document.getElementById("password").addEventListener("keyboard", comparePasswords())
    document.getElementById("password-confirm").addEventListener("keyboard", comparePasswords())
})
