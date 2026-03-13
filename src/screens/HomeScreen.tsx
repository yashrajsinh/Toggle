import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Components
import StoryHeader from '../components/StoryHeader/StoryHeader';
import ToggleSwitch from '../components/ToogleSwitch/ToggleSwitch';
import NextPage from '../components/NextPage/NextPage';
import StoryContent from '../components/StoryContent/StoryContent';

export default function HomeScreen({ navigation, isDark, setDark }: any) {
  //render background img based on mode
  const bgImage = isDark
    ? require('../assets/images/morning.jpg')
    : require('../assets/images/night.jpg');
  //turn swithc to dark and light
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
            <NextPage
              isDark={isDark}
              onPress={() => navigation.navigate('Second')}
            />
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
