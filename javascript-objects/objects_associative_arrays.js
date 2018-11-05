
/**
 * object["property"] looks like array access, 
 * but to an array indexed by strings rather than by numbers.
 * .This kind of array is known as an associative array (or hash or map or dictionary).
 * JavaScript objects are associative arrays, and this section explains why that is important.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */

var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};

/**
 * Escribe aqui el código para mostrar en consola 
 * los valores de las propiedades del objeto book
 * utilizando un foe
 * 
 * Que notacion has utilizado? dot o []
 * Por que?
 */

function mostrarLogs(x) { 
   for ( let property in x) {
       console.log(x[property]);
       let y = x[property];
       if (typeof y  === 'object') {
          mostrarLogs(y);
       }
   }
 }
 /**
  * function mostrarLogs(x) { 
   Object.keys(x).foreach( (k, v))
 }
  */

 mostrarLogs(book);

 /* Se utilizan los [] por que a la hora de ejecutar este código el programa no conoce el nombre de las propiedas
 del objecto puesto que estas han sido escritas por el programador, de esta manera recorremos todas las keys de
 nuestro objeto y se lo pasamos a los brackets para así acceder a los datos de esta propiedad.  */

 /** Utilizando esta misma mecánica se puede acceder a los objetos "hijos" del objeto que estamos iterando volvemos a llamar 
  * a la misma funció para mostrar su contenido.
  */