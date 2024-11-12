const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function handleBooking(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const checkinDate = document.getElementById("checkin").value;
    const checkoutDate = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("roomType").value;

    // Simple validation
    if (new Date(checkinDate) >= new Date(checkoutDate)) {
        alert("Check-out date must be after the check-in date.");
        return;
    }

    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = `
        <h3>Booking Confirmation</h3>
        <p>Thank you for booking with us!</p>
        <p><strong>Check-in:</strong> ${checkinDate}</p>
        <p><strong>Check-out:</strong> ${checkoutDate}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>
    `;

    // Optionally, reset the form
    document.getElementById("bookingForm").reset();
};

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

