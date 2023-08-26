import { Pressable, StyleSheet,TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { useRouter } from 'expo-router';


export default function Networks() {
  const Navigation = useNavigation();
  const [document, setDocument] = useState('')
  const Router = useRouter()

  useLayoutEffect(()=>{
  Navigation.setOptions({
    title: 'Post',
    headerRight: () => (
      <Pressable onPress={onPost} style={styles.postcontainer}>
        <Text style={styles.text}>Post</Text>
      </Pressable>
    )
  })
},[onPost])

function onPost(){
console.warn(`post,${document}`)
Router.push('/(tabs)/')
setDocument('');
}
  
  return (
    <View style={styles.container}>
      <TextInput 
      value={document}
      onChangeText={setDocument}
      placeholder='Write any Post'
      multiline
      style={styles.input}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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
  input:{

  },
  postcontainer:{

  },
  text:{

  }
});
