
// Function to open a modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close a modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
}

// Handle login form submission
document.querySelector("#loginModal form").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Basic validation (for demonstration; not secure for production use)
    if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
        closeModal('loginModal');
    } else {
        alert("Invalid email or password.");
    }
};

// Optional: Handle signup form submission similarly if needed


