const keyboard = document.querySelector('#keyboard');

const numRow = ['`','1','2','3','4','5','6','7','8','9','0','-','='];
const numShiftRow = ['~','!','@','#','$','%','^','&','*','(',')','_','+']

const qRow = ['`', 'q','w','e','r','t','y','u','i','o','p','[',']']
const qShiftRow =  ['~', 'Q','W','E','R','T','Y','U','I','O','P','{','}']

const aRow = ['Tab','a','s','d','f','g','h','j','k','l',';','\'','\\']
const aShiftRow = ['Tab','A','S','D','F','G','H','J','K','L',':','"','\|'];

const zRow = ['Ctrl','Alt','z','x','c','v','b','n','m',',','.','/','Shift'];
const zShiftRow = ['Ctrl','Alt','Z','X','C','V','B','N','M','<','>','?','Shift']

const rows = [numRow, numShiftRow, qRow, qShiftRow, aRow, aShiftRow, zRow, zShiftRow];

const keyOperators = {
  '@':'run macro',
  'q':'record macro',
  'r':'replace',
  't':'to',
  'y':'yank',
  'u':'undo',
  'i':'insert',
  'o':'insert below',
  'p':'put',
  'a':'append',
  's':'substitute',
  'd':'delete',
  'f':'find',
  'g':'go',
  'z':'redraw, fold',
  'x':'delete char',
  'c':'change',
  'v':'visual', 
  'm':'set mark',
  'Q':'ex mode',
  'R':'replace mode',
  'Y':'yank line',
  'U':'undo line',
  'I':'insert bol',
  'O':'insert above',
  'P':'put before',
  'A':'append to eol',
  'F':'find back',
  
}

const keyMotions = {
  '$':'end of line',
  '%':'matching paren',
  '^':'start of line',
  '0':'beginning of line',
  '(':'prev sentence',
  ')':'next sentence',
  '{':'prev paragraph',
  'w':'next word',
  'e':'end of word',
  't':'tab',
  'h':'left',
  'j':'down',
  'k':'up',
  'l':'right',
  '\'':'mark',
  'b':'backward',
  'n':'next match',
  '/':'match pattern',
  'W':'WORD',
  'E':'end prev word',
  'T':'prev tab',
  'G':'end of file'
}

let domRows = [];

function drawKeyboardRow(row, index) {
  let container = document.createElement('div');
  container.classList.add('keyboard-row');
  if(index % 2 == 0) container.classList.add('active-row');
  else container.classList.add('inactive-row');
  row.forEach((k, i) => {
    let newKey = document.createElement('div');
    newKey.classList.add('key');
    newKey.dataset.key = k;
    let keyText = newKey.appendChild(document.createElement('div'));
    newKey.innerHTML = k;
    let opCaption = document.createElement('div');
    let moCaption = document.createElement('div');
    opCaption.classList.add('key-caption','op-caption');
    moCaption.classList.add('key-caption','mo-caption');
    if(keyOperators[k] !== undefined) opCaption.innerHTML += keyOperators[k];
    if(keyMotions[k] !== undefined) moCaption.innerHTML += keyMotions[k];
    newKey.appendChild(opCaption);
    newKey.appendChild(moCaption);
    container.appendChild(newKey);
  });

  keyboard.appendChild(container);
  domRows.push(container);
}

rows.forEach((row, index) => drawKeyboardRow(row, index));

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
  domRows.forEach(r => {
    r.classList.toggle('active-row')
    r.classList.toggle('inactive-row')
  })    
}
