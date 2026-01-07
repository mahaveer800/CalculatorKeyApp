const input = document.querySelector('.inputBox');
const buttons = document.querySelectorAll('button');

let str = '';

// --------------------
// Button Click Support
// --------------------
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleInput(button.innerText);
  });
});

// --------------------
// Keyboard Support
// --------------------
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || '+-*/.'.includes(key)) {
    handleInput(key);
  } else if (key === 'Enter') {
    handleInput('=');
  } else if (key === 'Backspace') {
    handleInput('DEL');
  } else if (key === 'Escape') {
    handleInput('AC');
  }
});

// --------------------
// Common Logic Function
// --------------------
function handleInput(value) {
  if (value === 'AC') {
    str = '';
  } else if (value === 'DEL') {
    str = str.slice(0, -1);
  } else if (value === '=') {
    try {
      str = eval(str);
    } catch {
      str = 'Error';
    }
  } else {
    str += value;
  }

  input.value = str;
}


// buttons.addEventListener('click',(e)=>{
//    input.innerText=e.target.value
// })