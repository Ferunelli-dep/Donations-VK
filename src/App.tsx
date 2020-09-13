import React from 'react';
import DonationList from './pages/DonationList';
import Page from './pages/Page';

function App() {
  return (
    <Page title={'Пожертвования'}>
      <DonationList />
    </Page>
  );
}

export default App;
