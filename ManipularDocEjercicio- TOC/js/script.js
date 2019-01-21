window.onload = function () {
    // aqui va toda la vaina xD
    var body = document.body;
    var toc = document.getElementById('TOC');
    if (!toc) {
        toc = document.createElement('div');
        toc.id = 'TOC';
        // var text = document.createTextNode('Prueba');
        // var title = document.createElement('p').appendChild(text);
        // toc.appendChild(title);
        body.insertBefore(toc, body.firstChild);
    }

    function addContentElement(element) {
        var text = document.createTextNode(element.innerText);
        var link = document.createElement('a');
        link.appendChild(text);
        link.href =  '#'+element.innerText;
        var content = document.createElement('div');
        content.className = "TOCEntry";
        content.appendChild(link);
        toc.appendChild(content);
    }

    var colection = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(colection);
    
    colection.forEach( title => {
        title.setAttribute('id', title.innerText);
        console.log(title);
        addContentElement(title);
    });
}