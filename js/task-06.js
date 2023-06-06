const inputVal = document.querySelector('#validation-input');

inputVal.addEventListener('blur', () => {
  const dataLength = inputVal.getAttribute('data-length');
  const inputLength = inputVal.value.length;

  if (inputLength === Number(dataLength)) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  } else {
    inputVal.classList.add('invalid');
    inputVal.classList.remove('valid');
  }
});
