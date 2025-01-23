// declaração literal
const pessoa = {
  nome: "cleyton",
  sobrenome: "frizzer",
  idade: "35",
};
//--------------------------------------------
//--------------------------------------------
function Carro(cor, portas) {
  this.cor = cor;
  this.portas = portas;
  Object.freeze(this); // Trava todo o objeto, fica imultável
}

const carro1 = new Carro("vermelha", "4 portas");
carro1.combustivel = "gasolina";
console.log(carro1);

console.log(pessoa.nome);
console.log(pessoa["nome"]);
//--------------------------------------------
//--------------------------------------------
//Declaração com contructor
const pessoa2 = new Object();
pessoa2.falarnome = function () {
  return "Falando...";
};
console.log(pessoa2.falarnome());

Object.freeze(pessoa); //Travar/ bloquear

pessoa.nasciment = "24/05/1985";

console.log(pessoa.nasciment); // O valor do objeto continua o mesmo.

//--------------------------------------------
//--------------------------------------------

// Travando de forma personalizada um objeto

function Notebook(processador, ram) {
  this.processador = processador;
  this.ram = ram;

  Object.defineProperty(this, "estoque", {
    value: "100",
    enumerable: true,
    writable: true,
    configurable: false,
  });
}

const mynotebook = new Notebook("i7", "16");
mynotebook.estoque = "456";
delete mynotebook.estoque;
console.log(mynotebook);
