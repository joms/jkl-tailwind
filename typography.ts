export const rem = (px: number) => {
  if (px === 0) {
    return 0;
  }

  return `${px / 16}rem`;
};

const createFontStyle = (weight: number, size: number, height: number) => {
  return {
    fontWeight: weight,
    fontSize: rem(size),
    lineHeight: rem(height),
  };
};

const fontSizes = {
  title: createFontStyle(400, 56, 64),
  "title-small": createFontStyle(400, 44, 52),
  "heading-1": createFontStyle(400, 36, 44),
  "heading-2": createFontStyle(400, 28, 40),
  "heading-3": createFontStyle(700, 25, 32),
  "heading-4": createFontStyle(700, 21, 28),
  "heading-5": createFontStyle(700, 16, 24),
  body: createFontStyle(400, 20, 32),
  bold: createFontStyle(700, 20, 32),
  small: createFontStyle(400, 16, 24),
};

export const fontStyles = () => {
  const styles = {};

  Object.entries(fontSizes).forEach(
    ([className, style]) => (styles[`.jkl-tw-${className}`] = style)
  );

  return styles;
};
