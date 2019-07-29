import React, { Component, Fragment } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    paddingTop: '0',
    paddingBottom: '0'
  },
  gutters: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  multiline: {
    marginTop: '20px',
    marginRight: '20px',
    marginBottom: '20px',
    marginLeft: '20px'
  }
};

const User = props => {
  const { imageUrl, firstName, lastName, street, city, state, classes } = props;

  return (
    <ListItem divider classes={{ root: classes.root, gutters: classes.gutters }}>
      <ListItemAvatar>
        <Avatar src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
        classes={{ multiline: classes.multiline }}
        primaryTypographyProps={{ component: 'div' }}
        primary={<Fragment>{firstName} {lastName}</Fragment>}
        secondaryTypographyProps={{ component: 'div' }}
        secondary={(
          <Fragment>
            <Typography>{street}</Typography>
            <Typography>{city}, {state}</Typography>
          </Fragment>
        )}
      />
    </ListItem>
  );
};

export default withStyles(styles)(User);
