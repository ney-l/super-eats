import { RootNavigation } from './navigation';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/en-US');
}

export function App() {
  return (
    <StoreProvider store={store}>
      <RootNavigation />
    </StoreProvider>
  );
}
