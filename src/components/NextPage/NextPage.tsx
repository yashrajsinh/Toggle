import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
{
  /* This comonent renders the next button with 
  'onPress' Prop to handle click */
}
export default function NextPage({ onPress, isDark }: any) {
  const fontStyle = isDark ? styles.lightModeText : styles.darkModeText;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={fontStyle}>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#4A6CF7',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  darkModeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  lightModeText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
