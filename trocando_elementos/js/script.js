// criar elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("este é o texto do h3");

el.appendChild(texto);

console.log(el);

// selecionar o elemento que eu quero trocar

var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el

var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);