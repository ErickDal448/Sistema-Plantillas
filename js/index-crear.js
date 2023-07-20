//Mostrar menu para crear plantillas
    // Obtener una referencia a la sección index__MenuCrear
    const menuCrear = document.querySelector('.index__MenuCrear');

    // Obtener una referencia al botón con la clase btn__plantilla
    const btnPlantilla = document.querySelector('.btn__plantilla');

    // Obtener una referencia al enlace con la clase Link__crear
    const linkCrear = document.querySelector('.index__link__crear');

    // Agregar un controlador de eventos para el evento click en el botón con la clase btn__plantilla
    btnPlantilla.addEventListener('click', () => {
        // Cambiar el display de la sección index__MenuCrear a flex
        menuCrear.style.display = 'flex';
    });

    // Agregar un controlador de eventos para el evento click en el enlace con la clase Link__crear
    linkCrear.addEventListener('click', () => {
        // Cambiar el display de la sección index__MenuCrear a flex
        menuCrear.style.display = 'flex';
    });

//Quitar el menu para la creación de plantilla 
    // Obtener una referencia al div card__ConfPlantilla
    const cardConfPlantilla = document.querySelector('.card__ConfPlantilla');

    // Agregar un controlador de eventos para el evento click en la sección index__MenuCrear
    menuCrear.addEventListener('click', (event) => {
        // Si el elemento que se hizo clic no es el div card__ConfPlantilla ni uno de sus hijos
        if (!cardConfPlantilla.contains(event.target)) {
            // Cambiar el display de la sección index__MenuCrear a none
            menuCrear.style.display = 'none';
        }
    });
