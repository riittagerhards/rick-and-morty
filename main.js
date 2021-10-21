import "./style.css";
import { createElement } from "./lib/elements";
import createCharacterCard from "./components/characterCard";
import { fetchCharacters } from "./lib/characters.js";
import createCharacterSearch from "./components/characterSearch.js";

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

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const characterSearch = createCharacterSearch();

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
