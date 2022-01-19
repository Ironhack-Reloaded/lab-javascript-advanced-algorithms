const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value=''
};

const renderListStack = () => {
  for(let i = 0; i<10; i++){    
    stackList.innerHTML += ('<li class="inactive">&nbsp;</li>')
  }
};

renderListStack();


const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.style = 'display: block'
    warningBottomStack.textContent = 'Underflow'
  } else if (type === 'overflow') {
    warningTopStack.style = 'display: block'
    warningTopStack.textContent = 'overflow'
  }
};

const addToStack = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
