function loadModal(modalFile, modalClass) {
    fetch(modalFile)
        .then(response => response.text())
        .then(data => {
            // Remove any existing modal to avoid duplicates
            const existingModal = document.querySelector(modalClass);
            if (existingModal) {
                existingModal.remove();
            }

            // Inject the modal content into the document
            document.body.insertAdjacentHTML('beforeend', data);

            // Add event listeners to close the modal
            document.querySelector(`${modalClass} .close-btn`).addEventListener("click", function () {
                document.querySelector(modalClass).classList.remove("active");
                document.querySelector(modalClass).remove(); // Remove modal from DOM
            });

            // Add event listeners for inter-modal navigation
            if (modalClass === ".popup-login") {
                document.querySelector("#show-register").addEventListener("click", function () {
                    loadModal("register-modal.html", ".popup-register");
                });
            } else if (modalClass === ".popup-register") {
                document.querySelector("#show-login").addEventListener("click", function () {
                    loadModal("login-modal.html", ".popup-login");
                });
            }

            // Show the modal
            document.querySelector(modalClass).classList.add("active");
        })
        .catch(error => console.error('Error loading modal:', error));
}

// Add event listeners for buttons in the main file
document.querySelector("#show-login").addEventListener("click", function () {
    loadModal("login-modal.html", ".popup-login");
});

document.querySelector("#show-register").addEventListener("click", function () {
    loadModal("register-modal.html", ".popup-register");
});
