document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const successMessage = document.getElementById("success-message");

    // Simulate form submission (Replace with your actual Google Sheets submission logic)
    try {
      // Simulate a network request delay (remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      // Show success message
      successMessage.classList.remove("hidden");

      // Clear form fields
      form.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 3000);
    } catch (error) {
      console.error("Form submission failed", error);
    }
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzaw2CKl-1FnLVAX61bvcCEBG8_IGpWih8Bcb46UFECXDNfsOVD_G9vJLoh-vIWgSnJxw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })