document.addEventListener("DOMContentLoaded", () => {
    var greeting_e = document.getElementById("greeting");
    var hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    greeting_e.textContent = greeting;
});