
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

  // Function to validate address
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }

  ///Function to validate name
  function validateName(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
     } 
}

  // function validateMessage(message) {
  //   const messageRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/
  //   return messageRegex.test(message)
  // }


  