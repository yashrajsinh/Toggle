import { View, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Component
import ToggleSwitch from '../components/ToogleSwitch/ToggleSwitch';

export default function StoryPage({ isDark, setDark }: any) {
  //render background img based on mode
  const bgImage = isDark
    ? require('../assets/images/morning.jpg')
    : require('../assets/images/night.jpg');
  return (
    <ImageBackground
      source={bgImage}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.background}>
            <ToggleSwitch value={isDark} onChange={setDark} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // vertical center
    alignItems: 'center', // horizontal center
  },
});
