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
  for(let i = 0; i<newStack.MAX_SIZE; i++){   
    stackList.innerHTML += newStack.stackControl[i] != null ? (`<li class="active">${newStack.stackControl[i]}</li>`) : ('<li class="inactive">&nbsp;</li>')

  }
};

renderListStack();


const generateWarningStack = (type) => {
  if (type === 'STACK_UNDERFLOW') {
    warningBottomStack.style = 'display: block'
    warningBottomStack.textContent = 'Underflow'
  } else if (type === 'STACK_OVERFLOW') {
    warningTopStack.style = 'display: block'
    warningTopStack.textContent = 'overflow'
  } 
};

const addToStack = () => {
  try {
    newStack.push( stackInput.value )
    stackList.innerHTML = ''
    renderListStack()    
    clearStackInput()
    warningBottomStack.style = 'display: none'
  } catch (err) {
    generateWarningStack(err.toUpperCase())
  }
};

const removeFromStack = () => {
  try {
    newStack.pop()
    stackList.innerHTML = ''
    renderListStack()
    warningTopStack.style = 'display: none'
  } catch (err) {
    generateWarningStack(err.toUpperCase())
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
