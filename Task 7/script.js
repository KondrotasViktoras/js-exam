/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(obj) {
  const key = Object.values(obj); //jei reikalingas key, tada Object.keys(obj);
  return key;
}

const keysOfAudi = showObjectKeys(audi);
console.log(keysOfAudi);
