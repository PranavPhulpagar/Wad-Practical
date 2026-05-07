let patientCount = 0;

document.getElementById("patientForm").addEventListener("submit", function(e) {

    e.preventDefault();

    // Increase count
    patientCount++;

    // Display updated count
    document.getElementById("patientCount").innerText = patientCount;

    // Success message
    alert("Patient Registered Successfully!");

    // Reset form
    document.getElementById("patientForm").reset();

});