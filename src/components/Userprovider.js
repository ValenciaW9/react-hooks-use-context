import React from 'react';
import UserProvider from './path/to/UserProvider'; // Import the UserProvider component
import OtherComponent from './path/to/OtherComponent';

function App() {
  return (
    <UserProvider>
      <OtherComponent />
    </UserProvider>
  );
}

export default App;