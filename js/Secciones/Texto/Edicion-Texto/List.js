const btnCreateList = document.querySelector('[data-btn-list]');
btnCreateList.addEventListener('click', () => {
  // Create a new list element
  let newList = document.createElement('ul');
  newList.classList.add("Texto-Lista");
  let newItem = document.createElement('li');
  newList.appendChild(newItem);

  // Insert the new list after the current selection
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    range.collapse(false);
    range.insertNode(newList);
    range.setStartAfter(newList);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  // Add an event listener to the list item to detect when the user presses Enter
  newItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      // Create a new list item and insert it after the current item
      let newListItem = document.createElement('li');
      newItem.parentNode.insertBefore(newListItem, newItem.nextSibling);

      // Move the cursor to the new list item
      let range = document.createRange();
      range.setStart(newListItem, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  // Move the cursor to the new list item
  let range = document.createRange();
  range.setStart(newItem, 0);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
});
