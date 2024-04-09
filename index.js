class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.screen = '';
        this.operand = '';
        this.operation = null;

        this.add = function() {
            return this.a + this.b;
          }
      
          this.substract = function() {
            return this.a - this.b;
          }
      
          this.multiply = function() {
            return this.a * this.b;
          }
      
          this.divide = function() {
            return this.a / this.b;
        }

        this.setOperation = function(value) {
            this.operation = value;
            this.a = Number(this.operand);
            this.operand = '';
        }

        this.calculate = function() {
            this.b = Number(this.operand);
            let result = 0;
            switch (this.operation) {
              case 'x':
                result = this.multiply();
                break;
              case '+':
                result = this.add();
                  break; 
              case '-':
                result = this.substract();
                break;
              case '/':
                result = this.divide()
                break;
            }
            this.operand = result;
            this.screen = result;
            this.b = 0;
            this.operation = null;
          }

        this.updateScreen = function(value) {
            this.screen += value;
        }

        this.clear = function() {
            this.screen = '';
            this.a = 0;
            this.operand = '';
            this.operation = null;
        }

        this.addOperandNumber = function(value) {
            this.operand += value;
        }

        this.clear = function() {
            this.screen = '';
            this.operand = '';
        }
    }
}

const calculator = new Calculator();
const screen = document.querySelector('.placeholder');

const numberButtons = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('.data-equal');
const deleteBtn = document.querySelector('.data-delete');


numberButtons.forEach(x => {
    x.addEventListener('click', () => {
      calculator.updateScreen(x.innerText);
      calculator.addOperandNumber(x.innerText);
      screen.innerText = calculator.screen;
    })
})

operations.forEach(x => {
  x.addEventListener('click', () => {
    if (calculator.operation) {
        calculator.calculate();
    } else {
        calculator.setOperation(x.innerText);
        calculator.updateScreen(x.innerText);
    }
    screen.innerText = calculator.screen;
  })
})

equalBtn.addEventListener('click', () => {
    if (!calculator.operation) {
        null;
    } else {
        calculator.calculate();
        screen.innerText = calculator.screen;
    }
})

deleteBtn.addEventListener('click', () => {
    calculator.clear();
    screen.innerText = calculator.screen;
})