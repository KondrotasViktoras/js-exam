/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const HOST = "./cars.json";
const output = document.querySelector("#output");

async function fetchCars() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const cars = await response.json();
      cars.forEach((car) => {
        generateCarsCard(car);
      });
      console.log(cars);
    } else {
      alert("failed to fetch");
    }
  } catch (error) {
    console.log(error);
  }
}

fetchCars();

function generateCarsCard(car) {
  const card = document.createElement("div");
  card.classList.add("card-style");

  const carBrand = document.createElement("p");
  carBrand.textContent = car.brand;
  carBrand.classList.add("car-brand-style");

  const carModels = document.createElement("ul");
  car.models.forEach((modelName) => {
    const modelListName = document.createElement("li");
    modelListName.classList.add("car-model-style");
    modelListName.textContent = modelName;
    carModels.append(modelListName);
  });

  card.append(carBrand, carModels);
  output.append(card);
}
