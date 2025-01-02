const arrFunc = [
  {
    name: "Cleiton",
    cargo: "Developer",
  },
  {
    name: "Fabricoi",
    cargo: "Mecanico",
  },
  {
    name: "Helber",
    cargo: "Design",
  },
  {
    name: "Edna",
    cargo: "Developer",
  },
  {
    name: "Vilma",
    cargo: "Psicóloga",
  },
];

const arrFunc2 = [
  {
    name: "Leo",
    cargo: "Contador",
  },
  {
    name: "Robert",
    cargo: "Mecanico",
  },
  {
    name: "Elias",
    cargo: "Motorista",
  },
];

const arrFunc3 = [
  {
    name: "Vitor",
    cargo: "Contador",
  },
  {
    name: "Berenice",
    cargo: "Mecanico",
  },
  {
    name: "Mauro",
    cargo: "Motorista",
  },
];

// for (let i = 0; i <= arrFunc.length; i++) {
//   console.log(arrFunc[i].name, "-", arrFunc[i].cargo);
// }

const names = arrFunc.map((elemen) => {
  return elemen.name;
});

arrFunc.push(["Valéria"]);
arrFunc.push(10);

const concatMethod = arrFunc.concat(arrFunc2, arrFunc3);
console.log(concatMethod);

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const every = arrNumber.every((elemen) => typeof elemen == "number");
console.log(typeof "");
console.log(every);

const found = arrFunc.find((elem) => elem.name.length == 7);
console.log(found);

const foundIndex = arrFunc.findIndex(
  (elem) => elem.name.length == 8 || elem.cargo == "Developer"
);
console.log("foundIndex -> ", foundIndex);

const includes = arrNumber.includes(foundIndex + 9);
console.log(includes);

arrNumber.pop();
console.log(arrNumber);

arrNumber.shift();
console.log(arrNumber);

arrNumber.unshift(400);
console.log(arrNumber);

const some = arrFunc.some((elemen) => {
  return elemen.name == "Developer" || elemen.cargo == "Developer";
});
console.log(some);

console.log(arrFunc[0].name.split("").includes("C", "l"));

const sort = arrNumber.sort();
console.log(sort);

const slice = arrNumber.slice(3, 7);
console.log(slice);

const splice = slice.splice(1, 0, 401);
console.log(slice);

slice.splice(2, 3, 402);
console.log(slice);

slice.splice(0, 1);
console.log(slice);

//====================================================================================
//====================================================================================
//====================================================================================

//Simulando POP, PUSH, SHIFT, UNSHIFT

//SHIFT
const arrShift = ["leila", "carlos", "edna", "julia", "vander"];
arrShift.shift(); // remove o elemento do início do array
console.log(arrShift);

// Simulando o SHIFT com SPLICE
const arrShiftNovo = arrShift.splice(0, 1);
console.log(arrShift);
console.log(arrShiftNovo); // Elemento removido pelo SPLICE

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

const arrPop = ["leila", "carlos", "edna", "julia", "vander"];
//arrPop.pop() // remove último elemento com o POP
console.log(arrPop);

//Simulando o POP com o SPLICE
const arrPopNovo = arrPop.splice(-1, 1); // Remove último elemento com SPLICE
console.log(arrPop);

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

//PUSH

const arrPush = ["Chevrolet", "porshe", "BMW", "Honda"];

arrPush.push("BYD"); // Adicionando um elemento no final com PUSH
console.log(arrPush);

//Simulando o PUSH com SPLICE
const arrPushNovo = arrPush.splice(arrPush.length, 0, "FIAT");

console.log(arrPush);
console.log(arrPushNovo); // array com elementos que foram removidos

//UNSHIFT

const arrUnshift = ["Medicina", "TI", "Fisioterapia", "Biologia"];

console.log(arrUnshift);

arrUnshift.unshift("Mecanico");
console.log(arrUnshift);

//Simulando o UNSHIFT com o SPLICE

arrUnshift.splice(0, 0, "Cozinheira");
console.log(arrUnshift);

//====================================================================================

//Substituindo elementos

const marcas = ["Adidas", "nike", "Reebok", "Umbro"];
console.log(marcas);

marcas.splice(1, 1, "Puma");
console.log(marcas);

marcas.splice(-1, Number.MAX_VALUE, "Randal", "Qix");
console.log(marcas);

//====================================================================================

//Removendo itens em array de objeto com SPLICE

const arr = [
  {
    name: "Cleiton",
    cargo: "Developer",
  },
  {
    name: "Fabricoi",
    cargo: "Mecanico",
  },
  {
    name: "Helber",
    cargo: "Design",
  },
  {
    name: "Edna",
    cargo: "Developer",
  },
  {
    name: "Vilma",
    cargo: "Psicóloga",
  },
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].cargo === "Developer") {
    arr.splice(i, 1);
  }
}

console.log(arr);

// FILTER -> Filtra o array

// MAP -> Altera o array original

// Reduce -> Reduz o valor do array

const listObj = [
  { nome: "Ednaiara", idade: "25" },
  { nome: "Cleber", idade: 35 },
  { nome: "Cirilo", idade: 21 },
  { nome: "Bianca", idade: 45 },
];

let maiorIdade = 0;
let objIdade = [];

for (let i = 0; i < listObj.length; i++) {
  if (listObj[i].idade > maiorIdade) {
    maiorIdade = listObj[i].idade;
    objIdade = listObj[i];
  } else {
    maiorIdade = maiorIdade;
  }
}
