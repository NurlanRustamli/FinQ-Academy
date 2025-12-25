document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm")
  const successMessage = document.getElementById("successMessage")

  registrationForm.addEventListener("submit", (e) => {
    // Formspree will handle the form submission
    // Show success message after submission
    setTimeout(() => {
      successMessage.classList.remove("hidden")
      registrationForm.classList.add("hidden")

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth" })
    }, 1000)
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
})
