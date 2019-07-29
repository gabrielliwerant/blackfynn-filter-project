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

import User from './User';

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

    return (
      <div>
        <Typography variant='h4' gutterBottom>User Directory</Typography>
        <div>
          <TextField
            variant='outlined'
            placeholder='Enter name to filter results'
            onChange={this.onChange}
          />
          <Typography variant='subtitle1'>{results} Results</Typography>
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

export default UserDirectory;
