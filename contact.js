// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const fields = {
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  const errors = {
    fullName: document.getElementById("fullNameError"),
    email: document.getElementById("emailError"),
    subject: document.getElementById("subjectError"),
    message: document.getElementById("messageError"),
  };

  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    Object.values(errors).forEach((err) => (err.textContent = ""));
    successMessage.style.display = "none";

 
    if (fields.fullName.value.trim() === "") {
      errors.fullName.textContent = "Full name is required.";
      isValid = false;
    }

    const emailValue = fields.email.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (emailValue === "") {
      errors.email.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      errors.email.textContent = "Please enter a valid email (name@example.com).";
      isValid = false;
    }


    if (fields.subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      isValid = false;
    }

  
    const messageValue = fields.message.value.trim();
    if (messageValue === "") {
      errors.message.textContent = "Message is required.";
      isValid = false;
    } else if (messageValue.length < 10) {
      errors.message.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "✅ Your message has been sent successfully!";
      successMessage.style.display = "block";
      form.reset();
    }
  });
});
