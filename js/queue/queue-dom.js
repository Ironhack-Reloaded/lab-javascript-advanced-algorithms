const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {
  for(let i = 0; i<queue.MAX_SIZE; i++){   
    queueUL.innerHTML += queue.queueControl[i] != null ? (`<li class="active">${queue.queueControl[i]}</li>`) : ('<li class="inactive">&nbsp;</li>')

  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'QUEUE_UNDERFLOW') {
    warningBottomQueue.style = 'display: block'
    warningBottomQueue.textContent = 'Underflow'
  } else if (type === 'QUEUE_OVERFLOW') {
    warningTopQueue.style = 'display: block'
    warningTopQueue.textContent = 'Overflow'
  }
};

const addToQueue = () => {
  try {
    queue.enqueue( queueInput.value )
    queueUL.innerHTML = ''
    generateListQueue()    
    clearQueueInput()
    warningBottomQueue.style = 'display: none'

  } catch (err) {
    console.log(err.toUpperCase());
    generateWarningQueue(err.toUpperCase())
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue()
    queueUL.innerHTML = ''
    generateListQueue()
    warningTopQueue.style = 'display: none'
  } catch (err) {
    generateWarningQueue(err.toUpperCase())
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
