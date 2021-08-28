// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim

var nome = "             Lucas           ";

var nomeTrim = nome.trim();

console.log(nome);


// split

console.log(frase.split(" "));

var tags = "PHP, javascript, html, css";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));