import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Floatbtn from '../../componets/Floatbtn';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./home.style";

const Home = ({ navigation,route  }) => {
  const typedText = route.params?.tytext || '';
  const [tytext, setTytext] = useState([]);


  // as soon we log the screen we fecth this informmation from the storage
  useEffect(() => {
    const retrieveTypedText = async () => {
      try {
        const text = await SecureStore.getItemAsync('tytext')
        if (text !== null) {
          setTytext(text);
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveTypedText();
  }, [])
  

  return (
    <View style = {styles.container}>
      <Text style = {styles.Headingtext}>Notes</Text>
          <Text style={styles.smalltext}>4 notes</Text>
          
          <View style = {styles.iconscontainer}>
              <TouchableOpacity><Feather name="menu" size={20} color="white" /></TouchableOpacity>

              <View style ={styles.iconscontainerright}>
             <TouchableOpacity style  ={{marginRight:20}}><Feather name="search" size={20} color="white" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="more-vert" size={20} color="white" /></TouchableOpacity> 
              </View>
      </View>
   
      <View style={styles.notestaken}>
        <View style={styles.singlenote}>
          <Text style={styles.note}>{tytext}</Text>
       </View>
        </View>
        <Floatbtn/>

    </View>
  )
}

export default Home;