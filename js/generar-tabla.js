// Obtener la referencia del elemento div con la clase tabla__espaciotabla
var div = document.querySelector(".tabla__espaciotabla");

//calcular el total de filas y columnas
var columnas = 5;
var filas = 5;

//seleccionar las variables de los botones para aumentar o disminuir las filas o columnas
var btnAggFila = document.querySelector(".btn__aggFila");
var btnDelFila = document.querySelector(".btn__delFila");
var btnAggColumna = document.querySelector(".btn__aggColumna");
var btnDelColumna = document.querySelector(".btn__delColumna");

// Agregar un controlador de eventos a cada botón
btnAggFila.addEventListener("click", function() {
  // Agregar una fila a la tabla
  if (filas < 100) {
    var hilera = tblBody.insertRow();
    for (var j = 0; j <= columnas; j++) {
      var celda = hilera.insertCell();
      if (j === 0) {
        celda.classList.add("coordenadas");
        var textoCelda = document.createTextNode(++filas);
        celda.appendChild(textoCelda);
      } else {
        var input = document.createElement("input");
        input.type = "text";
        celda.appendChild(input);
      }
    }
  }
});
btnDelFila.addEventListener("click", function() {
  // Eliminar una fila de la tabla
  if (filas > 2) {
    tblBody.deleteRow(-1);
    filas--;
  }
});

btnAggColumna.addEventListener("click", function() {
  // Agregar una columna a la tabla
  if (columnas < 10) {
    columnas++;
    for (var i = 0; i <= filas; i++) {
      var celda = tblBody.rows[i].insertCell();
      if (i === 0) {
        celda.classList.add("coordenadas");
        var textoCelda = document.createTextNode(String.fromCharCode(64 + columnas));
        celda.appendChild(textoCelda);
      } else {
        var input = document.createElement("input");
        input.type = "text";
        celda.appendChild(input);
      }
    }
  }
});

btnDelColumna.addEventListener("click", function() {
  // Eliminar una columna de la tabla
  if (columnas > 2) {
    for (var i = 0; i <= filas; i++) {
      tblBody.rows[i].deleteCell(-1);
    }
    columnas--;
  }
});

// Obtener la referencia del elemento div con la clase tabla__espaciotabla
var div = document.querySelector(".tabla__espaciotabla");

// Crear un elemento table y un elemento tbody
var tabla = document.createElement("table");
tabla.classList.add("table"); // Agregar la clase table de Bootstrap
tabla.classList.add("tabla__tabla"); // Agregar la clase tabla__tabla para editar
var tblBody = document.createElement("tbody");

// Agregar una fila adicional al principio para mostrar las coordenadas de las columnas
var hilera = document.createElement("tr");
hilera.classList.add("coordenadas"); // Agregar una clase a la primera fila
for (var j = 0; j <= columnas; j++) {
  var celda = document.createElement("td");
  celda.classList.add("coordenadas");
  if (j === 0) {
    var textoCelda = document.createTextNode("");
  } else {
    var textoCelda = document.createTextNode(String.fromCharCode(64 + j));
  }
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
}
tblBody.appendChild(hilera);

// Crear las filas y columnas de la tabla
for (var i = 1; i <= filas; i++) {
  var hilera = document.createElement("tr");

  // Agregar una columna adicional al principio para mostrar las coordenadas de las filas
  var celda = document.createElement("td");
  celda.classList.add("coordenadas"); // Agregar una clase a la primera columna
  celda.classList.add("coordenadas__fila"); // Agregar una clase a la primera columna
  var textoCelda = document.createTextNode(i);
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);

  for (var j = 1; j <= columnas; j++) {
    var celda = document.createElement("td");
    var input = document.createElement("input"); // Crear un elemento input para cada celda
    input.type = "text";
    celda.appendChild(input);
    hilera.appendChild(celda);
  }

  tblBody.appendChild(hilera);
}

tabla.appendChild(tblBody);

// Crear un elemento div para centrar la tabla
var divCentrado = document.createElement("div");
divCentrado.classList.add("d-flex", "justify-content-center"); // Agregar clases de Bootstrap para centrar la tabla
divCentrado.appendChild(tabla);

