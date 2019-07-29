import React, { Component } from "react";
import axios from 'axios';

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
          <input placeholder="Enter name to filter results" onChange={this.onChange} />
          <div>{results} Results</div>
        </div>
        <ul>
          {filteredUsers.map((user, index) => (
            <li key={index}>
              <div>
                <img src={user.picture.thumbnail} />
              </div>
              <div>
                <div>
                  {user.name.first} {user.name.last}
                </div>
                <div>
                  <p>{user.location.street}</p>
                  <p>{user.location.city}, {user.location.state}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default UserDirectory;
