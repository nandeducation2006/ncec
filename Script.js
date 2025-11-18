// Mobile nav toggle and simple form handler (all text in English)
document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // Contact form demo handler
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      // Simple front-end validation
      if (!name || !phone) {
        formMessage.style.color = 'crimson';
        formMessage.textContent = 'Please provide your name and phone number.';
        return;
      }

      // Demo success (replace this with real server call)
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thank you! Your request has been received. We will call you soon.';
      form.reset();

      // Example: send data to server with fetch (uncomment and set endpoint)
      /*
      fetch('https://your-server.example/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message })
      }).then(r => r.json()).then(data => {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Request sent successfully.';
        form.reset();
      }).catch(err => {
        formMessage.style.color = 'crimson';
        formMessage.textContent = 'Submission failed. Please try again later.';
      });
      */
    });
  }
});