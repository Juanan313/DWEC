window.onload = function () {

    // obtener los datos para el ejercicio
    var enlaces = contarElementos('a');
    var parrafos = contarElementos('p');
    var penultimoEnlace = enlaces[enlaces.length - 2];
    var ultimoEnlace = enlaces[enlaces.length - 1];
    var enlacesAJurassicPark = contarEnlacesA('http://www.jurassicpark.com/', enlaces);
    var numeroEnlacesPar = contarElementosHijo(parrafos, 'a');

    // añadir los daots al DOM
    var body = document.body;
    var dataDiv = document.createElement('div');
    dataDiv.id = "dataDiv";

    var list = document.createElement('ul');
    var li1 = document.createElement('li');
    li1.innerHTML = "Número de enlaces: "+enlaces.length;
    list.appendChild(li1);

    var li2 = document.createElement('li');
    li2.innerHTML = "Número de parrafos: "+ parrafos.length;
    list.appendChild(li2);

    var li3 = document.createElement('li');
    li3.innerHTML = "Penúñtimo enlace: "+penultimoEnlace;
    list.appendChild(li3);

    var li4 = document.createElement('li');
    li4.innerHTML = "Último enlace: "+ultimoEnlace;
    list.appendChild(li4);

    var li5 = document.createElement('li');
    li5.innerHTML = "Número de enlaces a http://jurassicpark.com : "+enlacesAJurassicPark;
    list.appendChild(li5);

    dataDiv.appendChild(list);
    body.insertBefore(dataDiv, body.firstChild);


    function contarElementos(tag) {
        return document.querySelectorAll(tag);
    }

    function contarEnlacesA(url, enlaces) {
        let numEnlaces = 0;
        enlaces.forEach( enlace => {
            if (enlace.href == url) {
                numEnlaces += 1;
            } 
        })
        return numEnlaces;
    }

    function contarElementosHijo (elementos, tag) {
        
        var numeroHijos = 0;
        elementos.forEach( elemento => {
            console.log(elemento);
        })

        return numeroHijos;
    }
    
}