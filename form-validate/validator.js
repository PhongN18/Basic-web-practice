var fNameElement = document.querySelector('#firstName')
var lNameElement = document.querySelector('#lastName')
var dobElement = document.querySelector('#dob')
var emailElement = document.querySelector('#email')
var userElement = document.querySelector('#username')
var passwordElement = document.querySelector('#password')
var genderElement = document.querySelector('#gender')

function isRequired(element) {
    if (element.value.trim() == "") {
        element.classList.add("error-input");
        element.parentElement.querySelector(".form-message").innerText = "Please fill in this field."
        return false
    } else {
        element.classList.remove("error-input")
        element.parentElement.querySelector(".form-message").innerText = ""
        return true
    }
}

function isEmail(element) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(element.value)) {
        element.classList.add("error-input");
        element.parentElement.querySelector(".form-message").innerText = "Please enter a valid email."
        return false
    } else {
        element.classList.remove("error-input");
        element.parentElement.querySelector(".form-message").innerText = ""
        return true
    }

}

function checkDOB(element) {

    if (!isRequired(element)) {
        return false
    }

    var now = new Date()
    var inputDate = new Date(element.value)
    if (inputDate >= now) {
        element.classList.add("error-input");
        element.parentElement.querySelector(".form-message").innerText = "Please enter a valid date."
        return false 
    } else {
        element.classList.remove("error-input");
        element.parentElement.querySelector(".form-message").innerText = ""
    }

    const validAge = 18
    var age = now.getFullYear() - inputDate.getFullYear()
    if (now.getMonth() < inputDate.getMonth() || now.getMonth() === inputDate.getMonth() && now.getDate() < inputDate.getDate()) {
        age -= 1;
    }

    if (age < validAge) {
        element.classList.add("error-input");
        element.parentElement.querySelector(".form-message").innerText = "You are under 18."
        return false
    } else {
        element.classList.remove("error-input");
        element.parentElement.querySelector(".form-message").innerText = ""
    }
    
    return true
}

function togglePassword() {
    if (passwordElement.type === 'text') {
        passwordElement.type = 'password'
    } else {
        passwordElement.type = 'text'
    }

}

function displayPasswordCd() {
    document.querySelector('#password-msg').classList.remove('hide-msg')
}

let firstTime = false

function checkOnBlur(element) {
    var icons = document.querySelectorAll('#password-msg i')
    checkPassword(element)
    element.parentElement.querySelector('#password-msg ul').style.listStyleType = 'none'
    element.parentElement.querySelector('#password-msg ul').style.paddingLeft = '10px'
    icons.forEach(function (icon) {
        icon.classList.add('fa-solid')
    })
    firstTime = true
    if (checkPassword(element)) {
        document.querySelector('#password-msg').classList.add('hide-msg')
    }
}

function checkOnInput(element) {
    if (firstTime) {
        checkPassword(element)
    }
}

