import { StyleSheet } from 'react-native';

import { Text, View } from '../../../src/components/Themed';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
