/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const kilos = parseFloat(document.getElementById("search").value);

  if (!isNaN(kilos)) {
    const lb = kilos * 2.2046;
    const grams = kilos / 0.001;
    const oz = kilos * 35.274;

    const output = document.getElementById("output");
    output.innerHTML = `<p>Kilogramai: ${kilos} kg.</p>
            <p>Svarai: ${lb.toFixed(2)} lb.</p>
            <p>Gramai: ${grams} g.</p>
            <p>Uncijos: ${oz.toFixed(2)} oz.</p>`;
  } else {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Please enter a valid temperature</p>";
  }
});
