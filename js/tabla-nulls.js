// Obtener todas las celdas de la tabla anidada
let celdas = document.querySelectorAll(".celdaClickNull");

// Agregar un evento click a cada td en la tabla anidada
for (let i = 0; i < celdas.length; i++) {
  let td = celdas[i];
  td.addEventListener("click", function() {
    // Cambiar el estilo del td correspondiente
    if (td.style.backgroundColor === "black") {
      td.style.backgroundColor = "white";
      td.querySelector("textarea").style.display = "block";
    } else {
      td.style.backgroundColor = "black";
      td.querySelector("textarea").style.display = "none";
    }
  });

  // Agregar un controlador de eventos click al textarea
  let textarea = td.querySelector("textarea");
  if (textarea) {
    textarea.addEventListener("click", function(event) {
      // Detener la propagación del evento
      event.stopPropagation();
    });
  }
}
