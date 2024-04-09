import { ParentComponent } from "solid-js";

import styles from "./styles.module.scss";

export const MainLayout: ParentComponent = (props) => {
  return <div class={styles.container}>{props.children}</div>;
};
