document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
  
        if (name === "" || email === "") {
          alert("Please fill in all required fields.");
          return;
        }
  
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        alert("Thank you for reaching out! We will get back to you soon.");
        form.reset();
      });
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  