import { View, Text } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./home.style";

const Home = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Headingtext}>All notes</Text>
          <Text style={styles.smalltext}>4 notes</Text>
          
          <View style = {styles.iconscontainer}>
              <View><Feather name="menu" size={20} color="white" /></View>

              <View style ={styles.iconscontainerright}>
              <View><Feather name="search" size={20} color="white" /></View> 
              <View><MaterialIcons name="more-vert" size={20} color="white" /></View> 
              </View>
            
          </View>
    </View>
  )
}

export default Home;