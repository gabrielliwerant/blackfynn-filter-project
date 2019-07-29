import React, { Component } from "react";
import axios from 'axios';

class UserDirectory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      results: 0
    };

    axios.get('https://randomuser.me/api/?results=100')
      .then(res => this.setState({ users: res.data.results, results: res.data.info.results }))
      .catch(err => console.log(err));
  }

  render() {
    const { users, results } = this.state;

    return (
      <div>
        <h2>User Directory</h2>
        <div>
          <input placeholder="Enter name to filter results" />
          <div>{results} Results</div>
        </div>
        <ul>
          {users.map((user, index) => (
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
