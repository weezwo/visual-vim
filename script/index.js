const keyboard = document.querySelector('#keyboard');

const firstRow = ['`', 'q','w','e','r','t','y','u','i','o','p','[',']']
const secondRow = ['tab','a','s','d','f','g','h','j','k','l',';','\'','\\']
const thirdRow = ['ctrl','alt','z','x','c','v','b','n','m',',','.','/','shift']

function drawKeyboardRow(row) {
  let container = document.createElement('div');
  container.classList.add('keyboard-row');
  row.forEach(k => {
    let newKey = document.createElement('div');
    newKey.classList.add('key');
    newKey.dataset.key = k;
    container.appendChild(newKey);
  });
  keyboard.appendChild(container);
}

drawKeyboardRow(firstRow);
drawKeyboardRow(secondRow);
drawKeyboardRow(thirdRow);

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.innerHTML = key.dataset.key;
})

addEventListener('keydown', (event) => {
  event.preventDefault();
  keys.forEach(key => {
    if (key.dataset.key == event.key.toLowerCase()) key.classList.add('highlight');
    if(event.ctrlKey && key.dataset.key == "ctrl") key.classList.add('highlight');
  })
});

addEventListener('keyup', (event) => {
  keys.forEach(key => key.classList.remove('highlight'));
});

