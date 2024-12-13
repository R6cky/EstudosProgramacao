nomes = ["Edna", "Cleiton", "Luis"];
console.log(nomes); //[ 'Edna', 'Cleiton', 'Luis' ]

delete nomes[1];

console.log(nomes); //[ 'Edna', <1 empty item>, 'Luis' ]

nomes[1] = "Veronica";

console.log(nomes); //[ 'Edna', 'Veronica', 'Luis' ]

//===================================================================================

times = ["cruzeiro", "atletico", "palmeiras", "santos"];
console.log(times); //[ 'cruzeiro', 'atletico', 'palmeiras', 'santos' ]

serieB = times;
console.log(serieB); //[ 'cruzeiro', 'atletico', 'palmeiras', 'santos' ]

times.pop();
console.log(serieB); //[ 'cruzeiro', 'atletico', 'palmeiras' ]

serieB.pop();
console.log(times); // [ 'cruzeiro', 'atletico' ]

//Criar arrray por referencia não é recomendado,
//pois os valores dos arrays ficam espelhados
// tudo o que ocorre em um, acontece no outro

//CÓPIA DE ARRAYS -> Utilizar spread operator

serieC = [...times];

serieC.pop();
console.log(serieC);
console.log(times);

//===================================================================================
