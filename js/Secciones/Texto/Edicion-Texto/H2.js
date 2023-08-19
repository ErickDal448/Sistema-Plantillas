
const btnH2 = document.querySelector('[data-btn-h2]');
btnH2.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  if (sel.rangeCount) {
    let range = sel.getRangeAt(0);
    let selectedText = range.toString();

    // Check if the selected text is already inside an h2 element
    let parent = range.commonAncestorContainer;
    if (parent.nodeType !== 1) {
      parent = parent.parentNode;
    }
    if (parent.tagName === 'H2') {
      // Replace the h2 element with a text node
      let newNode = document.createTextNode(selectedText);
      parent.parentNode.replaceChild(newNode, parent);
    } else {
      // Create a new h2 element and apply the specified style
      let newNode = document.createElement('h2');
      newNode.style.textAlign = 'center';
      newNode.style.color = 'black';
      newNode.textContent = selectedText;
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
});