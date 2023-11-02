
 function handleSubmit (event) {
    event.preventDefault(); // Prevent form submission 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation checks
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
     alert("All fields are required.");
    }
     validateEmail(email);
     validateName(name);
     validateMessage(message);
  };

  // Function to validate an email address
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  function validateName(name) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  