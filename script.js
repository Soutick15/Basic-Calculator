document.addEventListener('DOMContentLoaded', function() {
  let string = '';
  const inputField = document.querySelector('input');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const buttonValue = e.target.innerHTML;

      if (buttonValue === '=') {
        try {
          string = eval(string);
          inputField.value = string;
        } catch (error) {
          string = '';
          inputField.value = 'Error';
        }
      } else if (buttonValue === 'C') {
        string = '';
        inputField.value = string;
      } else {
        string += buttonValue;
        inputField.value = string;
      }
    });
  });
});
