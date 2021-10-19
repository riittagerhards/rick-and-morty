import "./style.css";
import { createElement } from "./lib/elements";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createElement(
    "header",
    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "Rick and Morty",
      }),
    ]
  );

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [
      createElement("p", {
        textContent: "!under construction!",
      }),
    ]
  );
  appElement.append(headerElement, mainElement);
}

renderApp();
