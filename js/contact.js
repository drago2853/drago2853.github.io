const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");


  const data = { 
    email: emailInput.value, 
    message: messageInput.value,
    _subject: subjectInput.value,
    
   };

  fetch("https://formsubmit.co/dragomazic123@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Error in sending a email.");
    }
    return response.json();
  })
  .then(data => {
    console.log("Email server response:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  form.reset();
});
