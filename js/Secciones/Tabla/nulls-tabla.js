// Obtener el elemento tablaPadre que contiene todos los textareas
let tablaPadre = document.querySelector(".tabla__tabla");

// Variables para almacenar el tiempo de inicio y fin del clic
let tiempoInicio = 0;
let tiempoFin = 0;

// Agregar un controlador de eventos mousedown al elemento tablaPadre
tablaPadre.addEventListener("mousedown", function(e) {
  // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
  if (e.target.classList.contains("celdaClickNull")) {
    // Establecer el tiempo de inicio del clic
    tiempoInicio = new Date().getTime();
  }
}); 

// Agregar un controlador de eventos mouseup al elemento tablaPadre
tablaPadre.addEventListener("mouseup", function(e) {
  // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
  if (e.target.classList.contains("celdaClickNull")) {
    // Establecer el tiempo de fin del clic
    tiempoFin = new Date().getTime();

    // Verificar si el tiempo transcurrido entre los dos eventos es mayor a 3 segundos
    if (tiempoFin - tiempoInicio > 200) {
      // Cambiar el estilo del textarea correspondiente
      let textarea = e.target;
      let parentElement = textarea.parentNode;
      if (textarea.style.backgroundColor === "black") {
        textarea.style.backgroundColor = "white";
        textarea.value = "";
        textarea.readOnly = false;
        parentElement.style.backgroundColor = "white";
      } else {
        textarea.style.backgroundColor = "black";
        textarea.value = null;
        textarea.style.height = "100%";
        textarea.readOnly = true;
        parentElement.style.backgroundColor = "black";
      }
    }
  }
});

// ---------------------------------------------------- //
// Funcion para que funcione en moviles de misma manera //
// Agregar un controlador de eventos touchstart al elemento padre
tablaPadre.addEventListener("touchstart", function(e) {
  // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
  if (e.target.classList.contains("celdaClickNull")) {
    // Establecer el tiempo de inicio del clic
    tiempoInicio = new Date().getTime();
  }
});

// Agregar un controlador de eventos touchend al elemento padre
tablaPadre.addEventListener("touchend", function(e) {
  // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
  if (e.target.classList.contains("celdaClickNull")) {
    // Establecer el tiempo de fin del clic
    tiempoFin = new Date().getTime();

    // Verificar si el tiempo transcurrido entre los dos eventos es mayor a 3 segundos
    if (tiempoFin - tiempoInicio > 200) {
      // Cambiar el estilo del textarea correspondiente
      let textarea = e.target;
      let parentElement = textarea.parentNode;
      if (textarea.style.backgroundColor === "black") {
        textarea.style.backgroundColor = "white";
        textarea.value = "";
        textarea.readOnly = false;
        parentElement.style.backgroundColor = "white";
      } else {
        textarea.style.backgroundColor = "black";
        textarea.value = null;
        textarea.style.height = "100%";
        textarea.readOnly = true;
        parentElement.style.backgroundColor = "black";
      }
    }
  }
});
