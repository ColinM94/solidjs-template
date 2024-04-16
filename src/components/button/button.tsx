import { classes } from "utils";

import styles from "./styles.module.scss";

interface Props {
  type: "primary" | "secondary";
  label: string;
  onClick: () => void;
  class?: string | undefined;
}

export const Button = ({ type, label, onClick, class: className }: Props) => {
  const style = () => {
    return classes(
      styles.container,
      type === "primary" && styles.primary,
      type === "secondary" && styles.secondary,
      className
    );
  };

  return (
    <button onClick={onClick} class={style()}>
      <div class={styles.label}>{label}</div>
    </button>
  );
};
