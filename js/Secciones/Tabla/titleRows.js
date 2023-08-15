var CambioTituloFila = false;
  function TitleRows() {
    let celdaTitle = tblBody.rows[1].cells[1];
    let DetectTitle = celdaTitle.querySelector(".MainTitle");
        if(DetectTitle){
        contBool = 1;
        }
        if (!DetectTitle){
        contBool = 0;
        }
    let fila = tblBody.rows[1 + contBool];
    if (!CambioTituloFila) {
      CambioTituloFila = true;
      for (var i = 1; i < fila.cells.length; i++) {
        let celda = fila.cells[i];
        let textarea = celda.querySelector('.celdaClickNull');
        celda.style.background = 'lightgray';
        textarea.style.background = 'lightgray';
        textarea.style.color = "blue";
  
        // Verificar si ya existe una tabla anidada en la celda
        let tablaAnidada = celda.querySelector("table");
        if (tablaAnidada) {
          // Si ya existe una tabla anidada, cambiar los textarea del interior de la tabla
          let textareasAnidados = tablaAnidada.querySelectorAll(".celdaClickNull");
          textareasAnidados.forEach(function(textarea) {
            textarea.style.background = 'lightgray';
            textarea.style.color = "blue";
          });
        }
      }
    } else if (CambioTituloFila) {
      CambioTituloFila = false;
      for (var i = 1; i < fila.cells.length; i++) {
        let celda = fila.cells[i];
        let textarea = celda.querySelector('.celdaClickNull');
        celda.style.background = 'white';
        textarea.style.background = 'white';
        textarea.style.color = "black";
  
        // Verificar si ya existe una tabla anidada en la celda
        let tablaAnidada = celda.querySelector("table");
        if (tablaAnidada) {
          // Si ya existe una tabla anidada, cambiar los textarea del interior de la tabla
          let textareasAnidados = tablaAnidada.querySelectorAll(".celdaClickNull");
          textareasAnidados.forEach(function(textarea) {
            textarea.style.background = 'white';
            textarea.style.color = "black";
          });
        }
      }
    }
  }
