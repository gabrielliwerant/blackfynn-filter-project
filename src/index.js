import React from "react";
import ReactDOM from "react-dom";

import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>Blackfynn Filter Project</h1>
      <UserList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
