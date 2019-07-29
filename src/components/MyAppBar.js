import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const MyAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant='h6'>Blackfynn Filter Project</Typography>
    </Toolbar>
  </AppBar>
);

export default MyAppBar;