div.appendChild(divCentrado);

  // ------------------- //
  // SECCION DE SUBFILAS //
  // ------------------- //
    //funcion de hacer subfilas en columna A
    function agregarSubfila() {
      // Obtener el número de la fila donde se quiere agregar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value);

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 || fila > filas) {
        alert("Por favor ingresa un número de fila válido");
        return;
      }

      // Obtener la tabla y la fila donde se quiere agregar la subfila
      var tabla = document.querySelector(".tabla__tabla");
      var hilera = tabla.rows[fila];

      // Verificar si ya existe una tabla anidada en la segunda celda de la fila
      var tablaAnidada = hilera.cells[1].querySelector("table");
      if (tablaAnidada) {
        // Si ya existe una tabla anidada, agregar una nueva fila a esta tabla
        var hileraNueva = tablaAnidada.insertRow();
        var celdaNueva = hileraNueva.insertCell();
        celdaNueva.classList.add("celda-ajustada");
        var inputNuevo = document.createElement("input");
        inputNuevo.type = "text";
        inputNuevo.classList.add("input-ajustada");
        celdaNueva.appendChild(inputNuevo);

        // Ajustar el rowSpan de la primera celda de la tabla anidada
        tablaAnidada.rows[0].cells[0].rowSpan += 1;
      } else {
        // Si no existe una tabla anidada, ocultar el input dentro de la segunda celda y crear una nueva tabla anidada en esta celda
        var celda = hilera.cells[1];
        var input = celda.querySelector("input");
        input.classList.add("tabla-inputfilaTema");
        if (input) {
          input.style.display = "none";
        }
        celda.style.padding = "0px";
        var tablaAnidada = document.createElement("table");
        tablaAnidada.classList.add("tabla-filasTema");
        tablaAnidada.style.width = "100%";
        var hilera1 = tablaAnidada.insertRow();
        var hilera2 = tablaAnidada.insertRow();
        var celda1 = hilera1.insertCell();
        celda1.rowSpan = 2;
        celda1.classList.add("celda-ajustada", "col-6");
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.classList.add("input-ajustada");
        celda1.appendChild(input1);
        var celda2 = hilera1.insertCell();
        celda2.classList.add("celda-ajustada");
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.classList.add("input-ajustada");
        celda2.appendChild(input2);
        var celda3 = hilera2.insertCell();
        celda3.classList.add("celda-ajustada");
        var input3 = document.createElement("input");
        input3.type = "text";
        input3.classList.add("input-ajustada");
        celda3.appendChild(input3);
        celda.appendChild(tablaAnidada);
      }
      
      for(k = 1; k <= columnas; k++){
        hilera.cells[k].style.padding = "0px";
      }
    }

    //funcion de eliminar subfilas en columna A
    function eliminarSubfila() {
      // Obtener el número de la fila donde se quiere eliminar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value);

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 || fila > filas) {
        alert("Por favor ingresa un número de fila válido");
        return;
      }

      // Obtener la tabla y la fila donde se quiere eliminar la subfila
      var tabla = document.querySelector(".tabla__tabla");
      var hilera = tabla.rows[fila];

      // Verificar si existe una tabla anidada en la segunda celda de la fila
      var tablaAnidadaEsp = hilera.cells[1].querySelector("table");
      if (tablaAnidadaEsp) {
        // Si existe una tabla anidada, eliminar la última fila de esta tabla
        if (tablaAnidadaEsp.rows.length > 1) {
          tablaAnidadaEsp.deleteRow(tablaAnidadaEsp.rows.length - 1);

          // Ajustar el rowSpan de la primera celda de la tabla anidada
          if (tablaAnidadaEsp.rows.length > 0) {
            tablaAnidadaEsp.rows[0].cells[0].rowSpan -= 1;
          }
        }
        if (tablaAnidadaEsp.rows.length == 1) {
          var tablaTitle = hilera.cells[1].querySelector(".tabla-filasTema");
          tablaTitle.parentNode.removeChild(tablaTitle);
          var inputOriginal = hilera.cells[1].querySelector(".tabla-inputfilaTema");
          inputOriginal.style.display = 'block';
          for(k = 1; k <= columnas; k++){
            hilera.cells[k].style.padding = "0.5rem 0.5rem";
          }
        }
      
      
      }
      else {
        alert("No hay ninguna subfila para eliminar en esta fila");
      }
      
    }

    //hacer subfilas completas
    document.querySelector(".add-subfila").addEventListener("click", function() {
      // Obtener los valores de los campos de entrada
      var fila = document.querySelector(".form-subfila1").value;
      var columna = document.querySelector(".form-subfila2").value;

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 || fila > filas) {
        alert("Por favor ingresa un número de fila válido");
        return;
      }

      // Verificar si la columna es "A" o "B"
      if (columna === "A" || columna === "B") {
        // Convertir la letra de la columna en un índice numérico
        var columnaIndice = columna.charCodeAt(0) - 64;

        // Obtener la fila existente
        var filaExistente = tblBody.rows[fila];
          //Si la columna es A crear el formato de titulo
          if(columna === "A"){
            agregarSubfila();
          }
        // Recorrer cada celda de la fila existente
        for (var i = 2; i <= columnas; i++) {
          var celdaExistente = filaExistente.cells[i];
          celdaExistente.classList.add("celda-anidada"); // Agregar una clase a la celda que contiene una tabla anidada

          // Crear una tabla anidada dentro de la celda existente
          var tablaAnidada = document.createElement("table");
          tablaAnidada.classList.add("tabla-anidada"); // Agregar una clase a la tabla anidada para aplicar estilos
          var tblBodyAnidado = document.createElement("tbody");

          // Agregar una hilera anidada horizontal
          var hileraAnidada = document.createElement("tr");
          var celdaAnidada = document.createElement("td");
          var input = document.createElement("input");
          input.type = "text";
          celdaAnidada.appendChild(input);
          hileraAnidada.appendChild(celdaAnidada);
          tblBodyAnidado.appendChild(hileraAnidada);

          tablaAnidada.appendChild(tblBodyAnidado);
          celdaExistente.appendChild(tablaAnidada);
        }
      }
    });

    //eliminar subfilas completas
    // Agregar un controlador de eventos al botón para que llame a la función eliminarSubfilaCompleta cuando se presione el botón
    document.querySelector(".del-subfila").addEventListener("click", eliminarSubfilaCompleta);

    function eliminarSubfilaCompleta() {
      // Obtener el número de la fila donde se quiere eliminar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value);
      var columna =  document.querySelector(".form-subfila2").value;

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 || fila > filas) {
        alert("Por favor ingresa un número de fila válido");
        return;
      }
      //Si la columna es A crear el formato de titulo
      if(columna === "A"){
        eliminarSubfila();
      }
      // Obtener la tabla y la fila donde se quiere eliminar la subfila
      var tabla = document.querySelector(".tabla__tabla");
      var hilera = tabla.rows[fila];
      
      // Recorrer cada celda de la fila
      for (var i = 2; i < hilera.cells.length; i++) {
        var celda = hilera.cells[i];

        // Verificar si existe una tabla anidada en la celda
        var tablaAnidada = celda.querySelector("table");
        if (tablaAnidada) {
          // Si existe una tabla anidada, eliminarla
          celda.removeChild(tablaAnidada);
        }
      }
      for(k = 2; k <= columnas; k++){
        hilera.cells[k].style.padding = "0px";
      }
    }

  // ---------------------- //
  // SECCION DE SUBCOLUMNAS //
  // ---------------------- //
  function agregarSubcolumna() {
    // Obtener el número de la columna donde se quiere agregar la subcolumna
    let columna = document.querySelector(".form-subcolumna1").value;
  
    // Verificar que el valor del input sea un número válido
    if (isNaN(columna) || columna < 1 || columna > columnas) {
      alert("Por favor ingresa un valor de columna válido");
      return;
    }
  
    // Obtener la tabla y la columna donde se quiere agregar la subcolumna
    var tabla = document.querySelector(".tabla__tabla");
    var celda = tabla.rows[1].cells[columna];
  
    // Verificar si ya existe una tabla anidada en la celda
    var tablaAnidada = celda.querySelector("table");
    
    if (tablaAnidada) {
      // Si ya existe una tabla anidada, agregar una nueva celda a la segunda fila de esta tabla
      var celdaNueva = tablaAnidada.rows[1].insertCell();
      celdaNueva.classList.add("celda-ajustada-cols");
      
      var inputNuevo = document.createElement("input");
      inputNuevo.type = "text";
      inputNuevo.classList.add("input-ajustada");
      celdaNueva.appendChild(inputNuevo);
      celdaNueva.style.width = "2.5rem";
      tablaAnidada.style.width = "100%";
  
      // Ajustar el colSpan de la primera celda de la tabla anidada
      tablaAnidada.rows[0].cells[0].colSpan += 1;
    } else {
      // Si no existe una tabla anidada, ocultar el input dentro de la celda y crear una nueva tabla anidada en esta celda
      var input = celda.querySelector("input");
      input.classList.add("tabla-inputfilaTema");
      if (input) {
        input.style.display = "none";
      }
      celda.style.padding = "0px";
      var tablaAnidada = document.createElement("table");
      var hilera1 = tablaAnidada.insertRow();
      var hilera2 = tablaAnidada.insertRow();
      var celda1 = hilera1.insertCell();
      celda1.colSpan = 4;
      celda1.classList.add("celda-ajustada-cols", "col-6");
      var input1 = document.createElement("input");
      input1.type = "text";
      input1.classList.add("input-ajustada");
      celda1.appendChild(input1);
      for (var i = 0; i < 2; i++) {
        var celdaNueva = hilera2.insertCell();
        celdaNueva.classList.add("celda-ajustada-cols");
        celdaNueva.style.width = "2.5rem";
        tablaAnidada.style.width = "100%";
        var inputNuevo = document.createElement("input");
        inputNuevo.type = "text";
        inputNuevo.classList.add("input-ajustada");
        celdaNueva.appendChild(inputNuevo);
      }
      celda.appendChild(tablaAnidada);
    }
  }
  
  document.querySelector(".add-subcolumna").addEventListener("click", function() {
    // Obtener el valor del campo de entrada
    var columna = document.querySelector(".form-subcolumna1").value;
  
    // Verificar que el valor del input sea un número válido
    if (isNaN(columna) || columna < 1 || columna > columnas) {
      alert("Por favor ingresa un número de columna válido");
      return;
    }
  
    // Recorrer cada celda de la columna especificada
    for (var i = 2; i <= filas; i++) {
      var celda = tblBody.rows[i].cells[columna];
  
      // Verificar si ya existe una tabla en la celda
      var tablaExistente = celda.querySelector("table");
      if (tablaExistente) {
        // Si ya existe una tabla, agregar un nuevo td con un input dentro a la primera fila de esta tabla
        var trExistente = tablaExistente.rows[0];
        var tdNuevo = document.createElement("td");
        tdNuevo.classList.add("celda-ajustada-cols");
        var inputNuevo = document.createElement("input");
        inputNuevo.type = "text";
        inputNuevo.classList.add("input-ajustada");
        tdNuevo.appendChild(inputNuevo);
        trExistente.appendChild(tdNuevo);
      } else {
        // Si no existe una tabla, ocultar el input existente en la celda y crear una nueva tabla con dos inputs
        var inputExistente = celda.querySelector("input");
        inputExistente.style.display = "none";
        var tablaNueva = document.createElement("table");
        var trNuevo = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
          var tdNuevo = document.createElement("td");
          tdNuevo.classList.add("celda-ajustada-cols");
          var inputNuevo = document.createElement("input");
          inputNuevo.type = "text";
          inputNuevo.classList.add("input-ajustada");
          tdNuevo.appendChild(inputNuevo);
          trNuevo.appendChild(tdNuevo);
        }
        tablaNueva.appendChild(trNuevo);
        celda.appendChild(tablaNueva);
      }
    }
  });
  
  
  

