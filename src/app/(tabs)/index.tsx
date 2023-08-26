import { StyleSheet } from "react-native";

import { Text, View } from "../../../src/components/Themed";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/Posts.json";
import { FlatList } from "react-native-gesture-handler";

const firstpost = posts[0];

export default function home() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={posts}
      renderItem={({item}) => <PostListItem Post={item} /> }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap:5}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
});
