// Obtener la referencia del elemento div con la clase tabla__espaciotabla
var div = document.querySelector(".tabla__espaciotabla");

// Determinar la variable booleana de titulo en columna y fila
var boolTitleCols = false;
var boolTitleRows = false;

//calcular el total de filas y columnas
var columnas = 5;
var filas = 5;

//seleccionar las variables de los botones para aumentar o disminuir las filas o columnas
var btnAggFila = document.querySelector(".btn__aggFila");
var btnDelFila = document.querySelector(".btn__delFila");
var btnAggColumna = document.querySelector(".btn__aggColumna");
var btnDelColumna = document.querySelector(".btn__delColumna");

// --------------------- //
// CREAR TABLA PRINCIPAL //
// --------------------- //
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
      var textarea = document.createElement("textarea"); // Crear un elemento textarea para cada celda
      textarea.setAttribute("maxlength", "100");
      textarea.setAttribute("oninput", "autoResize(this)");
      textarea.classList.add("input-ajustada");
      textarea.classList.add("celdaClickNull");
      celda.classList.add("padre");
      celda.appendChild(textarea);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  ActualizarSelectFilas();
  ActualizarSelectColumnas();

  // Crear un elemento div para centrar la tabla
  var divCentrado = document.createElement("div");
  divCentrado.classList.add("d-flex", "justify-content-center"); // Agregar clases de Bootstrap para centrar la tabla
  divCentrado.appendChild(tabla);

  div.appendChild(divCentrado);

// ------------- //
// Agregar Filas //
// ------------- //
function AggFila () {
  // Agregar una fila a la tabla
  if (filas < 100) {
    var hilera = tblBody.insertRow();
    for (var j = 0; j <= columnas; j++) {
      var celda = hilera.insertCell();
      if (j === 0) {
        celda.classList.add("coordenadas", "coordenadas__fila");
        var textoCelda = document.createTextNode(++filas);
        celda.appendChild(textoCelda);
      } else {
        var textarea = document.createElement("textarea");
        textarea.setAttribute("maxlength", "100");
        textarea.setAttribute("oninput", "autoResize(this)");
        textarea.classList.add("input-ajustada");
        textarea.classList.add("celdaClickNull");
        celda.classList.add("padre");
        celda.appendChild(textarea);
      }
    }
  }
  ActualizarSelectFilas();
}
btnAggFila.addEventListener("click", AggFila);

// -------------- //
// Eliminar Filas //
// -------------- //
btnDelFila.addEventListener("click", function() {
  // Eliminar una fila de la tabla
  if (filas > 1) {
    tblBody.deleteRow(-1);
    filas--;
  }
  ActualizarSelectFilas();
});

// ---------------- //
// Agregar Columnas //
// ---------------- //
btnAggColumna.addEventListener("click", function() {
  let contBool = 0;
  if(boolTitleCols == true){
    contBool = 1;
  }
  else{
    contBool = 0;
  }
  // Agregar una columna a la tabla
  if (columnas < 10) {
    columnas++;
    for (var i = 0; i <= filas + boolTitleCols; i++) {
      var celda = tblBody.rows[i].insertCell();
      if (i === 0) {
        celda.classList.add("coordenadas");
        var textoCelda = document.createTextNode(String.fromCharCode(64 + columnas));
        celda.appendChild(textoCelda);
        i = i + boolTitleCols;
      } else {
        var textarea = document.createElement("textarea");
        textarea.setAttribute("maxlength", "100");
        textarea.setAttribute("oninput", "autoResize(this)");
        textarea.classList.add("input-ajustada");
        textarea.classList.add("celdaClickNull");
        celda.classList.add("padre");
        celda.appendChild(textarea);
      }
    }
  }
  aggMainTitle();
  aggMainTitle();
  ActualizarSelectColumnas();
});

// --------------- //
// elimina Columna //
// --------------- //
btnDelColumna.addEventListener("click", function() {
  let contBool = 0;
  if(boolTitleCols == true){
    contBool = 1;
  }
  else{
    contBool = 0;
  }
  // Eliminar una columna de la tabla
  if (columnas > 1) {
    for (var i = 0; i <= filas + contBool; i++) {
      if(i == 1){
        i = i + contBool;
      }
      tblBody.rows[i].deleteCell(-1);
    }
    columnas--;
  }
  aggMainTitle();
  aggMainTitle();
  ActualizarSelectColumnas();
});

