
const btnSpacer = document.querySelector("[data-btn-checkSpace]");

btnSpacer.addEventListener("click", () => {
    // Get the value of the input
    let height = document.querySelector(".input-Space").value;
    console.log(height);
    console.log("si");
    
    // Get the editable div
    let editableDiv = document.querySelector('.PreguntaA__caja');
    
    // Focus the editable div
    editableDiv.focus();
    
    // Check which radio button is selected
    let isRecuadroSelected = document.querySelector('.in__Recuadro').checked;
    
    if (isRecuadroSelected) {
      // If the 'Recuadro' radio button is selected, insert a spacer div
      let spacer = document.createElement('div');
      spacer.style.height = height + 'rem';
      insertNodeAtCursor(spacer);
      spacer.style.border = "black";
      spacer.style.border = "double";
    } else {
      // If the 'Renglones' radio button is selected, insert the specified number of horizontal lines
      for (let i = 0; i < height; i++) {
        insertHorizontalLineAtCursor();
      }
    }

});

function insertNodeAtCursor(node) {
  // Get the current selection
  let sel = window.getSelection();
  if (sel.rangeCount) {
    // If there is a selection, insert the node at the cursor position
    let range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(node);
  } else {
    // If there is no selection, insert the node at the end of the editable div
    let editableDiv = document.querySelector('.PreguntaA__caja');
    editableDiv.appendChild(node);
  }
}

function insertHorizontalLineAtCursor() {
    // Get the editable div
    let editableDiv = document.querySelector('.PreguntaA__caja');
    
    // Focus the editable div
    editableDiv.focus();
    
    // Create a new hr element
    let hr = document.createElement('hr');
    hr.style.borderTop = '1px solid black';
    hr.style.marginTop = '0';
    hr.style.marginBottom = '1rem';
    
    // Get the current selection
    let sel = window.getSelection();
    if (sel.rangeCount) {
      // If there is a selection, insert the hr element at the cursor position
      let range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(hr);
      
      // Move the cursor after the inserted hr element
      range.setStartAfter(hr);
      range.setEndAfter(hr);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      // If there is no selection, insert the hr element at the end of the editable div
      editableDiv.appendChild(hr);
    }
  }
  
