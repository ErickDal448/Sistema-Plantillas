const btnToggleSize = document.querySelector('[data-btn-size]');
btnToggleSize.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedText = range.toString();

    // Check if the selected text is already inside a span with the class 'small'
    let parent = range.commonAncestorContainer;
    if (parent.nodeType !== 1) {
      parent = parent.parentNode;
    }
    if (parent.tagName === 'SPAN' && parent.classList.contains('small')) {
      // Remove the class 'small' and restore the original font size
      parent.classList.remove('small');
      parent.style.fontSize = 'initial';
    } else {
      // Create a new span element and apply the small size
      let newNode = document.createElement('span');
      newNode.classList.add('small');
      newNode.style.fontSize = 'smaller';
      newNode.textContent = selectedText;
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
});