// ---------------- //
// AGREGAR SUBFILAS //
// ---------------- //
    //funcion de hacer subfilas en columna A
    function agregarSubfila() {
      let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }

      // Obtener el número de la fila donde se quiere agregar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;

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
        var textareaNuevo = document.createElement("textarea");
        textareaNuevo.setAttribute("maxlength", "100");
        textareaNuevo.setAttribute("oninput", "autoResize(this)");
        textareaNuevo.classList.add("input-ajustada");
        textareaNuevo.classList.add("celdaClickNull");
        celdaNueva.appendChild(textareaNuevo);
      } else {
        // Si no existe una tabla anidada, ocultar el input dentro de la segunda celda y crear una nueva tabla anidada en esta celda
        var celda = hilera.cells[1];
        var textarea = celda.querySelector("textarea");
        textarea.classList.add("tabla-inputfilaTema");
        if (textarea) {
          textarea.style.display = "none";
         }
        celda.style.padding = "0px";
        var tablaAnidada = document.createElement("table");
        tablaAnidada.classList.add("tabla-filasTema");
        tablaAnidada.style.width = "100%";
        var hilera1 = tablaAnidada.insertRow();
        var hilera2 = tablaAnidada.insertRow();
        var celda1 = hilera1.insertCell();
        celda1.rowSpan = 50;
        celda1.classList.add("celda-ajustada", "col-6");
        var textarea1 = document.createElement("textarea");
        textarea1.setAttribute("maxlength", "100");
        textarea1.setAttribute("oninput", "autoResize(this)");
        textarea1.classList.add("input-ajustada");
        textarea1.classList.add("celdaClickNull");
        celda1.appendChild(textarea1);
        var celda2 = hilera1.insertCell();
        celda2.classList.add("celda-ajustada");
        var textarea2 = document.createElement("textarea");
        textarea2.setAttribute("maxlength", "100");
        textarea2.setAttribute("oninput", "autoResize(this)");
        textarea2.classList.add("input-ajustada");
        textarea2.classList.add("celdaClickNull");
        celda2.appendChild(textarea2);
        var celda3 = hilera2.insertCell();
        celda3.classList.add("celda-ajustada");
        var textarea3 = document.createElement("textarea");
        textarea3.setAttribute("maxlength", "100");
        textarea3.setAttribute("oninput", "autoResize(this)");
        textarea3.classList.add("input-ajustada");
        textarea3.classList.add("celdaClickNull");
        celda3.appendChild(textarea3);
        celda.appendChild(tablaAnidada);
      }
      
      for(k = 1; k <= columnas; k++){
        hilera.cells[k].style.padding = "0px";
      }
    }

    //hacer subfilas completas
    document.querySelector(".add-subfila").addEventListener("click", function() {
      let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }
      // Obtener los valores de los campos de entrada
      var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;
      var columna = document.querySelector(".form-subfila2").value;

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 + contBool || fila > filas) {
        alert("Por favor ingresa un número de fila válido, elegiste la fila: " + fila);
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
          var textarea = document.createElement("textarea");
          textarea.setAttribute("maxlength", "100");
          textarea.setAttribute("oninput", "autoResize(this)");
          textarea.classList.add("input-ajustada");
          textarea.classList.add("celdaClickNull");
          celdaAnidada.appendChild(textarea);
          hileraAnidada.appendChild(celdaAnidada);
          tblBodyAnidado.appendChild(hileraAnidada);

          tablaAnidada.appendChild(tblBodyAnidado);
          celdaExistente.appendChild(tablaAnidada);
        }
      }
    });

