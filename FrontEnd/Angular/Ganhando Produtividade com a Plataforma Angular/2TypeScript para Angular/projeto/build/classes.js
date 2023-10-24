"use strict";
//Estrutura básica
class Character {
    constructor(strength, skill) {
        this.strenth = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenth} points`);
    }
}
const p1 = new Character(12, 23);
p1.attack();
console.log("--------------------------------------------------------------------------------");
//----------------------------------------------------------------
// DATA MODIFIES - Modificadores de acesso
/*
Public - O atributo ou método fica acessível externamente, globalmente.

Private - o atributo / método fica provado, só pode ser acessado internamente na classe
onde foi criado.

Protected - Só pode ser acessado pela classe pai e pelas subclasses

readonly - O método / atributo será somente leitura, após instanciar a classe com o valor do
atributo ele não pode ser mais modificado no modo "readonly"

*/
class Dog {
    constructor(name, raca, peso) {
        this.name = name;
        this.raca = raca;
        this.peso = peso;
    }
    myDog() {
        return `Info of my dog:  ${this.name + " - " + this.raca + " - " + this.peso}`;
    }
}
const d1 = new Dog("linux", "Dobberman", 5);
console.log(d1.myDog());
d1.peso = 25;
console.log(d1.myDog());
console.log("--------------------------------------------------------------------------------");
class DogSon extends Dog {
    constructor(name, raca, peso, idade, puro) {
        super(name, raca, peso);
        this.idade = idade;
        this.puro = puro;
    }
}
const dogSon = new DogSon("Kid dog", "dobberman", 6, 0.1, true);
console.log(dogSon.myDog() + "years old: " + dogSon.idade + " raca pura? " + dogSon.puro);
