/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showUsers = document.querySelector("#btn");
const output = document.querySelector("#output");

async function fetchUsers() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const users = await response.json();
      showUsers.addEventListener("click", () => {
        output.innerHTML = "";
        users.forEach((user) => {
          generateUsers(user);
        });
      });
    } else {
      alert("failed to fetch");
    }
  } catch (error) {
    alert("We got an error");
  }
}

fetchUsers();

function generateUsers(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");

  const login = document.createElement("p");
  login.classList.add("user-login");
  login.textContent = user.login;

  const userAvatar = document.createElement("img");
  userAvatar.src = user.avatar_url;
  userAvatar.setAttribute("alt", "Product Picture");

  card.append(login, userAvatar);
  output.append(card);
}
