const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const registerFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-register').value.trim();
  const lastName = document.querySelector('#lastName-register').value.trim();
  const gamerHandle = document.querySelector('#handle-register').value.trim();
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();
  const confPassword = document
    .querySelector('#confPassword-register')
    .value.trim();

  // TODO : Validate password and confirmation match.  If not, alert user to correct.
  // TODO : Validate that all fields were filled out.  If not, alert user to correct.

  if (
    firstName &&
    lastName &&
    gamerHandle &&
    email &&
    password &&
    password === confPassword
  ) {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        gamerHandle,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      // TODO : Get rid of this alert();  Use modal instead.
      alert('Failed to register');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);
