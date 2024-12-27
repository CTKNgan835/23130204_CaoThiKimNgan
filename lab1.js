
    function togglePassword() {
        const passwordField = document.getElementById("password");
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;
    }

    document.getElementById('profilePicture').onchange = function (event) {
        const preview = document.getElementById('preview');
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            preview.style.display = 'block';
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
            preview.style.display = 'none';
        }
    };

    function cancel() {
        window.history.back();
    }

    function createAccount(event) {
        event.preventDefault();
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        return false; 
    }
