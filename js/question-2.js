// Question 2
// Make a call to the Rawg API.

const url =
  "https://api.rawg.io/api/games?" +
  new URLSearchParams({
    dates: "2019-01-01,2019-12-31",
    ordering: "-rating",
    key: "7cb89c44bd2b4732986d6a4605508161",
  });

const body = document.querySelector("body");
let response;

body.innerHTML = "Loading...";

try {
  response = await fetch(url);
} catch {
  body.innerHTML = "OH NO AN ERROR!";
}

if (response) {
  const data = await response.json();
  const games = data.results;

  body.innerHTML = "";

  for (let i in games) {
    const game = games[i];
    body.innerHTML += `
      Game name: ${game.name},
      Game rating: ${game.rating},
      Number of tags: ${game.tags.length}<br>
    `;

    if (i == 7) break;
  }
}
