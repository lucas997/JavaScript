let pessoa = {
    nome: "Lucas",
    idade: 23,
    falar: function() {
      console.log("Olá, tudo bem?");  
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

console.log(pessoa.asd);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);