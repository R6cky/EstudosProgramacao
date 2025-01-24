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

  Object.defineProperties(this, {
    processador: {
      value: "100",
      enumerable: true,
      writable: true,
      configurable: false,
    },
    ram: {
      value: "100",
      enumerable: true,
      writable: true,
      configurable: false,
    },
  });
}

const mynotebook = new Notebook("i7", "16");
mynotebook.estoque = "456";
delete mynotebook.estoque;
console.log(mynotebook);

class School {
  constructor(name, color) {
    this._name = name;
    this._color = color;

    Object.defineProperty(this, "address", {
      value: "Rua K, Bairro Z", // seta um valor para o ADDRESS
      writable: false, // Define se podemos mudar seu valor OU não
      configurable: true, // Define se podemos deletr a propriedade
      enumerable: false, // Define se ela será listada no obj OU não [ Fiz o teste com Object.keys e a chave não apareceu]
    });
  }

  address = "Rua A - bairro y";

  materias = function () {
    return `Matérias indisponíveis na escola ${this._name}`;
  };
}

const school = new School("EMAF", "RED");
school.address = "RUA MALAFAIA, BAIRRO ASSEMBLÉIA";
console.log(school.materias());
console.log(school.address);
console.log(Object.keys(school));

for (let key in school) {
  console.log(key); // não lista o "address" pois, está configurado para não ser listado
}
