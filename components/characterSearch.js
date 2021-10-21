import { createElement } from "../lib/elements";
import styles from "./characterSearch.module.css";

export function createCharacterSearch(onSubmit) {
  const searchField = createElement("input", {
    type: "search",
    placeholder: "your search here...",
    className: styles.searchField,
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
