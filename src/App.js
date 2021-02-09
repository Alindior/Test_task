import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Users from './Users/Users';
import UserInfo from './UserInfo/UserInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/users/:id" exact component={UserInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
