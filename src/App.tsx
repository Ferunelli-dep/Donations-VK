import React from 'react';
import DonationList from './pages/DonationList';
import Page from './components/Page';

function App() {
  return (
    <Page title={'Пожертвования'}>
      <DonationList />
    </Page>
  );
}

export default App;
