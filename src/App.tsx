import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { HomeScreen, Restaurant } from './screens';

export function App() {
  return <Restaurant />;
  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView style={styles.container}>
  //       <StatusBar />
  //       <HomeScreen />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
