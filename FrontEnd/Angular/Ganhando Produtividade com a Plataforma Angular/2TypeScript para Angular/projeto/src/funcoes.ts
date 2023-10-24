// Tipo number parametro e retorno
const addNumber = function (x: number, y: number): number {
  return x + y;
};

const resultAddNumber: number = addNumber(5, 2);
console.log(resultAddNumber);

//=======================================================================

//Tipo string parametro e retorno

function addName(name: string): string {
  return `Hello ${name}`;
}

const resultAddName = addName("Cleiton Sousa");
console.log(resultAddName);

//=======================================================================

//VÁRIAS opções de tipo para o parametro e retorno
const callToPhone = (number: number | string): number | string => {
  return `Ligando para o número ${number}`;
};

const resultCallToPhone = callToPhone("31956565656");
console.log(resultCallToPhone);

//=======================================================================

//Async Function

async function myAsyncFunction(name: string, idade: number): Promise<string> {
  return `Oi, meu nome é ${name} e minha idade é ${idade}`;
}
