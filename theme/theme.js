import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE', // Purple color for a modern and elegant look
    accent: '#03DAC6', // Teal color for highlighting important elements
    background: '#FFFFFF', // White background for simplicity and elegance
    surface: '#F5F5F5', // Light gray surface for contrast with the background
    text: '#333333', // Dark gray text for readability
    error: '#B00020', // Dark red color for indicating errors
    notification: '#FFC107', // Yellow color for notifications
    success: '#00C853', // Green color for indicating success
    warning: '#FF9800', // Orange color for warnings
    divider: '#BDBDBD', // Light gray divider color for separating elements
  },
  roundness: 8, // Rounded corners for a modern look
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
    button: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'bold', // Bold font for buttons
    },
    header: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'bold', // Bold font for headers
    },
  },
  components: {
    Button: {
      mode: 'contained', // Default mode for buttons (contained, text, outlined)
      uppercase: false, // Keep button text in original case
      labelStyle: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 'bold', // Bold font for button text
        fontSize: 16, // Font size for button text
      },
      contentStyle: {
        paddingVertical: 12, // Vertical padding for buttons
        paddingHorizontal: 20, // Horizontal padding for buttons
      },
      style: {
        borderRadius: 8, // Border radius for buttons
      },
    },
    Title: {
      style: {
        fontFamily: 'Roboto-Medium',
        fontWeight: 'bold', // Bold font for titles
        fontSize: 24, // Large font size for titles
      },
    },
    Subtitle: {
      style: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'normal', // Regular font for subtitles
        fontSize: 16, // Normal font size for subtitles
      },
    },
    Card: {
      style: {
        borderRadius: 8, // Border radius for cards
        elevation: 4, // Shadow elevation for cards
      },
    },
  },
};

export default theme;
