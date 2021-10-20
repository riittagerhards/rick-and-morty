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
      picture: "https://avatarfiles.alphacoders.com/160/160369.jpg",
      name: "Rick",
      status: "alive - human",
    },
    {
      picture:
        "https://i.kym-cdn.com/photos/images/original/000/692/145/49c.png",
      name: "Morty",
      status: "alive - human",
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
