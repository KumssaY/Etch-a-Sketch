let mouseDown = false;
let eraseBtn = false;

document.addEventListener('mousedown', function(){
  mouseDown = true;
});
document.addEventListener('mouseup', function() {
  mouseDown = false;
});

function clickErase () {
  const getEraseBtn = document.querySelector('.js-erase');
  getEraseBtn.addEventListener('click', function () {
    if(eraseBtn === false) {
      eraseBtn = true;
    } else if (eraseBtn === true) {
      eraseBtn = false;
    }
  })
}

clickErase();

function createCells () {

  const getContainer = document.querySelector('.js-container');

  for (let index=0; index < (80*160);index++) {
    const cell = document.createElement('div');
    cell.classList.add('js-cell', 'cell');

    cell.addEventListener('mouseover', function () {
      if(eraseBtn) {
        cell.style.backgroundColor = 'white';
        return;
      }
      if(mouseDown) {
        cell.style.backgroundColor = getColorInput();
      }      
    });
    getContainer.appendChild(cell);
  }
}

function getColorInput () {
  const getColorElement = document.querySelector('.js-color');
  return getColorElement.value;
}

function clickClearAll() {
  const getClearBtn = document.querySelector('.js-clear');
  getClearBtn.addEventListener('click', function() {
    const cells = document.querySelectorAll('.js-cell');
    cells.forEach(function(cell) {
      cell.style.backgroundColor = 'white';
    });
  });
}

clickClearAll();

createCells();