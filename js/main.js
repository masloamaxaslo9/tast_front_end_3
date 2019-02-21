function Calculator () {
    this.calculate = function(value) {
       let array =  value.split(' ');
       let numberOne = +array[0];
       let symbol = array[1];
       let numberTwo = +array[2];
       switch (symbol) {
           case '+':
               return numberOne + numberTwo;
           case '-':
               return numberOne - numberTwo;
           case '*':
               return numberOne * numberTwo;
           case '/':
               return numberOne / numberTwo;
           case '**':
               return Math.pow(numberOne, numberTwo);
           default:
               return 'Error. Format: Number + or - or * or / or **';
       }
    }
}
let valueForPrompt = prompt('+ or - or * or / or ** . Example: 2 + 3');
let calc = new Calculator();
alert(calc.calculate(valueForPrompt));
location.reload();
