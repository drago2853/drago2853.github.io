const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const url = "https://formsubmit.co/ajax/41f5ff85409c07e0e1595325ca3d87ace9cf2be3f5c910168f1c43cdde0f657b";

  const data = {
    Email: emailInput.value, 
    Message: messageInput.value,
    Name: nameInput.value,
    Subject: subjectInput.value,
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Email sent successfully');
  })
  .catch(error => {
    console.error('There was a problem sending the email:', error);
  });

  form.reset();
});
