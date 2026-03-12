import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Components
import StoryHeader from './src/components/StoryHeader/StoryHeader';
import ToggleSwitch from './src/components/ToogleSwitch/ToggleSwitch';
import StoryContent from './src/components/StoryContent /StoryContent';
import NextPage from './src/components/NextPage/NextPage';
import { useState } from 'react';

function App() {
  const [isDark, setDark] = useState(true);
  const bgImage = isDark
    ? require('./src/assets/images/morning.jpg')
    : require('./src/assets/images/night.jpg');
  function handleSwitch() {
    setDark(!isDark);
  }
  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      {/* == Main Story background image */}

      <View style={styles.overlay}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {/* == STORY HEADER === */}
            <StoryHeader>
              {/* == TOGGLE SWITCH === */}
              <ToggleSwitch value={isDark} onChange={handleSwitch} />
            </StoryHeader>
            {/* == STORY CONTENT === */}
            <StoryContent isDark={isDark} />
            {/* == NEXT PAGE === */}
            <NextPage isDark={isDark} />
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(250,249,246,0.2)',
    padding: 10,
  },
});

export default App;
