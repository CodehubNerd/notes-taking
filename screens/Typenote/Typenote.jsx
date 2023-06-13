import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = () => {
  return (
    <View style ={styles.container}>
      <View style = {styles.iconscontainer}>
      <AntDesign name="back" size={24} color="white" />
      </View>
      
    </View>
  )
}

export default Typenote;