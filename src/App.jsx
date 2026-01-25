import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator/>
    </NavigationContainer>
  );
}

