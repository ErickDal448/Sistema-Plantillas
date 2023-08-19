
const btnToggleBold = document.querySelector('[data-btn-bold]');
btnToggleBold.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedText = range.toString();

    // Check if the selected text is already inside a span with the class 'bold'
    let parent = range.commonAncestorContainer;
    if (parent.nodeType !== 1) {
      parent = parent.parentNode;
    }
    if (parent.tagName === 'SPAN' && parent.classList.contains('bold')) {
      // Remove the class 'bold' and restore the original font weight
      parent.classList.remove('bold');
      parent.style.fontWeight = 'initial';
    } else {
      // Create a new span element and apply the bold style
      let newNode = document.createElement('span');
      newNode.classList.add('bold');
      newNode.style.fontWeight = 'bold';
      newNode.textContent = selectedText;
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
});