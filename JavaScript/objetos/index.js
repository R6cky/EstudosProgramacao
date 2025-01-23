// declaração literal
const pessoa = {
  nome: "cleyton",
  sobrenome: "frizzer",
  idade: "35",
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);

//Declaração com contructor
const pessoa2 = new Object();
pessoa2.falarnome = function () {
  return "Falando...";
};
console.log(pessoa2.falarnome());

//Travar/ bloquear objetos para

Object.freeze(pessoa);

pessoa.nasciment = "24/05/1985";

console.log(pessoa.nasciment);
