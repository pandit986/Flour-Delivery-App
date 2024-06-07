// style={[styles.button, { backgroundColor: them.colors.button.background }]}


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Button, useTheme } from 'react-native-paper'; // Import useTheme hook
// import { DefaultTheme } from './theme'; // Import the custom theme

// const App = () => {
//   const theme = useTheme(); // Use the useTheme hook to access the theme
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: theme.colors.background, // Access background color from theme
//     },
//     title: {
//       fontFamily: theme.fonts.title.fontFamily, // Access font family from theme
//       fontWeight: theme.fonts.title.fontWeight, // Access font weight from theme
//       fontSize: theme.fonts.title.fontSize, // Access font size from theme
//       color: theme.colors.text, // Access text color from theme
//       marginBottom: 20,
//     },
//     subtitle: {
//       fontFamily: theme.fonts.subtitle.fontFamily,
//       fontWeight: theme.fonts.subtitle.fontWeight,
//       fontSize: theme.fonts.subtitle.fontSize,
//       color: theme.colors.text,
//       marginBottom: 20,
//     },
//     button: {
//       marginTop: 20,
//       borderRadius: theme.roundness, // Access roundness from theme
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Model App</Text>
//       <Text style={styles.subtitle}>Discover the latest models</Text>
//       <Button
//         mode="contained"
//         style={[styles.button, { backgroundColor: theme.colors.button.background }]}
//         labelStyle={{ color: theme.colors.button.text }}
//         onPress={() => console.log('Button pressed')}
//       >
//         Explore Models
//       </Button>
//     </View>
//   );
// };

// export default App;


// const theme = useTheme(); // Use the useTheme hook to access the theme
// const styles = createStyles(theme); // Create styles based on the theme

// const createStyles = (theme) => StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: theme.colors.background,
//     },
//     title: {
//       fontFamily: theme.fonts.medium.fontFamily,
//       fontWeight: theme.fonts.medium.fontWeight,
//       fontSize: 24,
//       color: theme.colors.text,
//       marginBottom: 20,
//     },
//     subtitle: {
//       fontFamily: theme.fonts.light.fontFamily,
//       fontWeight: theme.fonts.light.fontWeight,
//       fontSize: 16,
//       color: theme.colors.text,
//       marginBottom: 20,
//     },
//     button: {
//       marginTop: 20,
//       borderRadius: theme.roundness,
//       backgroundColor: theme.colors.button.background,
//     },
//     buttonText: {
//       fontFamily: theme.fonts.button.fontFamily,
//       fontWeight: theme.fonts.button.fontWeight,
//       color: theme.colors.button.text,
//     },
//   });