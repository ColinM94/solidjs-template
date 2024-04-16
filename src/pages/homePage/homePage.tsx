import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <div class={styles.container}>
      <div>Welcome Back,</div>
      <div>Colin</div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>

      <p>This paragraph uses the default subpixel antialiasing.</p>

      <p class="antialiased">
        This paragraph does not use subpixel antialiasing.
      </p>
    </div>
  );
};
