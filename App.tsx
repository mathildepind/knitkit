import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KNITKIT</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: theme.colorCerulean,
    fontSize: 50,
    fontWeight: 'bold',
  },
});
