import { StyleSheet } from 'react-native';


import { Text, View } from '../../components/Themed';

export default function posts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191919',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
