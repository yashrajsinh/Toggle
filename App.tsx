//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import StoryPage from './src/screens/StoryPage';
import HomeScreen from './src/screens/HomeScreen';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
function App() {
  const [isDark, setDark] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} isDark={isDark} setDark={setDark} />}
        </Stack.Screen>
        <Stack.Screen name="Second">
          {props => <StoryPage {...props} isDark={isDark} setDark={setDark} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
