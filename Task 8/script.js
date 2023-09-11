/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b === 0) {
      alert("Division from zero is not allowed");
    }
    return a / b;
  }
}

const realCalculator = new Calculator();
console.log(realCalculator.sum(5, 3));
console.log(realCalculator.subtraction(5, 3));
console.log(realCalculator.multiplication(5, 3));
console.log(realCalculator.division(6, 3));
