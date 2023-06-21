// Set the target date for the countdown (e.g., 10 minutes from now)
const targetDate = new Date("2023-06-22T18:00:00");
targetDate.setHours(targetDate.getHours());

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time units
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // const miliseconds = Math.floor((distance % (100)))

    // Display the countdown
    document.getElementById("countdown").innerHTML = hours + "h:" + minutes + "m:" + seconds + "s";

    // Check if countdown has ended
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Registrations Closed";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
