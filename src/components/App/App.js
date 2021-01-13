import React from 'react';
import { ThemeProvider } from 'theme-ui';

import theme from '../../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" />
    </ThemeProvider>
  );
}

export default App;
