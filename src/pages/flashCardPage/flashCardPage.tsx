import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

import { classes } from "utils";

import styles from "./styles.module.scss";

const cards = [
  {
    front: "Dog",
    back: "der Hund",
  },
  {
    front: "Cat",
    back: "die Katze",
  },
  {
    front: "House",
    back: "das Haus",
  },
  {
    front: "Head",
    back: "der Kopf",
  },
  {
    front: "Foot",
    back: "der Fuß",
  },
];

export const FlashCardPage = () => {
  const [isFlipped, setIsFlipped] = createSignal<boolean>(false);
  const [activeCard, setActiveCard] = createSignal<number>(0);

  // const handleFlip = () => {
  //   setIsFlipped((prev) => !prev);
  // };

  const handleBack = () => {};

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveCard((prev) => Math.max(0, prev - 1));
    } else {
      setActiveCard((prev) => Math.min(cards.length - 1, prev + 1));
    }
  };

  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <A href="/" class={styles.backButton}>
          {"<"}
        </A>
        <div>
          {activeCard() + 1} / {cards.length}
        </div>
      </div>

      <div class={styles.content}>
        <div draggable={true} class={styles.card}>
          <div class={classes(styles.cardInner, isFlipped() && styles.flipped)}>
            <div class={styles.cardFront}>{cards[activeCard()]?.front}</div>
            <div class={styles.cardBack}>{cards[activeCard()]?.back}</div>
          </div>

          {/* {isFlipped() && (
            <> */}
          <div onClick={() => handleSwipe("left")} class={styles.cardLeft} />

          <div onClick={() => handleSwipe("right")} class={styles.cardRight} />
          {/* </>
          )} */}
        </div>

        {/* <div class={styles.buttons}>
          <Button label="Wrong" class={styles.wrongButton} />
          <Button label="Right" class={styles.rightButton} />
        </div> */}

        {/* <Button label="Flip" onClick={handleFlip} type="primary" /> */}
      </div>
    </div>
  );
};
