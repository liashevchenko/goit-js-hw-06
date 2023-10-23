
const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Всі поля повинні бути заповнені');
    } else {
      const userData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(userData);

      form.reset();
    }
  });
