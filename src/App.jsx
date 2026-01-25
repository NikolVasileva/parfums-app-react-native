// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import RootNavigator from './navigation/RootNavigator.jsx';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import StartScreen from './screens/StartScreen.jsx';



// export default function App() {
//   return (

//     <NavigationContainer>
//       <StartScreen />
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

