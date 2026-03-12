import { useState } from 'react';
import { Switch, StyleSheet, View } from 'react-native';
{
  /* This component is responsible for showing Tooggle Switch next story image */
}
export default function ToggleSwitch({ value, onChange }: any) {
  return (
    <View style={styles.container}>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 6,
    borderRadius: 20,
  },
});
