import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import TalentDashboard from './TalentDashboard';
import ViewTalent from './ViewTalent';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/talents" component={TalentDashboard} />
      <Route path="/view" component={ViewTalent} />
    </Switch>
  </Router>
);

export default App;
