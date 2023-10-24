//Dessa forma como a tipagem do parametro e retorno foram any, podemos setar outros valores nestes arrays
// então a variável não fica corretamente tipada.

function concatArray(...item: any[]): any[] {
  return new Array().concat(...item);
}

const numArr = concatArray([1, 2, 3], [4, 5, 6]);
console.log(numArr);

const strArray = concatArray(["cleiton"], ["maria"], ["samuel"]);
console.log(strArray);

// SOLUCIONANDO O PROBLEMA A CIMA - Inseriremos o <T> que é um generics, nele vc pode tipar o retorno de uma função
// assim que chamá-la e atribuir o retorno a uma variável por exemplo.
// Criaremos outra função, agora da maneira correta.

const concatArrWithGenerics = <T>(...items: T[]): T[] => {
  return new Array().concat(...items);
};

const numbersConcat = concatArrWithGenerics<number[]>(
  [10, 11, 12],
  [13, 14, 15]
);

const strConcat = concatArrWithGenerics<string[]>(["white"], ["blue", "red"]);

console.log(numbersConcat);
console.log(strConcat);
