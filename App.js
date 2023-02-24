import React from 'react';
import Weather from './Weather';

const App = () => {
  return (
    <div>
      <Weather city="London" />
      <Weather city="New York" />
      <Weather city="Tokyo" />
    </div>
  );
};

export default App;



