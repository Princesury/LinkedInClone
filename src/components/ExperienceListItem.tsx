import { View, Text, Image, StyleSheet } from 'react-native';
import { Experience } from '../types';


type ExperienceListItemprops = {
  data: Experience;
}

export default function ExperienceListItem({ data }: ExperienceListItemprops) {
  return (
            <View style={styles.main}>
              <Image source={{ uri: data.companyImage }} style={styles.dataImg} />
              <View>
              <Text style={styles.text}>{data.title}</Text>
              <Text style={styles.txt}>{data.companyName}</Text>
              </View>
            </View>

          )
}


const styles = StyleSheet.create({
  main:{
    flexDirection:'row',
    margin:10,
    alignItems:'center',
    borderBottomWidth:0.5,
    borderColor:'lightgrey',
    paddingBottom:10,
  },
  dataImg: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginRight:10,
  },
  text:{
    fontSize:16,
    fontWeight:'600',
  },
  txt:{
    fontSize:14
  }
})