

document.addEventListener("DOMContentLoaded", function () {
    const cookieBox = document.getElementById("cookie-box");
    const acceptBtn = document.getElementById("accept-cookies");


    if (!cookieBox || !acceptBtn) return; // sikkerhedscheck
    

    // Tjek om der allerede er accepteret cookies
    const accepted = localStorage.getItem("cookiesAccepted");


    if (!accepted) {
        cookieBox.style.display = "block"; // Vis boksen
    }
    

    // Når brugeren klikker "Accepter"
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", true); // Gem valg
        cookieBox.style.display = "none"; // Skjul boksen
    });
});

