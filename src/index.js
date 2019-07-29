import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MyAppBar from './components/MyAppBar';
import UserDirectory from './components/UserDirectory';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.75em'
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar />
      <UserDirectory />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
