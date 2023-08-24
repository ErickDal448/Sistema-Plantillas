
//Mostrar menu para agregar una seccion nueva
    // Seleccionar los enlaces para mostrar el menu de agregacion
    const btnAgregar = document.querySelectorAll('.menu__agregarplantillaimg');

    //seleccionar el area del section del menu de agregacion
    const areaAgregar = document.querySelector('.editar__section__agregar');

    // Realizar controlador de evento click 
    btnAgregar.forEach(btn => {
        btn.addEventListener('mousedown', (event) => {
            // Detener la propagación del evento de clic
            event.stopPropagation();
            
            // Cambiar el display del area a flex 
            areaAgregar.style.display = 'flex';
        });
    });

//Ocultar el menu para la agregacion de seccion 
    // Obtener una referencia al div card__ConfPlantilla
    const cardConfPlantilla = document.querySelector('.card__ConfPlantilla');

    // Agregar un controlador de eventos para el evento click en la sección editar__section__agregar
    areaAgregar.addEventListener('mousedown', (event) => {
        // Si el elemento que se hizo clic no es el div card__ConfPlantilla ni uno de sus hijos
        if (!cardConfPlantilla.contains(event.target)) {
            // Cambiar el display de la sección editar__section__agregar a none
            areaAgregar.style.display = 'none';
        }
    });


// agregar la plantilla seleccionada en el menu lateral
const radioButtons = document.querySelectorAll('.inputSection');
const addButton = document.querySelector('.btn__plantilla');
const menuIconos = document.querySelector('.div__SeccionesMobibles');

addButton.addEventListener('click', () => {
  let selectedLabel;
  let opt1 = document.querySelector(".Opt1");
  let opt2 = document.querySelector(".Opt2");
  let opt3 = document.querySelector(".Opt3");
  let opt4 = document.querySelector(".Opt4");
  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      selectedLabel = radioButton.nextElementSibling.textContent;
    }
  });

  const bloque = document.createElement('div');
  bloque.classList.add('editar__menuicons__bloque', 'div__MenuIzqBloque', 'div__MobileBlock');
  const img = document.createElement('img');
  
  img.classList.add('editar__menuicons__plantilla', 'editar__menuicons__bloque');
  const p = document.createElement('p');
  p.classList.add('editar__menunombre__bloque');
  p.textContent = selectedLabel;
  

  if (opt1.checked === true) {
    console.log("tabla");
    img.src = './assets/img/icon-tabla.png';
    p.textContent = 'Tabla';
    img.alt = 'Tabla';
    img.classList.add("SecTable");
    p.classList.add("SecTable");
    bloque.appendChild(img);
    bloque.appendChild(p);
    menuIconos.appendChild(bloque);
  } else if (opt2.checked === true) {
    img.src = './assets/img/icon-text.png';
    p.textContent = 'Texto';
    img.alt = 'Texto';
    img.classList.add("SecText");
    p.classList.add("SecText");
    bloque.appendChild(img);
    bloque.appendChild(p);
    menuIconos.appendChild(bloque);
  } else if (opt3.checked === true) {
    console.log("tabla");
    img.src = './assets/img/icon-openAsk.png';
    p.textContent = 'Pregunta abierta';
    img.alt = 'Pregunta abierta';
    img.classList.add("SecOpenAsk");
    p.classList.add("SecOpenAsk");
    bloque.appendChild(img);
    bloque.appendChild(p);
    menuIconos.appendChild(bloque);
  } else if (opt4.checked === true) {
    img.src = './assets/img/icon-multipleAsk.png';
    p.textContent = 'Pregunta multiple';
    img.alt = 'Pregunta multiple';
    img.classList.add("SecMultipleAsk");
    p.classList.add("SecMultipleAsk");
    bloque.appendChild(img);
    bloque.appendChild(p);
    menuIconos.appendChild(bloque);
  }
});
