import React from "react";
import ReactDOM from "react-dom";

import { Typography } from '@material-ui/core';

import UserDirectory from './components/UserDirectory';

const App = () => {
  return (
    <div>
      <Typography variant='h3' gutterBottom>Blackfynn Filter Project</Typography>
      <UserDirectory />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
