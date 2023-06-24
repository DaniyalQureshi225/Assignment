import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Map from './Map';
import { BASE_URL } from '../API/Api';
const Home = ({navigation}) => {
    const [venues, setVenues] = useState([]);
  
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.next_url));
        setVenues(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
    }

    console.warn(venues)
    return (
      <View style={styles.container}>
       

    <FlatList
        horizontal={true}
        style={{ marginTop: 10 }}
        data={venues?.results}
        renderItem={({item,index}) =>{
          return(
            <TouchableOpacity style={{ marginRight: 10 }} onPress={()=>navigation.navigate('About', {item})}>
            
              <Image
              source={{ uri: item.featured_image}}
          style={{ width:'100%', height:200, aspectRatio:2}}
        />
             
       
            </TouchableOpacity>

            
          )
        }} />
        
       

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
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
  
  export default Home;