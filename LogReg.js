// Select elements
const loginPopup = document.getElementById("login-popup");
const registerPopup = document.getElementById("register-popup");
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Show Log In popup
document.getElementById("show-login").addEventListener("click", function () {
    loginPopup.classList.add("active");
    overlay.style.display = "block"; // Show overlay
});

// Show Register popup
document.getElementById("show-register").addEventListener("click", function () {
    registerPopup.classList.add("active");
    overlay.style.display = "block"; // Show overlay
});

// Close buttons
document.querySelectorAll(".popup .close-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        loginPopup.classList.remove("active");
        registerPopup.classList.remove("active");
        overlay.style.display = "none"; // Hide overlay
    });
});

// Close popups when clicking outside
overlay.addEventListener("click", function () {
    loginPopup.classList.remove("active");
    registerPopup.classList.remove("active");
    overlay.style.display = "none"; // Hide overlay
});
