
form.getElementById("contact-us").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission 
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Simple validation checks
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
     return("All fields are required.");
    }
  });

  // Function to validate an email address
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
