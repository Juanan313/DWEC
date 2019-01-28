window.onload = function () {
    body = document.body;

    getInfo();
    var info = prepareInfo();
    pintarInfo(info);
}


// obtener los datos para el ejercicio
function getInfo() {
    enlaces = contarElementos('a');
    parrafos = contarElementos('p');
    penultimoEnlace = enlaces[enlaces.length - 2];
    ultimoEnlace = enlaces[enlaces.length - 1];
    enlacesAJurassicPark = contarEnlacesA('http://www.jurassicpark.com/', enlaces);
    numeroEnlacesPar = contarElementosHijo(parrafos, 'a');

}
// añadir los daots al DOM
function pintarInfo (info) {
    var dataDiv = document.createElement('div');
    dataDiv.id = "dataDiv";
    var list = document.createElement('ul');
    info.forEach( text => {
        var li = document.createElement('li');
        li.innerHTML = text;
        list.appendChild(li);
    })

    dataDiv.appendChild(list);
    body.insertBefore(dataDiv, body.firstChild);
}

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
        numeroHijos += elemento.getElementsByTagName(tag).length;
    });
    console.log(numeroHijos);
    return numeroHijos;
}

function prepareInfo () {
    let info = [];

    info.push("Número de enlaces: "+enlaces.length);
    info.push("Número de parrafos: "+ parrafos.length);
    info.push("Penúñtimo enlace: "+penultimoEnlace);
    info.push("Último enlace: "+ultimoEnlace);
    info.push("Número de enlaces a http://jurassicpark.com : "+enlacesAJurassicPark);
    info.push("Número de enlaces en parrafos: "+numeroEnlacesPar);

    return info;
}