function bookTicket() {
    let seats = document.getElementById("seats").value;
    let total = seats * 250;

    document.getElementById("result").innerHTML =
        `✅ ${seats} ticket(s) booked successfully! <br>Total Amount: ₹${total}
         Timing: 7:00 PM, 10:00 PM`;
}