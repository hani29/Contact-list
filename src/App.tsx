import React from 'react';
import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from 'components/Header';
import Contacts from 'components/Contacts';
import LoginRedirect from 'components/LoginRedirect';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#35baf6',
      main: '#323f44',
      dark: '#9fafb7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dd33fa',
      main: '#d500f9',
      dark: '#9500ae',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginRedirect>
        <Box className="App">
          <Header />
          <Contacts />
        </Box>
      </LoginRedirect>
    </ThemeProvider>
  );
}

export default App;
