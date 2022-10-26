(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {

                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const terms = document.getElementById("terms");
const termsCheckbox = document.getElementById("termsCheckbox");
const termsError = document.getElementById("termsError");
const registerForm = document.getElementById("registerForm");


password2.onkeyup = function () {
    if (password1.value == password2.value) {
        password2.setCustomValidity("");
    } else {
        password2.setCustomValidity("Las contraseñas no coinciden");
    }

}
password1.onkeyup = function () {
    if (password1.value == password2.value) {
        password2.setCustomValidity("");
    } else {
        password2.setCustomValidity("Las contraseñas no coinciden");
    }

}



function termsValidation() {
    if (!termsCheckbox.checked) {
        termsError.style.display = "block";
        terms.style.color = "red";
    } else {
        terms.style.color = "";
        termsError.style.display = "none";
    }
}


function formSubmit() {
    termsValidation();
    if (registerForm.checkValidity() == true) {
        document.getElementById("main").innerHTML += `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"></use></svg>
    Se ha registrado con exito! 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    }
}
