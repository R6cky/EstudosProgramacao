interface iDataRequest {
  name: string;
  idade: number;
  isActive: boolean;
  user: string;
  sayHello(a: string, b: number): string;
}

class Persona implements iDataRequest {
  name: string;
  idade: number;
  isActive: boolean;
  user: string;
  constructor(name: string, idade: number, isActive: boolean, user: string) {
    this.name = name;
    this.idade = idade;
    this.isActive = isActive;
    this.user = user;
  }
  sayHello(a, b): string {
    return `Hi i'm ${this.name} and i ${this.idade} years old`;
  }
}

const p = new Persona("Rafael", 28, true, "rf");
console.log(p.sayHello("cleiton", 18));
