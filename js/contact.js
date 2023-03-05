const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const url = "https://formsubmit.co/dragomazic123@gmail.com";

  const data = {
    email: emailInput.value, 
    message: messageInput.value,
    _subject: subjectInput.value,
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
