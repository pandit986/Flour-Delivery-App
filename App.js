import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './navigator/AppNavigation';
import store from './store/store';
// import theme from './theme/second_theme';
// import theme from './theme/first_theme';
import theme from './theme/theme';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}