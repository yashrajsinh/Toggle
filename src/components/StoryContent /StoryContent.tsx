import { View, Text, StyleSheet } from 'react-native';
//Data for story content
import storyData from '../../data/StoryData';

{
  /* This component is responsible for showing story content or story text
  DARK MODE logic has to be here for text
  */
}
export default function StoryContent({ isDark }: any) {
  const fontStyle = isDark ? styles.lightText : styles.darkText;
  return (
    <View style={styles.container}>
      <Text style={fontStyle}>{storyData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  lightText: {
    fontSize: 18,
    lineHeight: 20,
    color: '#1F2937', // dark text for light background
  },

  darkText: {
    fontSize: 18,
    lineHeight: 20,
    color: '#F9FAFB', // light text for dark background
  },
});
