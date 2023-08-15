const SeccionNothing = document.querySelector(".plantilla__agregar");
const SeccionText = document.querySelector(".plantilla__texto");
const SeccionOpenAsk = document.querySelector(".plantilla__preguntaA");
const SeccionMultipleAsk = document.querySelector(".plantilla__preguntaM");
const SeccionTable = document.querySelector(".plantilla__tabla");

const elementsArray = [SeccionNothing, SeccionText, SeccionOpenAsk, SeccionMultipleAsk, SeccionTable];

const DivPadre = document.querySelector(".editar__menuiconos__plantillas");

DivPadre.addEventListener('click', (event) => {
  if (event.target.classList.contains('SecText')) {
    toggleDisplay(SeccionText, elementsArray);
  } else if (event.target.classList.contains('SecTable')) {
    toggleDisplay(SeccionTable, elementsArray);
  } else if (event.target.classList.contains('SecOpenAsk')) {
    toggleDisplay(SeccionOpenAsk, elementsArray);
  } else if (event.target.classList.contains('SecMultipleAsk')) {
    toggleDisplay(SeccionMultipleAsk, elementsArray);
  }
});

function toggleDisplay(selectedElement, elementsArray) {
    console.log(selectedElement);
    if (selectedElement !== null) {
      selectedElement.style.display = 'block';
      elementsArray.forEach(element => {
        if (element !== selectedElement && element !== null) {
          element.style.display = 'none';
        }
      });
    }
  }
  
