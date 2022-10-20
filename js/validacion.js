(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            if (form == password1)
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()    

var form = document.getElementById('.needs-validation');
form.addEventListener("submit", function (event) {
    if (password1.value != password2.value) {
        alert("Password mismatch");
        event.preventDefault();
        event.stopPropagation();
    }
    else if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add("was-validated");
}, false);






const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")




function checkPassword(){

    if (password1.value != password2.value && password1.value.length < 6 ){
        password1.classList.remove("form-control:invalid")
    
    } else{
    }

}