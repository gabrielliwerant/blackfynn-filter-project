import React from "react";
import ReactDOM from "react-dom";

import UserDirectory from './components/UserDirectory';

const App = () => {
  return (
    <div>
      <h1>Blackfynn Filter Project</h1>
      <UserDirectory />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
