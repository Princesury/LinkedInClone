import { View, Text, StyleSheet,Image, Pressable } from 'react-native'
import React from 'react'
import { Post } from '../types'
import { FontAwesome } from '@expo/vector-icons';
import {Link} from 'expo-router'

type PostListItemProps = {
    Post:Post
}
type footer ={
  text:string;
  icon:React.ComponentProps<typeof FontAwesome>['name']
}

function FooterIcon({text,icon}:footer){
  return(
    <View style={{flexDirection:'row'}}>
  <FontAwesome name={icon} size={18} color="black" />
  <Text style={{marginLeft:5}}>{text}</Text>
  </View>
  )
}

const PostListItem = ({Post}:PostListItemProps) => {
  return (
    <Link id="RouterNavLink" href={`/posts/${Post.id}`} asChild>
    <Pressable style={styles.container}>
      {/* header */}
      <Link href={`/Users/${Post.author.id}`} asChild>
      <Pressable style={styles.header}>
        <Image source={{uri:Post.author.image}} style={{height:50,width:50,marginRight:10,borderRadius:50/2,marginLeft:10,}}/>
        <View>
        <Text style={styles.userName}>{Post.author.name}</Text>
        <Text>{Post.author.position}</Text>
        </View>
      </Pressable>
      </Link>
      {/* content */}
      <Text style={{marginLeft:15,margin:7}}>{Post.content}</Text>
      {/* Image content */}
      {Post.image && (<Image source={{uri:Post.image}} style={styles.PostImage} />)}
      {/* footer content  */}
      <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:15,borderTopWidth:0.6,borderColor:'lightgrey'}}>
        <FooterIcon icon="thumbs-o-up" text="Like" />
        <FooterIcon icon="comment-o" text="Comment" />
        <FooterIcon icon="share" text="Share" />
      </View>
    </Pressable>
    </Link>
  )
}

export default PostListItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    maxWidth:500,
    alignSelf:'center'
  },
  userName:{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:3
  },
  header:{
   flexDirection:'row',
   alignItems:'center',
   marginTop:10
  },
  PostImage:{
    width:'100%',
    aspectRatio:1
  }
})