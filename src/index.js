import React from "react";
import ReactDOM from "react-dom";
import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import UserDirectory from './components/UserDirectory';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.65em'
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h3' gutterBottom>Blackfynn Filter Project</Typography>
      <UserDirectory />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
