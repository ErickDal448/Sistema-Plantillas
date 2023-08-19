const btnCenter = document.querySelector('[data-btn-center]');
btnCenter.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  let selectedText = range.toString();

  // Apply the centered format
  let newNode = document.createElement('div');
  newNode.style.textAlign = 'center';
  newNode.textContent = selectedText;
  range.deleteContents();
  range.insertNode(newNode);
});