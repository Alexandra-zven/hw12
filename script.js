function HelloName() {
    let temp = document.getElementById("inputName").value;
    if (!isNaN(Number(temp)) && temp) {
        document.getElementById("HelloResult").textContent = "Hello, " + temp;
    } else if (isNaN(Number(temp))) {
        alert("It is not a number, try again");
    } else {
        alert("Please, enter your number")
    }
    return;
}

function Compare() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass1 && pass2) {
        if (pass1 === pass2) {
            document.getElementById("ComparingResult").textContent = "Passwords are equal"
        } else {
            document.getElementById("ComparingResult").textContent = "Passwords are not equal"
        }
    } else if (pass1 == false) {
        alert("Please, enter the first password");
    } else if (pass2 == false) {
        alert("Please, enter the second password");
    }
    return;
}

function GenerateRandom() {
    let temp = Math.floor(Math.random() * 1000);
    document.getElementById("GenerateNumber").textContent = "Random number is: " + temp;
}