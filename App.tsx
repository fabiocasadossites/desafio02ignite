import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/pages/Home';
import dark from './src/themes/dark';
import light from './src/themes/light';

export default function App() {

  const [theme, setTheme] = useState(light);

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home handleTheme={handleTheme} />
    </ThemeProvider>
  );
}
