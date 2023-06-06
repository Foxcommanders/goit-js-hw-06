const formLog = document.querySelector('.login-form');

formLog.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === '') {
    alert(`Ошибка! Поле ${email.name} не заполнено!`);
  } else if (password.value === '') {
    alert(`Ошибка! Поле ${password.name}  не заполнено!`);
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    formLog.reset();
  }
}
