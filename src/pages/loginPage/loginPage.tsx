import { Button } from "components";

import styles from "./styles.module.scss";

export const LoginPage = () => {
  const handleLogin = () => {};

  return (
    <div class={styles.container}>
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
};
