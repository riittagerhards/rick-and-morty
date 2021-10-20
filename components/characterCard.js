import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  episode,
}) {
  const characterCard = createElement("article", { className: styles.card }, [
    createElement("img", { className: styles.profilePicture, src: image }),
    createElement("h2", { textContent: name }),
    createElement("p", { textContent: `${status} - ${species}` }),
    createElement("h3", { textContent: "Last known location:" }),
    createElement("p", { textContent: location.name }),
    createElement("h3", { textContent: "First seen in:" }),
    createElement("p", { textContent: episode[0] }),
  ]);

  return characterCard;
}
