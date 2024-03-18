import React from 'react';
import { RootNavigator } from './app/navigation/RootNavigator';
import { AppProvider } from './app/providers/appProvider';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}

export default App;
