import { View, Text, Image , StyleSheet,Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import UserJson from '../../../assets/data/user.json'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { User } from '../../types'
import ExperienceListItem from '../../components/ExperienceListItem'
import { ScrollView } from 'react-native-gesture-handler'



const PostAuthordetails = () => {
  const [user, setUser] = useState<User>(UserJson)
    const {id} = useLocalSearchParams();
   const Navigation = useNavigation();

  const onConnect = () => {
    console.warn('connect')
   }
  useLayoutEffect(()=>{
    Navigation.setOptions({title:user.name})
  },[user?.name])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      {/* BG Image */ }
      <View style={styles.mainheader}>
      <Image source={{uri: user.backImage}} style={styles.backImage} />
  {/* Header */}
  <View style={styles.header}>
      {/* Image */}
      <Image source={{uri: user.image}} style={styles.Image} />
      {/* Name */}
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.position}</Text>
      <Pressable onPress={onConnect} style={styles.btn}>
      <Text style={styles.btnTxt}>Connect</Text>
      </Pressable>
      </View>
      </View>
      {/* About */}
      <View style={styles.section}>
      <Text style={styles.text}>About</Text>
      <Text style={styles.about}>{user.about}</Text>
      </View>
      {/* Experience */}
      <View style={styles.expView}>
      <Text style={styles.text}>Experience</Text>
      {UserJson.experience?.map((experience)=>
        (
          < ExperienceListItem key={experience.id} data={experience} />
        )
      )}
    </View>
    </View>
    </ScrollView>
  )
}

export default PostAuthordetails;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    maxWidth:500,
    alignSelf:'center'
  },
  mainheader:{
    backgroundColor:'white'
  },
  header:{
    margin:10,
    marginTop:0,
  },
  backImage:{
    width:'100%',
    aspectRatio:3/1,
    marginBottom:-50
  },
  Image:{
    aspectRatio:1,
    height:100,
    width:100,
    borderRadius:50,
    borderWidth:3,
    borderColor:'white'
  },
  name:{
    fontSize:16,
    fontWeight:'500'
  },
  btn:{
    backgroundColor:'royalblue',
    padding:10,
    borderRadius:20,
    marginTop:10,
  },
  btnTxt:{
    color:'#fff',
    alignSelf:'center',
    fontSize:16,
    fontWeight:'700'
  },
  section:{
    padding:10,
    backgroundColor:'white',
    marginTop:10
  },
  text:{
    fontWeight:'600',
    fontSize:18,
    marginVertical:5
  },
  about:{
    lineHeight:20,
  },
  expView:{
    backgroundColor:'#fff',
    marginTop:10,
    padding:10
  }
})