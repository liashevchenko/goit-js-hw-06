
const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('Всі поля повинні бути заповнені');
      return
    } 

      const userData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(userData);

      event.target.reset();
    }
  );
