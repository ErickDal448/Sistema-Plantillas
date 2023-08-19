
const myDiv = document.querySelector('.texto__caja');

myDiv.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    // Get the current selection
    let sel = window.getSelection();
    if (sel.rangeCount) {
      let range = sel.getRangeAt(0);
      let container = range.commonAncestorContainer;

      // Check if the cursor is inside a list item
      if (container.nodeName === 'LI') {
        // Create a new list item and insert it after the current item
        let newListItem = document.createElement('li');
        container.parentNode.insertBefore(newListItem, container.nextSibling);

        // Move the cursor to the new list item
        range.setStart(newListItem, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      else{
        document.execCommand('insertHTML', false, '<br><br>');
      }
    }
  }
});

myDiv.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    // Get the current selection
    let sel = window.getSelection();
    if (sel.rangeCount) {
      let range = sel.getRangeAt(0);
      let container = range.commonAncestorContainer;

      // Check if the cursor is at the start of a list item
      if (container.nodeName === 'LI' && range.startOffset === 0) {
        event.preventDefault();
        // Check if this is the last list item and if it is empty
        if (!container.nextSibling && container.textContent === '') {
          // Remove the last list item
          container.parentNode.removeChild(container);
          // Move the cursor outside the list
          range.setStartAfter(container.parentNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  }
});