// ---------------- //
// ELIMINA SUBFILAS //
// ---------------- //
    //funcion de eliminar subfilas en columna A
    function eliminarSubfila() {
      let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }

      // Obtener el número de la fila donde se quiere eliminar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;

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

    //eliminar subfilas completas
    // Agregar un controlador de eventos al botón para que llame a la función eliminarSubfilaCompleta cuando se presione el botón
    document.querySelector(".del-subfila").addEventListener("click", eliminarSubfilaCompleta);
    function eliminarSubfilaCompleta() {
      let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }
      // Obtener el número de la fila donde se quiere eliminar la subfila
      var fila = parseInt(document.querySelector(".form-subfila1").value) + contBool;
      var columna =  document.querySelector(".form-subfila2").value;

      // Verificar que el valor del input sea un número válido
      if (isNaN(fila) || fila < 1 + contBool || fila > filas) {
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
        hilera.cells[k].style.padding = "0.5rem 0.5rem";
      }
    }

    
  // ------------------- //
  // AGREGAR SUBCOLUMNAS //
  // ------------------- //
  function agregarSubcolumna(col) {
    let contBool = 0;
    if(boolTitleCols == true){
      contBool = 1;
    }
    else{
      contBool = 0;
    }

    // Obtener la tabla y la columna donde se quiere agregar la subcolumna
    var tabla = document.querySelector(".tabla__tabla");
    var celda = tabla.rows[1 + contBool].cells[col];
  
    // Verificar si ya existe una tabla anidada en la celda
    var tablaAnidada = celda.querySelector("table");
    
    if (tablaAnidada) {
      // Si ya existe una tabla anidada, agregar una nueva celda a la segunda fila de esta tabla
      var celdaNueva = tablaAnidada.rows[1].insertCell();
      celdaNueva.classList.add("celda-ajustada-cols");
      
      var textareaNuevo = document.createElement("textarea");
      textareaNuevo.setAttribute("maxlength", "100");
      textareaNuevo.setAttribute("oninput", "autoResize(this)");
      textareaNuevo.classList.add("input-ajustada");
      textareaNuevo.classList.add("celdaClickNull");
      celdaNueva.appendChild(textareaNuevo);
      celdaNueva.style.width = "2.5rem";
      tablaAnidada.style.width = "100%";
  
      // Ajustar el colSpan de la primera celda de la tabla anidada
      tablaAnidada.rows[0].cells[0].colSpan += 1;
    } else {
      // Si no existe una tabla anidada, ocultar el input dentro de la celda y crear una nueva tabla anidada en esta celda
      var textarea = celda.querySelector("textarea");
      textarea.classList.add("tabla-inputfilaTema");
      if (textarea) {
        textarea.style.display = "none";
      }
      celda.style.padding = "0px";
      var tablaAnidada = document.createElement("table");
      var hilera1 = tablaAnidada.insertRow();
      var hilera2 = tablaAnidada.insertRow();
      var celda1 = hilera1.insertCell();
      celda1.colSpan = 4;
      celda1.classList.add("celda-ajustada-cols", "col-6");
      var textarea1 = document.createElement("textarea");
      textarea1.setAttribute("maxlength", "100");
      textarea1.setAttribute("oninput", "autoResize(this)");
      textarea1.classList.add("input-ajustada");
      textarea1.classList.add("celdaClickNull");
      celda1.appendChild(textarea1);
      for (var i = 0; i < 2; i++) {
        var celdaNueva = hilera2.insertCell();
        celdaNueva.classList.add("celda-ajustada-cols");
        celdaNueva.style.width = "2.5rem";
        tablaAnidada.style.width = "100%";
        var textareaNuevo = document.createElement("textarea");
        textareaNuevo.setAttribute("maxlength", "100");
        textareaNuevo.setAttribute("oninput", "autoResize(this)");
        textareaNuevo.classList.add("input-ajustada");
        textareaNuevo.classList.add("celdaClickNull");
        celdaNueva.appendChild(textareaNuevo);
      }
      celda.appendChild(tablaAnidada);
    }
  }
  
  function recorridoSubcolumnas(col){
    let contBool = 0;
    if(boolTitleCols == true){
      contBool = 1;
    }
    else{
      contBool = 0;
    }
    // Recorrer cada celda de la columna especificada
    for (var i = 2 + contBool; i <= filas + contBool; i++) {
      var celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
      celda.style.padding = "0px";
      celda.style.border = "none";
      celda.style.flexDirection = "column";
      celda.style.display = "flex";

      // Verificar si ya existe una tabla en la celda
      var tablaExistente = celda.querySelector("table");
      if (tablaExistente) {
        // Si ya existe una tabla, agregar un nuevo td con un textarea dentro a la primera fila de esta tabla
        var trExistente = tablaExistente.rows[0];
        var tdNuevo = document.createElement("td");
        tdNuevo.classList.add("celda-ajustada-colms");
        var textareaNuevo = document.createElement("textarea");
        textareaNuevo.setAttribute("maxlength", "100");
        textareaNuevo.setAttribute("oninput", "autoResize(this)");
        textareaNuevo.classList.add("input-ajustada");
        textareaNuevo.classList.add("celdaClickNull");
        tdNuevo.appendChild(textareaNuevo);
        trExistente.appendChild(tdNuevo);
      } else {
        // Ocultar el input existente en la celda
        var textAreaExistente = celda.querySelector("textarea");
        textAreaExistente.style.display = "none";
        var tabla = document.createElement("table");
        var tr = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
          var td = document.createElement("td");
          td.classList.add("celda-ajustada-colms");
          var textareaNuevo = document.createElement("textarea");
          textareaNuevo.setAttribute("maxlength", "100");
          textareaNuevo.setAttribute("oninput", "autoResize(this)");
          textareaNuevo.classList.add("input-ajustada");
          textareaNuevo.classList.add("celdaClickNull");
          td.appendChild(textareaNuevo);
          tr.appendChild(td);
        }
        tabla.appendChild(tr);
        celda.appendChild(tabla);
      }
    }
   }
  
   document.querySelector(".add-subcolumna").addEventListener("click", function() {
    // Obtener el valor del campo de entrada
    var columna = document.querySelector(".form-subcolumna1").value;
    var fila = document.querySelector(".form-subcolumna2").value;
  
    // Verificar que el valor del input sea un número válido
    if (columna.charCodeAt(0) - 64 < 1 || columna.charCodeAt(0) - 64 > columnas) {
      alert("Por favor ingresa una columna válida, elegiste la: " + (columna.charCodeAt(0) - 64));
      return;
    }
    
    // Verificar que el valor del input sea un número válido
    if (isNaN(fila) || fila < 1 || fila > filas) {
      alert("Por favor ingresa un número de fila válido");
      return;
    }

    if(fila == 1)
    {
      agregarSubcolumna(columna.charCodeAt(0) - 64);
      // Recorrer cada celda de la columna especificada
      recorridoSubcolumnas(columna);
    }

    if(fila == 2){
      recorridoSubcolumnas(columna);
    }
  });
  
