import React, { Component, Fragment } from "react";
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import User from './User';

const styles = {
  root: {
    paddingTop: '40px'
  },
  searchFilterRoot: {
    display: 'flex',
    marginBottom: '20px'
  },
  textField: {
    width: '66%',
    marginRight: '10px'
  },
  input: {
    padding: '10px'
  },
  results: {
    marginTop: '7px'
  }
};

class UserDirectory extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      users: [],
      filteredUsers: [],
      results: 0
    };

    axios.get('https://randomuser.me/api/?results=100')
      .then(res => this.setState({
        users: res.data.results,
        filteredUsers: res.data.results,
        results: res.data.info.results
      }))
      .catch(err => console.log(err));
  }

  onChange(e) {
    const { value } = e.target;
    const { users } = this.state;

    const filteredUsers = users.filter(user => user.name.first.includes(value) || user.name.last.includes(value));
    const newUserList = filteredUsers.length ? filteredUsers : users;

    this.setState({ filteredUsers: newUserList, results: newUserList.length });
  };

  render() {
    const { filteredUsers, results } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom>User Directory</Typography>
        <div className={classes.searchFilterRoot}>
          <TextField
            className={classes.textField}
            InputProps={{ classes: { input: classes.input } }}
            variant='outlined'
            placeholder='Enter name to filter results'
            onChange={this.onChange}
          />
          <Typography variant='subtitle1' className={classes.results}>{results} Results</Typography>
        </div>
        <List>
          {filteredUsers.map((user, index) =>
            <User
              key={index}
              imageUrl={user.picture.thumbnail}
              firstName={user.name.first}
              lastName={user.name.last}
              street={user.location.street}
              city={user.location.city}
              state={user.location.state}
            />
          )}
        </List>
      </div>
    );
  }
};

export default withStyles(styles)(UserDirectory);
