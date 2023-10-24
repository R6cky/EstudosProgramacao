"use strict";
class Persona {
    constructor(name, idade, isActive, user) {
        this.name = name;
        this.idade = idade;
        this.isActive = isActive;
        this.user = user;
    }
    sayHello() {
        return `Hi i'm ${this.name} and i ${this.idade} years old`;
    }
}
const p = new Persona("Rafael", 28, true, "rf");
console.log(p.sayHello());
