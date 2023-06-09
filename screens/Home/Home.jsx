import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

import Notes from '../../componets/Notes'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./home.style";

const Home = () => {
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
        <Notes/>
      </View>
    </View>
  )
}

export default Home;