// -------------------- //
// ELIMINAR SUBCOLUMNAS //
// -------------------- //

  //eliminar subcolumnas completas
  document.querySelector(".del-subcolumna").addEventListener("click", function() {
    // Obtener el valor del campo de entrada
    var columna = document.querySelector(".form-subcolumna1").value;
    let fila = document.querySelector(".form-subcolumna2").value;

    // Verificar que el valor del input sea un número válido
    if (columna.charCodeAt(0) - 64 < 1 || columna.charCodeAt(0) - 64 > columnas) {
      alert("Por favor ingresa una columna válida, elegiste la: " + (columna.charCodeAt(0) - 64));
      return;
    }

    //Realizar recorridos dependiendo de la fila
    if (fila == 1){
      recorridoSubcolumnasDel(columna);
      subcolumnaFila1Del(columna);
    }
    else if (fila == 2){
      recorridoSubcolumnasDel(columna);
    }
    
  });
  
  //recorrido subcolumnas eliminacion
  function recorridoSubcolumnasDel(col){
    let contBool = 0;
    if(boolTitleCols == true){
      contBool = 1;
    }
    else{
      contBool = 0;
    }

    // Recorrer cada celda de la columna especificada
    for (var i = 2 + contBool; i <= filas + contBool; i++) {
      let celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
  
      // Verificar si ya existe una tabla anidada en la celda
      let tablaAnidada = celda.querySelector("table");
      if (tablaAnidada) {
        // Si ya existe una tabla anidada, eliminar el último td de la primera fila de esta tabla
        let trExistente = tablaAnidada.rows[0];
        trExistente.removeChild(trExistente.lastChild);
  
        // Si no hay más td en la primera fila, eliminar la tabla anidada y mostrar el textarea existente en la celda
        if (trExistente.childNodes.length === 1) {
          celda.removeChild(tablaAnidada);
          let textareaExistente = celda.querySelector("textarea");
          textareaExistente.style.display = "block";
          celda.style.padding = "0.5rem 0.5rem";
          celda.style.border = "1px solid black";
          celda.style.display = "";
        }
      }
    }
  }
  
  // eliminacion de la fila 1 segun x columna
  function subcolumnaFila1Del(col) {
    let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }

    // Recorrer cada celda de la columna especificada
    for (var i = 1; i <= filas; i++) {
      let celda = tblBody.rows[i].cells[col.charCodeAt(0) - 64];
  
      // Verificar si ya existe una tabla anidada en la celda
      let tablaAnidada = celda.querySelector("table");
      if (tablaAnidada) {
        // Si ya existe una tabla anidada, eliminar el último td de la segunda fila de esta tabla
        let trExistente = tablaAnidada.rows[1];
        trExistente.removeChild(trExistente.lastChild);
  
        // Si no hay más td en la segunda fila, eliminar la tabla anidada y mostrar el textarea existente en la celda
        if (trExistente.childNodes.length === 1) {
          celda.removeChild(tablaAnidada);
          let textareaExistente = celda.querySelector("textarea");
          textareaExistente.style.display = "block";
        }
      }
    }
  };
  
  //------------------------------------- //
  //  Funcion de autorecise del textarea  // 
  //------------------------------------- //
  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // ---------------------------------------- //
  //  Funcion de selects de filas y columnas  //
  // ---------------------------------------- //
  function ActualizarSelectFilas(){
    var TitleCont = 0;
    // Seleccionar el elemento 
    const selector = document.querySelector(".form-subfila1");
    selector.innerHTML = "";
    let option = document.createElement("option");
    option.value = 0;
    option.text = "";
    selector.appendChild(option);
    // Si hay un elemento titulo adecuarlo a la tabla
    if (boolTitleCols == true){
      TitleCont = 1;
      let option = document.createElement("option");
      option.value = 0;
      option.text = "T";
      selector.appendChild(option);
    }
    else{
      TitleCont = 0;
    }

    // agregar las opciones de filas al select
    for (var i = 1; i <= filas; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = i;
      selector.appendChild(option);
    }
  }

  function ActualizarSelectColumnas(){
    
    // Seleccionar el elemento 
    let selector = document.querySelector(".form-subcolumna1");
    selector.innerHTML = "";
    let option = document.createElement("option");
    option.value = 0;
    option.text = "";
    selector.appendChild(option);
    // agregar las opciones de filas al select
    for (var i = 1 ; i <= columnas; i++) {
      let option = document.createElement("option");
      option.value = (String.fromCharCode(64 + i));
      option.text = (String.fromCharCode(64 + i));
      selector.appendChild(option);
    }
  }

  // ----------------------- //
  //  Funcion de main title  //
  // ----------------------- //
  function aggMainTitle(evento) {
    if(evento !== 0){
      let contBool = 0;
      if(boolTitleCols == true){
        contBool = 1;
      }
      else{
        contBool = 0;
      }
      evento.value = evento.textContent;
      if (filas < 100 && !evento.classList.contains("coordenadas__T")) {
        var hilera = document.createElement("tr");
        for (var j = 0; j <= 1; j++) {
          var celda = document.createElement("td");
          if (j === 0) {
            celda.classList.add("coordenadas", "coordenadas__fila", "coordenadas__T");
            var textoCelda = document.createTextNode(evento.value);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          } else {
            // Establecer el atributo colspan de la celda en el número de columnas de la tabla
            celda.setAttribute("colspan", columnas + 1);
          
            // Crear un nuevo textarea y agregarlo a la celda
            var textarea = document.createElement("textarea");
            textarea.setAttribute("maxlength", "100");
            textarea.setAttribute("oninput", "autoResize(this)");
            textarea.classList.add("input-ajustada");
            textarea.classList.add("celdaClickNull" , "MainTitle");
            celda.appendChild(textarea);  
            // Agregar la celda a la fila y la fila al cuerpo de la tabla
            let spot = parseInt(evento.value) + contBool;
            hilera.appendChild(celda);
            tblBody.deleteRow(spot);
            tblBody.insertBefore(hilera, tblBody.rows[spot]);
          }
        }
      }
      else if (filas < 100 && evento.classList.contains("coordenadas__T")){
        // Funcion de eliminacion de titulo
        // Obtener la fila que contiene la celda del título
        let spot = parseInt(evento.value) + contBool;
        var fila = tblBody.rows[spot];

        // Verificar si la fila existe y si contiene la celda del título
        if ((fila && fila.cells.length > 1) && evento.classList.contains("coordenadas__T")) {
          // Eliminar la fila que contiene la celda del título
          tblBody.deleteRow(spot);

            // Agregar una fila a la tabla
              var hilera = tblBody.insertRow(spot);
              for (var j = 0; j <= columnas; j++) {
                var celda = hilera.insertCell();
                if (j === 0) {
                  celda.classList.add("coordenadas", "coordenadas__fila");
                  var textoCelda = document.createTextNode(evento.value);
                  celda.appendChild(textoCelda);
                } else {
                  var textarea = document.createElement("textarea");
                  textarea.setAttribute("maxlength", "100");
                  textarea.setAttribute("oninput", "autoResize(this)");
                  textarea.classList.add("input-ajustada");
                  textarea.classList.add("celdaClickNull");
                  celda.classList.add("padre");
                  celda.appendChild(textarea);
              }
            }
            
            ActualizarSelectFilas();
            }
          }
    }
    else{
      if (filas < 100 && boolTitleCols == false) {
        boolTitleCols = true;
        var hilera = document.createElement("tr");
        for (var j = 0; j <= 1; j++) {
          var celda = document.createElement("td");
          if (j === 0) {
            celda.classList.add("coordenadas", "coordenadas__0T");
            var textoCelda = document.createTextNode("T");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          } else {
            // Establecer el atributo colspan de la celda en el número de columnas de la tabla
            celda.setAttribute("colspan", columnas + 1);
          
            // Crear un nuevo textarea y agregarlo a la celda
            var textarea = document.createElement("textarea");
            textarea.setAttribute("maxlength", "100");
            textarea.setAttribute("oninput", "autoResize(this)");
            textarea.classList.add("input-ajustada");
            textarea.classList.add("celdaClickNull" , "MainTitle");
            celda.appendChild(textarea);  
            // Agregar la celda a la fila y la fila al cuerpo de la tabla
            hilera.appendChild(celda);
            tblBody.insertBefore(hilera, tblBody.rows[1]);
          }
        }
      }
      else if (filas < 100 && boolTitleCols == true){
        // Funcion de eliminacion de titulo
        // Obtener la fila que contiene la celda del título
        var fila = tblBody.rows[1];
  
        // Verificar si la fila existe y si contiene la celda del título
        if (fila && fila.cells.length > 1) {
          // Eliminar la fila que contiene la celda del título
          tblBody.removeChild(fila);
          boolTitleCols = false;
        }
      }
    }
    ActualizarSelectFilas();
  }

  // Obtener el elemento tablaPadre que contiene todos los textareas
  let tablaPrincipal = document.querySelector(".tabla__tabla");
  const contextMenu = document.querySelector('#contextMenu');
  // Variables para almacenar el tiempo de inicio y fin del clic
  let tiempoStart = 0;
  let tiempoEnd = 0;

  var ValueEvent = 0;
  
  // ---------------------------------------------------- //
  // Funcion para que funcione en moviles de misma manera //
  // Agregar un controlador de eventos touchstart al elemento padre
  tablaPrincipal.addEventListener("touchstart", function(e) {
    // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
    if (e.target.classList.contains("coordenadas")) {
      // Establecer el tiempo de inicio del clic
      tiempoStart = new Date().getTime();
    }
  });

  // Agregar un controlador de eventos touchend al elemento padre
  tablaPrincipal.addEventListener("touchend", function(e) {
    // Verificar si el elemento que se hizo clic es un textarea con la clase "celdaClickNull"
    if (e.target.classList.contains("coordenadas")) {
      // Establecer el tiempo de fin del clic
      tiempoEnd = new Date().getTime();

      // Verificar si el tiempo transcurrido entre los dos eventos es mayor a 3 segundos
      if (tiempoEnd - tiempoStart > 200) {
        if (event.target.classList.contains("coordenadas__fila") ) {
          let textarea = event.target;
          textarea.value = textarea.textContent;
          ValueEvent = textarea;
            event.preventDefault();
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.display = 'block';
          
        }
      }
    }
  });

  tablaPrincipal.addEventListener('contextmenu', (event) => {
    if (event.target.classList.contains("coordenadas__fila") ) {
      let textarea = event.target;
      textarea.value = textarea.textContent;
      ValueEvent = textarea;
        event.preventDefault();
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.display = 'block';
      
    }
  });
  document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

const liTitleDinamico = document.querySelector(".TitleFormation");

liTitleDinamico.addEventListener("click",() => {
  console.log(ValueEvent);
  aggMainTitle(ValueEvent);
})