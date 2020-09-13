import React from 'react';
import DonationList from './pages/DonationList';
import Page from './components/Page';
import DonationType from './pages/DonationType';
import TargetDonation from './pages/TargetDonation';
import TargetDonationExtra from './pages/TargetDonationExtra';

function App() {
  return (
    <Page title={'Пожертвования'}>
      <TargetDonation />
    </Page>
  );
}

export default App;
