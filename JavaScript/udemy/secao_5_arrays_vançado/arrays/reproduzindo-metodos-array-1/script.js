// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array){
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}



function map(array, callback) {
  //sua lógica

  let novoArray = []
  
  for(let index = 0; index < array.length; index++){

     novoArray.push(callback(array[index], index, array))

  }
  return novoArray
}
map(arrayMap, callbackMap)
console.table(map(arrayMap, callbackMap))


console.log('-----------------------------------------------------')

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  //sua lógica
  let novoArray = []

  for (let index = 0; index < array.length; index++){

      if(callback(array[index], index, array) === true){

        novoArray.push(array[index])

      }
  }

  return novoArray

}
console.log(filter(arrayFilter, callbackFilter));


console.log('-----------------------------------------------------')



//Método Reduce ---------

//comecar 
// função callback


const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar


// Ela apenas soma os valores, como um acumulador mesmo

function callbackReduce(acumulator, valorAtual) {

  return acumulator + valorAtual;

}



function reduce(array, callback, valorInicial = 0) {
    //sua lógica


    let resultado = valorInicial

    for (let index = 0; index < array.length; index++){

        resultado = callback(resultado,array[index])

    } 
    return resultado
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
