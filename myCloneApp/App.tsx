import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [firstStory, setFirstStory] = useState({
    imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
    isNew: true,
  });

  const stories = [
    { id: 1, username: 'photosbyen', imageUrl: firstStory.imageUrl, isNew: firstStory.isNew },
    { id: 2, username: 'john_doe', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', isNew: true },
    { id: 3, username: 'snoopdogg', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', isNew: false },
    { id: 4, username: 'jane_doe', imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', isNew: false },
  ];
  const handlePress = () => {
    Alert.alert(
      'View Story',
      'Do you want to view this story?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'View',
          onPress: () => {
            setFirstStory({
              imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&auto=format&fit=crop&q=60',
              isNew: false,
            });
          },
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      {/* Story Bubbles Section */}
      <View style={styles.storyContainer}>
        {stories.map(story => (
          <View key={story.id} style={styles.storyBubbleContainer}>
            {story.id === 1 ? (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={{ uri: story.imageUrl }}
                  style={[
                    styles.storyImage,
                    story.isNew ? styles.newStory : styles.viewedStory, // Apply newStory or viewedStory style
                  ]}
                />
              </TouchableOpacity>
            ) : (
              <Image
                source={{ uri: story.imageUrl }}
                style={[
                  styles.storyImage,
                  story.isNew ? styles.newStory : styles.viewedStory, // Apply newStory or viewedStory style
                ]}
              />
            )}
            <Text style={styles.username}>{story.username}</Text>
          </View>
        ))}
      </View>

      {/* Post Section */}
      <View style={styles.post}>
        <View style={styles.rowView}>
          <Image
            style={styles.smallProfilePic}
            source={{
              uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
            }}
          />
          <Text>photosbyen</Text>
          <Ionicons name="ellipsis-horizontal" color="black" style={{ position: 'absolute', right: 10 }} />
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1731354233513-60e9edaddc5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1, //to make image square
            paddingTop: 10,
          }}
        />
        <View style={styles.rowView}>
          <Ionicons name="heart-outline" color="black" size={24} style={{ paddingTop: 10 }} />
          <Ionicons name="chatbubble-outline" color="black" size={24} style={{ paddingTop: 10 }} />
          <Ionicons name="paper-plane-outline" color="black" size={24} style={{ paddingTop: 10 }} />
          <Ionicons
            name="bookmark-outline"
            color="black"
            size={24}
            style={{ paddingTop: 10, position: 'absolute', right: 10 }}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            style={styles.smallProfilePic}
            source={{
              uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
            }}
          />
          <Image
            style={styles.profileClusterMiddlePic}
            source={{
              uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
            }}
          />
          <Image
            style={styles.smallProfilePic}
            source={{
              uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
            }}
          />
          <Text>Liked by</Text>
          <Text style={styles.boldText}>snoopdogg</Text>
          <Text>and</Text>
          <Text style={styles.boldText}>others</Text>
        </View>
        <Text style={{ paddingTop: 10, color: 'grey' }}>November 12</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  storyBubbleContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },

  newStory: {
    borderColor: '#ff8500', // Orange border for new stories
    opacity: 1, // Fully visible for new stories
  },

  viewedStory: {
    opacity: 0.5, // Dimming viewed stories
    borderColor: '#ddd', // Lighter border for viewed stories
  },

  username: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },

  post: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  smallProfilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  profileClusterMiddlePic: {
    width: 35,
    height: 35,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: -20,
    marginRight: -20,
    zIndex: 1,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },

  boldText: {
    fontWeight: 'bold',
    margin: -5,
  },
});
