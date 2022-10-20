(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                checkPassword()
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const termsModal = document.getElementById("modalTerminos")
const termsCheckbox = document.getElementById("termsCheckbox")
const termsError = document.getElementById("termsError")



function checkPassword() {

    if (password1.value != password2.value && password1.value.length > 6) {
        password1.style.borderColor = "red"
        password1.style.backgroundImage = "one"
        password2.style.backgroundImage = "none"
        password2.style.borderColor = "red"
    } else {
        password1.style.borderColor = "#198754"
        password2.style.borderColor = "#198754"
    }

}





function termsValidation() {
    if (!termsCheckbox.checked) {
        termsCheckbox.style.borderColor = "red"
        termsModal.style.borderColor = "red"
        termsError.style.display = "block"       
        termsError.style.color = "red"       
        return false
    } else {
        termsCheckbox.style.borderColor = "#198754"
        termsCheckbox.style.backgroundColor = "#198754"
        termsError.style.display = "none"
        return true
    }
}


function formSubmit() {
    if(termsValidation()){
        alert("ok")
    }
}
