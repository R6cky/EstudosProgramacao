//Tipagem sem previsibilidade - object
const myObj: object = {
  name: "cleiton",
  idade: 28,
  altura: 1.7,
};

// Tipagem com previsibilidade
type tDataPerson = {
  name: string;
  idade: number;
  isActive: boolean;
};

const myObj2: tDataPerson = {
  name: "Ed",
  idade: 28,
  isActive: false,
};

console.log(myObj);
