function Calculator() {
  this.display = document.querySelector(".row-screen");

  this.startCalculator = function () {
    this.enter(), this.btnClicks();
  };

  this.enter = function () {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.countMaths();
      }
    });
  };
  this.btnClicks = function () {
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
  };
  this.countMaths = function () {
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
  };
  this.clearDisplay = function () {
    this.display.value = "";
  };
  this.btnToDisplay = function (value) {
    this.display.value += value;
  };
  this.clearOne = function () {
    this.display.value = this.display.value.slice(0, -1);
  };
}

const calc = new Calculator();
calc.startCalculator();
