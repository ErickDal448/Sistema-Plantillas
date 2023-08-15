//hacer la barra lateral desplegable quitandole los textos
    // Seleccionar zona de trabajo
    const SpaceWork = document.querySelector(".editar__plantilla__section");

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
        SpaceWork.style.width = '93vw';
        textsVisible = false;
    } 
    else { // Si los textos están ocultos, muéstralos
        textElements.forEach(element => {
        element.style.display = 'block';
        });
        iconAgg.style.width = '5rem';
        iconAgg.style.height = '5rem';
        espaciado.style.width= '15vw';
        menuizq.style.width = '15vw';
        SpaceWork.style.width = '83vw';
        textsVisible = true;
    }
    });




