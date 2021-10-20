import "./style.css";
import { createElement } from "./lib/elements";
import createCharacterCard from "./components/characterCard";

function renderApp() {
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

  const characters = [
    {
      picture: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
      name: "Bepisian",
      status: "Alive",
      race: "Alien",
      lastKnownLocation: "Bepis 9",
      firstSeenIn: "Pilot",
    },
    {
      picture: "https://rickandmortyapi.com/api/character/avatar/368.jpeg",
      name: "Truth Tortoise",
      status: "Unknown",
      race: "Mythological Creature",
      lastKnownLocation: "unknown",
      firstSeenIn: "Morty's Mind Blowers",
    },
  ];

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

  appElement.append(headerElement, mainElement, footerElement);
}

renderApp();
