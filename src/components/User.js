import React, { Component, Fragment } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core';

const User = props => {
  const { imageUrl, firstName, lastName, street, city, state } = props;

  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
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

export default User;
