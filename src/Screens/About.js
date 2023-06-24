import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Map from './Map';
import {useRoute} from '@react-navigation/native';

const About = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  // console.log('aaaaaaaaaaaaaaaaaaaa',item)

  // const itemp = item;

  const markers = [
    {
      id: 1,
      coordinate: { latitude: item.lat, longitude: item.lon },
      title: item.name,
      description:  item.address,
    }
  ];

  // console.log(itemp.featured_image);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.featured_image}}
        style={{width: '100%', height: 200, aspectRatio: 2, alignSelf:'center'}}
      />

      <View style={{flex:1, height:100, width:'100%'}}>
      <Map 
      initialRegion ={ {
        latitude:item.lat,
        longitude: item.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}  markers={markers}/>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  venueItem: {
    marginBottom: 8,
  },
  venueName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  venueAddress: {
    fontSize: 14,
    color: '#888',
  },
});

export default About;
