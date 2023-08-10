//hacer la barra lateral desplegable quitandole los textos
    // Selecciona el elemento editar__menuicons
    const menuIcon = document.querySelector('.editar__menuicons');

    // Seleccionar el menu izquierdo 
    const menuizq = document.querySelector('.editar__menuizq');

    // Seleccionar el icono de agregar seccion
    const iconAgg = document.querySelector('.menu__agglateral');

    // Seleccionar el div de espaciado para el contenido de la plantilla
    const espaciado = document.querySelector('.editar__Espaciado');

    // Crea una variable para llevar un registro de si los textos están visibles o no
    let textsVisible = true;

    // Agrega un evento de clic al elemento editar__menuicons
    menuIcon.addEventListener('click', () => {
    // Selecciona todos los elementos de texto que deseas ocultar/mostrar
    const textElements = document.querySelectorAll('.editar__menunombre__bloque, .editar__menusecciones, .editar__tituloizq, .menu__agglateraltxt');
    
    // Si los textos están visibles, ocúltalos
    if (textsVisible) {
        textElements.forEach(element => {
        element.style.display = 'none';
        });
        iconAgg.style.width = '2rem';
        iconAgg.style.height = '2rem';
        espaciado.style.width= '5vw';
        menuizq.style.width = 'auto';
        textsVisible = false;
    } 
    else { // Si los textos están ocultos, muéstralos
        textElements.forEach(element => {
        element.style.display = 'block';
        });
        iconAgg.style.width = '5rem';
        iconAgg.style.height = '5rem';
        espaciado.style.width= '14vw';
        menuizq.style.width = '12vw';
        textsVisible = true;
    }
    });


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

//llenado de datos segun el select de la seccion
    // Selecciona el select
    const select = document.querySelector('.form-select');

    // Selecciona el div editar__agregaciones
    const agregarDiv = document.querySelector('.editar__agregaciones');

    // Selecciona el botón
    const button = document.querySelector('.btn__plantilla');

    // Agrega un controlador de eventos para el evento change en el select
    select.addEventListener('change', () => {
    // Obtén el valor seleccionado
    const value = select.value;
    
    // Crea una variable para almacenar el contenido HTML que se mostrará en el div editar__agregaciones
    let content = '';
    
    // Cambia el contenido del div editar__agregaciones según el valor seleccionado
    if (value === '1') {
        content = `
        <label class="col-sm-5 col-form-label">Número de filas</label>
        <div class="col-sm-4">
            <input type="number" class="form-control">
        </div>
        <label class="col-sm-5 col-form-label">Número de columnas</label>
        <div class="col-sm-4">
            <input type="number" class="form-control">
        </div>
        `;
    } else if (value === '2') {
        content = `
        <label class="col-sm-5 col-form-label">Número de párrafos</label>
        <div class="col-sm-4">
            <input type="number" class="form-control">
        </div>
        `;
    } else if (value === '3') {
        content = `
        <label class="col-sm-5 col-form-label">Número de preguntas</label>
        <div class="col-sm-4">
            <input type="number" class="form-control">
        </div>
        `;
    } else if (value === '4') {
        content = `
        <label class="col-sm-5 col-form-label">Número de preguntas</label>
        <div class="col-sm-4">
            <input type="number" class="form-control">
        </div>
        `;
    }
    
    // Establece el contenido del div editar__agregaciones
    agregarDiv.innerHTML = content;
    
    // Selecciona todos los campos de texto dentro del div editar__agregaciones
    const inputs = agregarDiv.querySelectorAll('input');
    
    // Agrega un controlador de eventos para el evento input en cada campo de texto
    inputs.forEach(input => {
        input.addEventListener('input', () => {
        // Verifica si todos los campos de texto tienen algún valor
        const allFilled = [...inputs].every(input => input.value.trim() !== '');
        
        // Habilita o deshabilita el botón según si todos los campos de texto tienen algún valor o no
        button.disabled = !allFilled;
        });
    });
    });

