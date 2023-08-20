
const btnCreateItem = document.querySelector('[data-btn-checkSpace]');
btnCreateItem.addEventListener('click', () => {
  // Get the number of items to create from the input field
  let numItems = document.querySelector('#num-respuestas').value;
  let preguntasDiv = document.querySelector('.PreguntaM__caja');

  preguntasDiv.focus();
  // Create the new items
  let newItems = '';
  for (let i = 0; i < numItems; i++) {
    newItems += '□ ';
  }

  // Insert the new items after the current selection or at the end of the div
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    range.collapse(false);
    let newNode = document.createTextNode(newItems);
    range.insertNode(newNode);
    range.setStartAfter(newNode);
    sel.removeAllRanges();
    sel.addRange(range);
  } else {
    preguntasDiv.insertAdjacentHTML('beforeend', newItems);
  }
});

