import { lightTheme } from 'theme/lightTheme';
import { darkTheme } from 'theme/darkTheme';

const availableThemes = { light: lightTheme, dark: darkTheme };

// Font settings for all themes
const fontSettings = {
  fontWeight: {
    regular: 300,
    semiBold: 600,
    bold: 800
  },
  fontSize: {
    s: '1.2rem',
    r: {
      home: '1.4rem',
      details: '1.6rem'
    },
    m: '1.8rem',
    l: '2.4rem',
    xl: '3.2rem'
  }
};

export const theme = themeName => {
  const [currentTheme] = Object.keys(availableThemes).filter(key => key === themeName);

  if (!currentTheme) {
    console.error("Served theme name isn't available. Check availableThemes object.");
  }

  return { ...fontSettings, ...availableThemes[currentTheme] };
};
