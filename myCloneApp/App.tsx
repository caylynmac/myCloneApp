import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

export default function App() {
  const [firstStory, setFirstStory] = useState({
    imageUrl: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
    isNew: true,
  });

  const stories = [
    { id: 1, username: 'photosbyen', imageUrl: firstStory.imageUrl, isNew: firstStory.isNew },
    { id: 2, username: 'john_doe', imageUrl: 'https://media.gettyimages.com/id/1330548400/fr/photo/saitama-japan-kevin-durant-of-team-united-states-walks-off-the-court-with-his-head-down-after.jpg?s=612x612&w=0&k=20&c=dpe50cng26Qx_Z65vwN1IFzmcPYKuJZBcnzi6Wu0e0o=', isNew: true },
    { id: 3, username: 'snoopdogg', imageUrl: 'https://media.gettyimages.com/id/2165729365/fr/photo/paris-france-snoop-dogg-attends-to-the-mens-park-final-on-day-twelve-of-the-olympic-games.jpg?s=612x612&w=0&k=20&c=lvu75aU98b7gtQTzbScQQ4BcAXoDkhmum4ufXT2iDSw=', isNew: false },
    { id: 4, username: 'jane_doe', imageUrl: 'https://media.gettyimages.com/id/1507659919/fr/photo/birmingham-england-lauren-bell-of-england-celebrates-bowling-ellyse-perry-of-australia-during.jpg?s=612x612&w=0&k=20&c=tEznxj6uicAsBJkXFzDQnXi_Vg7uZx9Cz9Y7Ay1SoNY=', isNew: false },
    { id: 5, username: 'bob', imageUrl: 'https://images.pexels.com/photos/10933480/pexels-photo-10933480.jpeg?auto=compress&cs=tinysrgb&w=600', isNew: false },
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
<<<<<<< Updated upstream
    <View style={styles.container}>
=======
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={{flexGrow: 6}}><Image source={require('./assets/instagramFont.png')} style={styles.igTextLogo}></Image></View>       
        <FontAwesome name="plus-square-o" style={{flexGrow: 1}} size={24} color="black" />
        <Ionicons name="heart-outline" style={{flexGrow: 1}} size={24} color="black" />
        <Ionicons name="chatbubble-ellipses-outline" style={{flexGrow: 1}} size={24} color="black" />
      </View>

>>>>>>> Stashed changes
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
                <Ionicons name="add-circle" size={24} color="rgb(80, 119, 227) " style={styles.addStoryButton} />
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
              uri: stories[0].imageUrl,
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
              uri: stories[2].imageUrl,
            }}
          />
          <Image
            style={styles.profileClusterMiddlePic}
            source={{
              uri: stories[3].imageUrl,
            }}
          />
          <Image
            style={styles.smallProfilePic}
            source={{
              uri: stories[1].imageUrl,
            }}
          />
          <Text>Liked by</Text>
          <Text style={styles.boldText}>snoopdogg</Text>
          <Text>and</Text>
          <Text style={styles.boldText}>others</Text>
        </View>
<<<<<<< Updated upstream
        <Text style={{ paddingTop: 10, color: 'grey' }}>November 12</Text>
        <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={{flexGrow: 6}}><Image source={require('./assets/instagramFont.png')} style={styles.igTextLogo}></Image></View>       
        <FontAwesome name="plus-square-o" style={{flexGrow: 1}} size={24} color="black" />
        <Ionicons name="heart-outline" style={{flexGrow: 1}} size={24} color="black" />
        <Ionicons name="chatbubble-ellipses-outline" style={{flexGrow: 1}} size={24} color="black" />
      </View>
        <View style={styles.post}> 
          <View style={styles.rowView}>
            <Image style={styles.smallProfilePic} source={{uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww'}} />
            <Text>photosbyen</Text>
            <Ionicons name="ellipsis-horizontal" color="black" style={{position: 'absolute', right: 10}} />
          </View>
          <Image source={{uri: 'https://images.unsplash.com/photo-1731354233513-60e9edaddc5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                  style={{width: '100%',
                    height: undefined,
                    aspectRatio: 1, //to make image square
                    paddingTop: 10,}}
                  />
          <View style={styles.rowView}>
            <Ionicons name="heart-outline" color="black" size={24} style={{paddingTop: 10}} />
            <Ionicons name="chatbubble-outline" color="black" size={24} style={{paddingTop: 10}} />
            <Ionicons name="paper-plane-outline" color="black" size={24} style={{paddingTop: 10}} />
            <Ionicons name="bookmark-outline" color="black" size={24} style={{paddingTop: 10, position: 'absolute', right: 10}} /> 
          </View>
          <View style={styles.rowView}>
            <Image style={styles.smallProfilePic} source={{uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww'}} />
            <Image style={styles.profileClusterMiddlePic} source={{uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww'}} />
            <Image style={styles.smallProfilePic} source={{uri: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww'}} />
            <Text>Liked by</Text>
            <Text style={styles.boldText}>snoopdogg</Text>
            <Text>and</Text>
            <Text style={styles.boldText}>others</Text>
          </View>
          <Text style={{paddingTop: 10, color: 'grey'}}>November 12</Text>
        <StatusBar style="auto" />
        </View>
=======
        <Text style={styles.date}>November 12</Text>

        </View>
      {/* Footer Section */}
>>>>>>> Stashed changes
      <View style={styles.iconBar}>
        <Ionicons name="home-sharp" size={24} color="black" />
        <Ionicons name="search" size={24} color="black" />
        <FontAwesome6 name="clapperboard" size={24} color="black" />
        <FontAwesome6 name="bag-shopping" size={24} color="black" />
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </View>
<<<<<<< Updated upstream
    </View>
=======
</SafeAreaView>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#fff',
    rowGap: 5,
  },

  storyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
<<<<<<< Updated upstream
=======
    paddingTop: 40
=======

    paddingTop: 5
>>>>>>> Stashed changes
    //flexDirection: 'column',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  iconBar: {
    flexDirection: 'row',
    position: 'absolute',
    borderTopColor: 'black',
    borderTopWidth:0.5,
    bottom: 50,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 1,
  },

  igTextLogo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
    padding: 4
  },

  post: {
    flexDirection: 'column',
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
    marginBottom: 10,
    marginLeft: 5,
  },

  boldText: {
    fontWeight: 'bold',
    marginLeft: -5,
    marginRight: -5,
  },

  date: {
    paddingTop: 5, 
    color: 'grey', 
    paddingLeft: 10,
  },

  addStoryButton: {
    position: 'absolute', 
    bottom: 0, 
    right: 0,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 12,
  },
});
