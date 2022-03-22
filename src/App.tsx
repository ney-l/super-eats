import { RootNavigation } from './navigation';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';

export function App() {
  return (
    <StoreProvider store={store}>
      <RootNavigation />
    </StoreProvider>
  );
}
