import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Posts from '../../../assets/data/Posts.json'
import { useLocalSearchParams } from 'expo-router';
import PostListItem from '../../components/PostListItem';


const PostdetailScreen = () => {

  const { id } = useLocalSearchParams()

  const Post = Posts.find((p) => p.id === id)

  if (!Post) {
    return (
      <Text>No Page is found</Text>
    )
  }

  return (
    <ScrollView>
      <PostListItem Post={Post} />
    </ScrollView>
  )
}

export default PostdetailScreen;