document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    // Get values
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Create object
    let user = {
        firstName: fname,
        lastName: lname,
        dob: dob,
        gender: gender,
        mobile: mobile,
        email: email
    };

    // Get existing data
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new data
    users.push(user);

    // Store again
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    // Redirect to data page
    window.location.href = "data.html";
});