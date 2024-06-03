// theme.js
import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFB74D',       // A warm, inviting orange for primary buttons and headers
    accent: '#FFF176',        // A lighter yellow for accents
    background: '#FFF3E0',    // A soft, flour-like beige for the background
    surface: '#FFFFFF',       // White for card surfaces
    text: '#3E2723',          // Dark brown for text to ensure readability
    error: '#D32F2F',         // Standard red for error messages
    notification: '#FF9800',  // Orange for notifications
  },
  roundness: 8,                // Rounded corners for a more friendly feel
  fonts: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

export default theme;
