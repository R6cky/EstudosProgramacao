//Estrutura básica

class Character {
  name?: string;
  strenth: number;
  skill: number;

  constructor(strength: number, skill: number) {
    this.strenth = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strenth} points`);
  }
}

const p1 = new Character(12, 23);

p1.attack();
console.log(
  "--------------------------------------------------------------------------------"
);

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
  private name?: string;
  protected raca: string;
  public peso: number;

  constructor(name: string, raca: string, peso: number) {
    this.name = name;
    this.raca = raca;
    this.peso = peso;
  }

  public myDog() {
    return `Info of my dog:  ${
      this.name + " - " + this.raca + " - " + this.peso
    }`;
  }
}

const d1 = new Dog("linux", "Dobberman", 5);
console.log(d1.myDog());
d1.peso = 25;
console.log(d1.myDog());

console.log(
  "--------------------------------------------------------------------------------"
);

class DogSon extends Dog {
  idade: number;
  puro: boolean;

  constructor(
    name: string,
    raca: string,
    peso: number,
    idade: number,
    puro: boolean
  ) {
    super(name, raca, peso);
    this.idade = idade;
    this.puro = puro;
  }
}

const dogSon = new DogSon("Kid dog", "dobberman", 6, 0.1, true);

console.log(
  dogSon.myDog() + "years old: " + dogSon.idade + " raca pura? " + dogSon.puro
);
