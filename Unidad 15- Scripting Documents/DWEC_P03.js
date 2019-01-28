window.onload = function () {
    remplazarHref('http', 'https');
    marcarImportantes();
  };

  var body = document.body;
  var enlaces = body.querySelectorAll('a');

 function remplazarHref(texto, remplazo) {

     enlaces.forEach( enlace => {
         enlace.href = enlace.href.replace(texto, remplazo);
     });    
 }

 function resaltarImportante(elemento) {
    elemento.setAttribute('class', 'resaltar');
 }

 function marcarNormal(elemento) {
    elemento.setAttribute('class', 'normal');
 }

 function marcarImportantes() {
     var indiceImportante = 0;
     enlaces.forEach( enlace => {
        if (enlace.getAttribute('class') && enlace.getAttribute('class').includes('importante')) {
            resaltarImportante(enlace);
            nameImportant(enlace, 'importante'+indiceImportante);
            indiceImportante ++;
        } else {
            marcarNormal(enlace);
        }
     })
 }

 function nameImportant(enlace, nombre) {
     enlace.setAttribute('name', nombre);
 }