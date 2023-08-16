const myButton = document.querySelector('.btn__AplicarFiltros');
const myDiv = document.querySelector('.texto__caja');

myDiv.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.execCommand('insertHTML', false, '<br><br>');
    }
  });
  

myButton.addEventListener('click', () => {
    // Get the text from the div
    let text = myDiv.innerHTML;

    // Decode the HTML entities
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    text = textarea.value;

    // Apply the bold format
    text = text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

    // Apply the heading formats
    text = text.replace(/##(.+?)##/gm, '<h2 style="text-align: center; color: black;">$1</h2>');
    text = text.replace(/#(.+?)#/gm, '<h1 style="text-align: center; color: blue;">$1</h1>');

    // Apply the small text format
    text = text.replace(/°°(.+?)°°/g, '<small>$1</small>');

    // Apply the list format
    text = text.replace(/-(.+?)-/g, '<li>$1</li>');

    // Apply the centered format
    text = text.replace(/<c>(.+?)<\/c>/g, '<div style="text-align: center;">$1</div>');

    // Apply the justify format
    text = text.replace(/<j>(.+?)<\/j>/g, '<div style="text-align: justify;">$1</div>');

    // Apply the red format
    text = text.replace(/<r>(.+?)<\/r>/g, '<span style="color: red;">$1</span>');

    // Update the innerHTML of the div
    myDiv.innerHTML = text;
    console.log(text);
});

myDiv.addEventListener('input', () => {
  myDiv.style.minHeight = '50vh';
  myDiv.style.height = 'auto';
  myDiv.style.height = myDiv.scrollHeight + 'px';
});
