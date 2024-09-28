const currentTime = new Date();

const hour = currentTime.getHours();

const text = document.getElementById('text');
if (hour >= 6 && hour <= 12) {
    text.innerText = 'Good morning!';
} else if (hour >= 12 && hour <= 18) {
    text.innerText = 'Good afternoon!';
} else {
    text.innerText = 'Good evening!';
}

const genderRadios = document.getElementsByClassName('gender');
function getSelectedGender() {
    for (const radio of genderRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
}

const courseSelect = document.getElementById('courses');
function getSelectedCourse() {
    const selectedIndex = courseSelect.selectedIndex;
    if (courseSelect.selectedIndex !== -1) {
        return courseSelect.options[selectedIndex].value;
    }
}

function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;
    console.log(emailPattern.test(email));
}

function checkPassword(pw) {
    const minLength = 8;
    const hasLower = /[a-z]/.test(pw);
    const hasUpper = /[A-Z]/.test(pw);
    const hasDigit = /\d/.test(pw);
    const hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pw);

    console.log(hasLower && hasUpper && hasDigit && hasSpecial && (pw.length >= minLength));
}

function displayInfo(value) {

    checkEmail(document.getElementById('email').value);
    checkPassword(document.getElementById('password').value);

    const fname = "First Name: " + document.getElementById('fname').value;
    const lname = "Last Name: " + document.getElementById('lname').value;
    const email = "Email: " + document.getElementById('email').value;
    const dob = "Date of Birth: " + document.getElementById('dob').value;
    const username = "Username: " + document.getElementById('username').value;
    const password = "Password: " + document.getElementById('password').value;
    const gender = "Gender: " + getSelectedGender();
    const course = "Course: " + getSelectedCourse();

    const infoToDisplay = `
        ${fname}<br>
        ${lname}<br>
        ${email}<br>
        ${dob}<br>
        ${username}<br>
        ${password}<br>
        ${gender}<br>
        ${course}
    `;

    var display = document.getElementById('display');

    if (!value) {
        const myWindow = window.open();
        myWindow.document.write(infoToDisplay);
    } else {
        display.innerHTML = infoToDisplay
        display.classList.add('p-4', 'mb-5', 'border', 'border-primary')
    }
}
