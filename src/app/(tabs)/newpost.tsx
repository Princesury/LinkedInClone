import { StyleSheet,TextInput,Pressable,Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { useNavigation } from 'expo-router';
import { useState,useLayoutEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 


export default function posts() {
  const [image, setImage] = useState<string | null>(null);
    const Navigation = useNavigation();
    const [document, setDocument] = useState('')
    const Router = useRouter()
  
    useLayoutEffect(()=>{
    Navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postcontainer}>
          <Text style={styles.text}>Post</Text>
        </Pressable>
      )
    })
  },[onPost])
  
  function onPost(){
  console.warn(`post : ${document}`)
  Router.push('/(tabs)/')
  setDocument('');
  setImage(null);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 0.5
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
    
    return (
      <View style={styles.container}>
        <TextInput 
        value={document}
        onChangeText={setDocument}
        placeholder='Write any Post'
        multiline
        style={styles.input}
         />
         {
          image && <Image source={{uri:image}} style={styles.img}/> 
         }
         <View style={styles.footer}>
          <Pressable onPress={pickImage} style={styles.iconview}>
          <FontAwesome name="image" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.iconview}>
          <FontAwesome name="camera" size={24} color="black"/>
          </Pressable>
          <Pressable style={styles.iconview}>
          <FontAwesome name="glass" size={24} color="blac"/>
          </Pressable>
         </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input:{
   margin:10,
   color:'#191919',
   fontSize:15,
  },
  postcontainer:{
   backgroundColor:'royalblue',
   width:70,
   height:30,
   marginRight:20,
   borderRadius:15
  },
  text:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    textAlign:'center',
    paddingTop:5
  },
  footer:{
   flexDirection:'row',
   backgroundColor:'white',
   justifyContent:'space-around',
   marginTop:520
  },
  iconview:{
   backgroundColor:'gainsboro',
   height:50,
   width:50,
   borderRadius:25,
   justifyContent:'center',
   alignItems:'center'
  },
  img:{
   aspectRatio:1,
   width:'100%',
   marginTop:100
  }
});
