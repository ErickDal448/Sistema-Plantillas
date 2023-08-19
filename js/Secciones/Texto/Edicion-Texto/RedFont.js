let isRed = false;
const btnRedFont = document.querySelector('[data-btn-redFont]');
btnRedFont.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  let selectedText = range.toString();

  // Apply the color format
  let newNode = document.createElement('span');
  newNode.style.color = isRed ? 'black' : 'red';
  newNode.textContent = selectedText;
  range.deleteContents();
  range.insertNode(newNode);

  // Toggle the color state
  isRed = !isRed;
});