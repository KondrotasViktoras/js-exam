/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Iron Man", "Iron Man's Director", 2000000000);
const movie2 = new Movie(
  "Viktoras The Greatest",
  "Viktoras Kondrotas",
  5000000000
);
const movie3 = new Movie("Cheap movie", "Cheap Producer", 100);

console.log(movie1.wasExpensive(), movie1);
console.log(movie2.wasExpensive(), movie2);
console.log(movie3.wasExpensive(), movie3);
