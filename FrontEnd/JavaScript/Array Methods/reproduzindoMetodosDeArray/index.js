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
