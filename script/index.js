const keyboard = document.querySelector('#keyboard');

const firstRow ={
  'lower':['`', 'q','w','e','r','t','y','u','i','o','p','[',']'],
  'upper':['~', 'Q','W','E','R','T','Y','U','I','O','P','{','}']
}
const secondRow = {
'lower':['Tab','a','s','d','f','g','h','j','k','l',';','\'','\\'],
'upper':['Tab','A','S','D','F','G','H','J','K','L',':','"','\|']
}

const thirdRow = {
 'lower':['Ctrl','Alt','z','x','c','v','b','n','m',',','.','/','Shift'],
   'upper':['Ctrl','Alt','Z','X','C','V','B','N','M','<','>','?','Shift']
}

function drawKeyboardRow(row) {
  let container = document.createElement('div');
  container.classList.add('keyboard-row');
  row['lower'].forEach(k => {
    let newKeyLower = document.createElement('div');
    newKeyLower.classList.add('key');
    newKeyLower.dataset.key = k;
    newKeyLower.innerHTML = k;
    container.appendChild(newKeyLower);
  });

  row['upper'].forEach(k => {
    let newKeyUpper = document.createElement('div');
    newKeyUpper.classList.add('key');
    newKeyUpper.classList.add('inactive-row');
    newKeyUpper.dataset.key = k;
    newKeyUpper.innerHTML = k;
    container.appendChild(newKeyUpper);
  });

  keyboard.appendChild(container);
}

drawKeyboardRow(firstRow);
drawKeyboardRow(secondRow);
drawKeyboardRow(thirdRow);

const keys = document.querySelectorAll('.key');

addEventListener('keydown', (event) => {
  event.preventDefault();
  keys.forEach(key => {
    if (key.dataset.key == event.key) key.classList.add('highlight');
    if(event.ctrlKey && key.dataset.key == "Ctrl") key.classList.add('highlight');
  })
  if (event.key == 'Shift') shiftCase();
});

addEventListener('keyup', (event) => {
  keys.forEach(key => key.classList.remove('highlight'));
  if (event.key == 'Shift') shiftCase();
});

function shiftCase() {
  keys.forEach(k => {
    k.classList.toggle('active-row')
    k.classList.toggle('inactive-row')
  })    
}
