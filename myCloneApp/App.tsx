import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function App() {
  return (
    <View style={styles.container}>
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
      <View style={styles.iconBar}>
        <Ionicons name="home-sharp" size={24} color="black" />
        <Ionicons name="search" size={24} color="black" />
        <FontAwesome6 name="clapperboard" size={24} color="black" />
        <FontAwesome6 name="bag-shopping" size={24} color="black" />
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40
    //flexDirection: 'column',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  iconBar: {
    flexDirection: 'row',
    position: 'absolute',
    borderTopColor: 'black',
    borderTopWidth:0.5,
    bottom: 10,
    left: 0,
    right: 0,
    height: 60,
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
