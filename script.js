function sendMail(event) {
  event.preventDefault(); // stop form from submitting and refreshing the page

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_7tyjlqf", "template_4lucuzo", parms)
    .then(function (response) {
      alert("Your email has been received!!");
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("feedback-form").reset(); // clear the form after sending
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    });
}
