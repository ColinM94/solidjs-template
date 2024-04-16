/**
 * Combines class names into one string.
 * @param {...string} classNames Each class name is a param. e.g. .container, .button
 * @returns String of classes combined e.g. ".container .button"
 */
export const classes = (...classNames: (string | false | undefined)[]) => {
  classNames.filter((item) => item);
  return classNames.join(" ");
};
