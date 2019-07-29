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
        <h2>User Directory</h2>
        <div>
          <TextField
            variant='outlined'
            placeholder='Enter name to filter results'
            onChange={this.onChange}
          />
          <div>{results} Results</div>
        </div>
        <List>
          {filteredUsers.map((user, index) => (
            <ListItem key={index} divider>
              <ListItemAvatar>
                <Avatar src={user.picture.thumbnail} />
              </ListItemAvatar>
              <ListItemText
                primary={<Fragment>{user.name.first} {user.name.last}</Fragment>}
                secondaryTypographyProps={{ component: 'div' }}
                secondary={(
                  <Fragment>
                    <Typography>{user.location.street}</Typography>
                    <Typography>{user.location.city}, {user.location.state}</Typography>
                  </Fragment>
                )}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
};

export default UserDirectory;
