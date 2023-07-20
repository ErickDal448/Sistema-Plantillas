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

//hacer subfilas
// Crear una variable para llevar un seguimiento de si ya se ha agregado la tabla anidada vertical
var tablaAnidadaVerticalAgregada = false;

document.querySelector(".add-subfila").addEventListener("click", function() {
  // Obtener los valores de los campos de entrada
  var fila = document.querySelector(".form-subfila1").value;
  var columna = document.querySelector(".form-subfila2").value;

  // Verificar si la columna es "A" o "B"
  if (columna === "A" || columna === "B") {
    // Convertir la letra de la columna en un índice numérico
    var columnaIndice = columna.charCodeAt(0) - 64;

    // Obtener la fila existente
    var filaExistente = tblBody.rows[fila];

    // Recorrer cada celda de la fila existente
    for (var i = columnaIndice; i <= columnas; i++) {
      var celdaExistente = filaExistente.cells[i];
      celdaExistente.classList.add("celda-anidada"); // Agregar una clase a la celda que contiene una tabla anidada

      // Crear una tabla anidada dentro de la celda existente
      var tablaAnidada = document.createElement("table");
      tablaAnidada.classList.add("tabla-anidada"); // Agregar una clase a la tabla anidada para aplicar estilos
      var tblBodyAnidado = document.createElement("tbody");

      // Agregar una hilera anidada vertical si la columna es "A" y es la primera tabla anidada
      if (columna === "A" && !tablaAnidadaVerticalAgregada) {
        var hileraAnidada = document.createElement("tr");
        var celdaAnidada = document.createElement("td");
        var input = document.createElement("input");
        input.type = "text";
        celdaAnidada.appendChild(input);
        hileraAnidada.appendChild(celdaAnidada);
        tblBodyAnidado.appendChild(hileraAnidada);
        tablaAnidadaVerticalAgregada = true;
      } else {
        // Agregar una hilera anidada horizontal
        var hileraAnidada = document.createElement("tr");
        var celdaAnidada = document.createElement("td");
        var input = document.createElement("input");
        input.type = "text";
        celdaAnidada.appendChild(input);
        hileraAnidada.appendChild(celdaAnidada);
        tblBodyAnidado.appendChild(hileraAnidada);
      }

      tablaAnidada.appendChild(tblBodyAnidado);
      celdaExistente.appendChild(tablaAnidada);
    }
  }
});














// // Obtener la referencia de los botones y campos de entrada de la configuracion de subfilas y subcolumnas
// var btnAddSubcolumna = document.querySelector(".add-subcolumna");
// var btnDelSubcolumna = document.querySelector(".del-subcolumna");
// var inputSubcolumna = document.querySelector(".form-subcolumna1");
// var inputFilaSubcolumna = document.querySelector(".form-subcolumna2");

// var btnAddSubfila = document.querySelector(".config--Filas .btn__add");
// var btnDelSubfila = document.querySelector(".config--Filas .btn__cancel");
// var inputSubfila = document.querySelector(".form-subfila1");
// var inputColumnaSubfila = document.querySelector(".form-subfila2");

// // Agregar un controlador de eventos a cada botón
// btnAddSubcolumna.addEventListener("click", function() {
//   // Agregar una subcolumna a la tabla
//   var columna = parseInt(inputSubcolumna.value);
//   var filaInicio = parseInt(inputFilaSubcolumna.value);
//   if (columna >= 1 && columna <= columnas && filaInicio >= 1 && filaInicio <= filas) {
//     for (var i = filaInicio; i <= filas; i++) {
//       var celda = tblBody.rows[i].insertCell(columna);
//       var input = document.createElement("input");
//       input.type = "text";
//       celda.appendChild(input);
//     }
//     columnas++;
//   }
// });

// btnDelSubcolumna.addEventListener("click", function() {
//   // Eliminar una subcolumna de la tabla
//   var columna = parseInt(inputSubcolumna.value);
//   if (columna >= 1 && columna <= columnas) {
//     for (var i = 0; i <= filas; i++) {
//       tblBody.rows[i].deleteCell(columna);
//     }
//     columnas--;
//   }
// });

// btnAddSubfila.addEventListener("click", function() {
//   // Agregar una subfila a la tabla
//   var fila = parseInt(inputSubfila.value);
//   var columnaInicio = parseInt(inputColumnaSubfila.value);
//   if (fila >= 1 && fila <= filas && columnaInicio >= 1 && columnaInicio <= columnas) {
//     var hilera = tblBody.insertRow(fila + 1);
//     for (var j = 0; j < columnaInicio; j++) {
//       var celda = hilera.insertCell();
//       if (j === 0) {
//         celda.classList.add("coordenadas");
//         var textoCelda = document.createTextNode("");
//         celda.appendChild(textoCelda);
//       }
//     }
//     for (var j = columnaInicio; j <= columnas; j++) {
//       var celda = hilera.insertCell();
//       var input = document.createElement("input");
//       input.type = "text";
//       celda.appendChild(input);
//     }
//     filas++;
//   }
// });

// btnDelSubfila.addEventListener("click", function() {
//   // Eliminar una subfila de la tabla
//   var fila = parseInt(inputSubfila.value);
//   if (fila >= 1 && fila <= filas) {
//     tblBody.deleteRow(fila);
//     filas--;
//   }
// });

// btnAddSubcolumna.addEventListener("click", function() {
//   // Agregar una subcolumna a la tabla
//   var columna = parseInt(inputSubcolumna.value);
//   var filaInicio = parseInt(inputFilaSubcolumna.value);
//   if (columna >= 1 && columna <= columnas && filaInicio >= 1 && filaInicio <= filas) {
//     if (filaInicio === 1) {
//       // Dividir la primera columna en dos
//       tblBody.rows[0].insertCell(columna);
//     }
//     for (var i = filaInicio; i <= filas; i++) {
//       var celda = tblBody.rows[i].insertCell(columna);
//       var input = document.createElement("input");
//       input.type = "text";
//       celda.appendChild(input);
//     }
//     columnas++;
//   }
// });

// btnAddSubfila.addEventListener("click", function() {
//   // Agregar una subfila a la tabla
//   var fila = parseInt(inputSubfila.value);
//   var columnaInicio = parseInt(inputColumnaSubfila.value);
//   if (fila >= 1 && fila <= filas && columnaInicio >= 1 && columnaInicio <= columnas) {
//     var hilera = tblBody.insertRow(fila + 1);
//     for (var j = 0; j <= columnas; j++) {
//       var celda = hilera.insertCell();
//       if (j === 0) {
//         celda.classList.add("coordenadas");
//         if (columnaInicio === 1) {
//           // Dividir la primera fila en dos
//           var textoCelda = document.createTextNode(fila + ".1");
//         } else {
//           var textoCelda = document.createTextNode("");
//         }
//         celda.appendChild(textoCelda);
//       } else if (j < columnaInicio) {
//         var input = document.createElement("input");
//         input.type = "text";
//         input.disabled = true;
//         celda.appendChild(input);
//       } else {
//         var input = document.createElement("input");
//         input.type = "text";
//         celda.appendChild(input);
//       }
//     }
//     filas++;
//   }
// });



