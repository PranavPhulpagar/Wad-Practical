document.getElementById("bookingForm")

.addEventListener("submit", function(e){

    e.preventDefault();

    // Get ticket count
    let tickets =
    document.getElementById("tickets").value;

    // Price per ticket
    let price = 250;

    // Total amount
    let total = tickets * price;

    // Display Result
    document.getElementById("result").innerHTML =

    `
    ✅ ${tickets} Ticket(s) Booked Successfully <br>
    🎟 Total Amount : ₹${total}
    `;

});