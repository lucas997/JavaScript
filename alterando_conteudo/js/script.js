// selecionar elemento

var title = document.querySelector("#title");

// inner html
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";