import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({ picture, name, status }) {
  const characterCard = createElement("article", { className: styles.card }, [
    createElement("img", { className: styles.profilePicture, src: picture }),
    createElement("h2", { textContent: name }),
    createElement("p", { textContent: status }),
  ]);

  return characterCard;
}
