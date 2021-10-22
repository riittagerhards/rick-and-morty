import "./style.css";
import { createElement } from "./lib/elements";
import createCharacterCard from "./components/characterCard";
import { fetchCharacters } from "./lib/characters.js";
import { createCharacterSearch } from "./components/characterSearch.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement(
    "header",
    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "All about Rick and Morty",
      }),
    ]
  );

  async function handleSubmit(searchQuery) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    mainElement.innerHTML = "";
    mainElement.append(...characterElements);
  }

  const characterSearch = createCharacterSearch(handleSubmit);

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    characterCards
  );

  const footerElement = createElement(
    "footer",
    {
      className: "footer",
    },
    [
      createElement("p", {
        textContent: "I am  a footer",
      }),
    ]
  );

  appElement.append(headerElement, characterSearch, mainElement, footerElement);
}

renderApp();
