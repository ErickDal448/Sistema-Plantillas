const btnH1 = document.querySelector('[data-btn-h1]');
btnH1.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedText = range.toString();

    // Check if the selected text is already inside an h1 element
    let parent = range.commonAncestorContainer;
    if (parent.nodeType !== 1) {
      parent = parent.parentNode;
    }
    if (parent.tagName === 'H1') {
      // Replace the h1 element with a text node
      let newNode = document.createTextNode(selectedText);
      parent.parentNode.replaceChild(newNode, parent);
    } else {
      // Create a new h1 element and apply the specified style
      let newNode = document.createElement('h1');
      newNode.style.textAlign = 'center';
      newNode.style.color = 'blue';
      newNode.textContent = selectedText;
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
});