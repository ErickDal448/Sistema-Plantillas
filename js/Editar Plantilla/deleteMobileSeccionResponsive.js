var el1 = document.querySelector('.div__SeccionesMobibles');
var sortable1 = Sortable.create(el1, {
  group: 'shared'
});

var el2 = document.querySelector('.menu__agregarplantilla');
var sortable2 = Sortable.create(el2, {
  group: 'shared',
  onAdd: function (evt) {
    var itemEl = evt.item;
    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
      // Eliminar el elemento
      itemEl.parentNode.removeChild(itemEl);
    } else {
      // Devolver el elemento a su posición original
      evt.from.insertBefore(itemEl, evt.from.children[evt.oldIndex]);
    }
  }
});
