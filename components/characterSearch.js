import { createElement } from "../lib/elements";
import styles from "./characterSearch.module.css";

export function createCharacterSearch(onSubmit) {
  let timeoutId;
  const searchField = createElement("input", {
    type: "search",
    placeholder: "your search here...",
    className: styles.searchField,
    oninput: () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSubmit(searchField.value);
      }, 2000);
    },
  });

  const searchButton = createElement("button", {
    type: "submit",
    className: styles.searchButton,
    textContent: "Search",
  });

  const formElement = createElement(
    "form",
    {
      className: styles.searchForm,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(searchField.value);
      },
    },
    [searchField, searchButton]
  );

  return formElement;
}
