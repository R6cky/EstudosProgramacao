// declaração literal
const pessoa = {
  nome: "cleyton",
  sobrenome: "frizzer",
  idade: "35",
};

//Declaração com contructor
const pessoa2 = new Object();
pessoa2.falarnome = function () {
  return "Falando...";
};
console.log(pessoa2.falarnome());

Object.freeze(pessoa); //Travar/ bloquear

pessoa.nasciment = "24/05/1985";

console.log(pessoa.nasciment); // O valor do objeto continua o mesmo.

//=============================================================================================
//=============================================================================================

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

//=============================================================================================
//=============================================================================================

//=============================================================================================
//=============================================================================================

// Travando de forma personalizada um objeto na CONTRUCTOR FUNCTION

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
      value: "i7 10700T",
      enumerable: true,
      writable: false,
      configurable: false,
    },
    ram: {
      value: "32GB",
      enumerable: true,
      writable: true,
      configurable: false,
    },
  });
}

const mynotebook = new Notebook("i7", "16");
mynotebook.estoque = "456";
mynotebook.processador = "QUALQUER UM";
delete mynotebook.estoque;
console.log(mynotebook);

console.log(Object.keys(mynotebook));
for (let k in mynotebook) {
  console.log(k);
}

//=============================================================================================
//=============================================================================================
// Utilizando DEFINEPROPERTY em uma classe

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

//=============================================================================================
//=============================================================================================

function Apartamento(metrosQuadrados, quantComodos, preco) {
  this.metrosQuadrados = metrosQuadrados;
  this.quantComodos = quantComodos;
  this.preco = preco;

  Object.defineProperty(this, "metrosQuadrados", {
    configurable: true,
    enumerable: false,
    get: function () {
      return metrosQuadrados;
    },
    set: function (valor) {
      return valor;
    },
  });
}

const apartamento = new Apartamento("56", "8", "150000");

console.log(apartamento, "GET=", apartamento.metrosQuadrados);
console.log((apartamento.metrosQuadrados = "DFDF"));
//=============================================================================================
//=============================================================================================
// Utilizando GET E SETTER na função de fábrica | Factory fuctions

function monitor(marca, preco, tamanhoDaTela) {
  return {
    marca: marca,
    preco: preco,
    tamanhoDaTela: tamanhoDaTela,
    mostraDados() {
      console.log(this.marca, this.preco, this.tamanhoDaTela);
    },

    get marca() {
      return marca;
    },

    set marca(valor) {
      if (typeof valor == "number") {
        console.log("Tipo de dado inválido");
        return;
      }
      marca = valor;
    },
  };
}

let meuMonitor = monitor("Concórdia", "985.99", '"27"');
meuMonitor.marca = "Samsumg";
meuMonitor.mostraDados();
meuMonitor.marca = 123;
meuMonitor.mostraDados();

//=============================================================================================
//=============================================================================================

//MÉTODOS UTEIS PARA OBJ

const produto = { nome: "caneca", preco: 1.8 };
produto.nome = "mesa";
const novoProduto = produto; // NÃO copia somente aponta/linka.
console.log(novoProduto); // { nome: 'mesa', preco: 1.8 }

//1
const newProduct = { ...produto }; // COPIA de fato o OBJ
produto.name = "teclado";
console.log(newProduct);
newProduct.available = true;

//2 Object.assign()

const persona = { nome: "Edmar", idade: 36, sexo: "masculino" };
const newPersona = Object.assign({}, persona);
console.log(newPersona);
//=============================================================================================

//PEGANDO APENAS ALGUMAS PROPRIIEDADES DO OBJ

const onlyInformation = { nome: pessoa.nome };
console.log(onlyInformation);

//=============================================================================================

//Pegando as chaves do OBJ Object.keys()
console.log(Object.keys(pessoa)); // Retorna um array com as chaves

//=============================================================================================

//Pegando os valores do obj
//Object.values(pessoa); -> Retorna um array

//=============================================================================================

//CONGELANDO/TRAVANDO Objetos Object.freeze()
Object.freeze(pessoa); // Não é possível alterar valores do obj

//=============================================================================================

//Definir configurações nas Propriedades do OBJ
//Object.defineProperties
//Object.defineProperty

//=============================================================================================

//VISUALIZAR configuração das propriedades do obj
//Object.getOwnPropertyDescriptor(pessoa, "nome") ->  configurable, writeable, etc...

//=============================================================================================

//Object.entries(); // Pegando chaves e valores em formato de arrays

// for (let i = 0; i < Object.entries(persona).length; i++) {
//   for (let j = 0; j < Object.entries(persona)[i].length; j++) {
//     console.log(Object.entries(persona)[i][j]);
//   }
// }

//const k = Object.entries(pessoa);
// for (let i = 0; i < k.length; i++) {
//   for (let j = 0; j < k[i].length; j++) {
//     console.log(k[i][j]);
//   }
// }
