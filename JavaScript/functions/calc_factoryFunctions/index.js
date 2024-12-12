function calculator(tagHtml) {
  return {
    display: document.querySelector(".row-screen"),

    startCalculator() {
      this.backSpace();
      this.enter(), this.btnClicks();
    },
    backSpace() {},
    enter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.countMaths();
        }
      });
    },
    btnClicks() {
      document.addEventListener("click", (e) => {
        const textButton = e.target.innerText;
        if (e.target.classList.contains("num")) {
          this.btnToDisplay(textButton);
        }
        if (e.target.classList.contains("btn-c")) {
          this.clearDisplay();
        }

        if (e.target.classList.contains("clear-one")) {
          this.clearOne();
        }

        if (e.target.classList.contains("result")) {
          this.countMaths();
        }
      });
    },
    countMaths() {
      try {
        let count = eval(this.display.value);
        if (!count) {
          alert("Conta inválida!");
        }
        this.display.value = count;
      } catch (error) {
        console.log(error);
        alert("Conta inválida!");
      }
    },
    clearDisplay() {
      this.display.value = "";
    },
    clearOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}

const calc = calculator();
calc.startCalculator();

//pressionar botoes e setar na tela
//somar, subtrair, dividir, multiplicar, expnenciar valores na tela.
//apagar caracteres na tela um por um e todos de uma vez
//acrescentar ponto flutuante nos numero decimais
//acrescentar ordem de prioride com parenteses
//acrescentar tratativa de erros ao digitar conjunto de caracteres inválidos