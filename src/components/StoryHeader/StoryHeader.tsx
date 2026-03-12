import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

{
  /* This component is responsible for showing Image */
}
export default function StoryHeader({ image, children }: any) {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/91xyw0E8ZaL._SY466_.jpg',
        }}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <View style={styles.toggleContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: 220,
  },

  headerImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  toggleContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
