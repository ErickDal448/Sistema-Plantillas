
const myDiv = document.querySelector('.texto__caja');

  

// myButton.addEventListener('click', () => {
//     // Get the text from the div
//     let text = myDiv.innerHTML;

//     // Decode the HTML entities
//     const textarea = document.createElement('textarea');
//     textarea.innerHTML = text;
//     text = textarea.value;

//     // Apply the bold format
//     text = text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

//     // Apply the heading formats
//     text = text.replace(/##(.+?)##/gm, '<h2 style="text-align: center; color: black;">$1</h2>');
//     text = text.replace(/#(.+?)#/gm, '<h1 style="text-align: center; color: blue;">$1</h1>');

//     // Apply the small text format
//     text = text.replace(/°°(.+?)°°/g, '<small>$1</small>');

//     // Apply the list format
//     text = text.replace(/-(.+?)-/g, '<li>$1</li>');

//     // Apply the centered format
//     text = text.replace(/<c>(.+?)<\/c>/g, '<div style="text-align: center;">$1</div>');

//     // Apply the justify format
//     text = text.replace(/<j>(.+?)<\/j>/g, '<div style="text-align: justify;">$1</div>');

//     // Apply the red format
//     text = text.replace(/<r>(.+?)<\/r>/g, '<span style="color: red;">$1</span>');

//     // Update the innerHTML of the div
//     myDiv.innerHTML = text;
//     console.log(text);
// });

myDiv.addEventListener('input', () => {
  myDiv.style.minHeight = '50vh';
  myDiv.style.height = 'auto';
  myDiv.style.height = myDiv.scrollHeight + 'px';
});



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

const btnJustify = document.querySelector('[data-btn-justify]');
btnJustify.addEventListener('click', () => {
  // Get the selected text
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  let selectedText = range.toString();

  // Apply the centered format
  let newNode = document.createElement('div');
  newNode.style.textAlign = 'justify';
  newNode.textContent = selectedText;
  range.deleteContents();
  range.insertNode(newNode);
});

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

const btnCreateList = document.querySelector('[data-btn-list]');
btnCreateList.addEventListener('click', () => {
  // Create a new list element
  let newList = document.createElement('ul');
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
        alert("1");
        // Check if this is the last list item and if it is empty
        if (!container.nextSibling && container.textContent === '') {
          // Remove the last list item
          container.parentNode.removeChild(container);
          alert("2");
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