function checkPassword(element) {

    const minLength = 8;
    const hasLower = /[a-z]/.test(element.value);
    const hasUpper = /[A-Z]/.test(element.value);
    const hasDigit = /\d/.test(element.value);
    const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(element.value);

    if (element.value.length < minLength) {
        element.parentElement.querySelector('#pw-cd1').classList.add('error-msg')
        element.parentElement.querySelector('#pw-cd1').classList.remove('valid-msg')
        element.parentElement.querySelector('#pw-cd1 i').classList.add('fa-xmark')
        element.parentElement.querySelector('#pw-cd1 i').classList.remove('fa-check')
    } else {
        element.parentElement.querySelector('#pw-cd1').classList.remove('error-msg')
        element.parentElement.querySelector('#pw-cd1').classList.add('valid-msg')
        element.parentElement.querySelector('#pw-cd1 i').classList.remove('fa-xmark')
        element.parentElement.querySelector('#pw-cd1 i').classList.add('fa-check')

    }

    if (!hasLower) {
        element.parentElement.querySelector('#pw-cd2').classList.add('error-msg')
        element.parentElement.querySelector('#pw-cd2').classList.remove('valid-msg')
        element.parentElement.querySelector('#pw-cd2 i').classList.add('fa-xmark')
        element.parentElement.querySelector('#pw-cd2 i').classList.remove('fa-check')
    } else {
        element.parentElement.querySelector('#pw-cd2').classList.remove('error-msg')
        element.parentElement.querySelector('#pw-cd2').classList.add('valid-msg')
        element.parentElement.querySelector('#pw-cd2 i').classList.remove('fa-xmark')
        element.parentElement.querySelector('#pw-cd2 i').classList.add('fa-check')
    }

    if (!hasUpper) {
        element.parentElement.querySelector('#pw-cd3').classList.add('error-msg')
        element.parentElement.querySelector('#pw-cd3').classList.remove('valid-msg')
        element.parentElement.querySelector('#pw-cd3 i').classList.add('fa-xmark')
        element.parentElement.querySelector('#pw-cd3 i').classList.remove('fa-check')
    } else {
        element.parentElement.querySelector('#pw-cd3').classList.remove('error-msg')
        element.parentElement.querySelector('#pw-cd3').classList.add('valid-msg')
        element.parentElement.querySelector('#pw-cd3 i').classList.remove('fa-xmark')
        element.parentElement.querySelector('#pw-cd3 i').classList.add('fa-check')
    }

    if (!hasDigit) {
        element.parentElement.querySelector('#pw-cd4').classList.add('error-msg')
        element.parentElement.querySelector('#pw-cd4').classList.remove('valid-msg')
        element.parentElement.querySelector('#pw-cd4 i').classList.add('fa-xmark')
        element.parentElement.querySelector('#pw-cd4 i').classList.remove('fa-check')
    } else {
        element.parentElement.querySelector('#pw-cd4').classList.remove('error-msg')
        element.parentElement.querySelector('#pw-cd4').classList.add('valid-msg')
        element.parentElement.querySelector('#pw-cd4 i').classList.remove('fa-xmark')
        element.parentElement.querySelector('#pw-cd4 i').classList.add('fa-check')
    }

    if (!hasSpecial) {
        element.parentElement.querySelector('#pw-cd5').classList.add('error-msg')
        element.parentElement.querySelector('#pw-cd5').classList.remove('valid-msg')
        element.parentElement.querySelector('#pw-cd5 i').classList.add('fa-xmark')
        element.parentElement.querySelector('#pw-cd5 i').classList.remove('fa-check')
    } else {
        element.parentElement.querySelector('#pw-cd5').classList.remove('error-msg')
        element.parentElement.querySelector('#pw-cd5').classList.add('valid-msg')
        element.parentElement.querySelector('#pw-cd5 i').classList.remove('fa-xmark')
        element.parentElement.querySelector('#pw-cd5 i').classList.add('fa-check')
    }

    if (element.value.trim() === '') {
        document.querySelector('#password-msg').classList.remove('hide-msg')
        document.querySelector('#password-msg').classList.add('error-msg')
        return false
    } else {
        document.querySelector('#password-msg').classList.remove('error-msg')
    }

    return (element.value.length >= minLength) && hasLower && hasUpper && hasDigit && hasSpecial

}

function isChecked(element) {
    var radios = element.querySelectorAll('.gender-input')
    var checked = false
    for (const radio of radios) {
        if (radio.checked) {
            checked = true
        }
    }
    if (!checked) {
        element.parentElement.querySelector('.form-message').innerText = 'Please select your gender.'
    } else {
        element.parentElement.querySelector('.form-message').innerText = '' 
    }
    return checked
}

function validateForm(event) {
    event.preventDefault()
    var form = document.getElementById('form-1')

    if (isRequired(fNameElement) && isRequired(lNameElement) && checkDOB(dobElement) && isEmail(emailElement) && isRequired(userElement) && checkPassword(passwordElement) && isChecked(genderElement)) {
        alert('Form submitted successfully!')
        form.submit()
    } else {
        console.log('Failed to submit.')
    }
}

