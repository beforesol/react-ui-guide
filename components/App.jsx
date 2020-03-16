import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;