import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DonationList from './pages/DonationList';
import Page from './components/Page';
import DonationType from './pages/DonationType';
import TargetDonation from './pages/TargetDonation';
import TargetDonationExtra from './pages/TargetDonationExtra';

function App() {
  return (
      <Router>
          <Switch>
              <Route path={"/"} exact component={DonationList} />
              <Route path={"/DT"} component={DonationType} />
              <Route path={"/TD"} component={TargetDonation} />
              <Route path={"/TDE"} component={TargetDonationExtra} />
          </Switch>
      </Router>

  );
}

export default App;
