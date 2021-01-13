/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';

import theme from '../../styles/theme';
import Page from '../Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          padding: '50px 20px',
        }}
      >
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
