"use strict";
const robot1 = {
    id: 1,
    name: "Reld",
};
const robot2 = {
    id: 2,
    name: "lucas",
};
console.log("---------------------------------");
console.log(robot1);
console.log("---------------------------------");
console.log(robot2);
console.log("---------------------------------");
//Testando Read Only
console.log((robot1.id = 5));
console.log((robot2.id = 3)); // Acontece um erro por causa da propriedade READ ONLY na interface tRobotRO
