function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    let dob = new Date(birthdate);
    if (!isValidDate(dob)) {
        document.getElementById('result').innerText = "Invalid Date!";
        return;
    }

    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}
