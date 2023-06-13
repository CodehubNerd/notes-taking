import { View,Text,TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = () => {
  const [text, setText] = useState('');
  //pop or focus on the input feild

  useEffect(() => {
    inputRef.focus();
  }, [])

  const handleTextChange = (newText) => {
    setText(newText);
  };
  
  return (
    <View style ={styles.container}>
      <View style = {styles.iconscontainer}>
      <AntDesign name="back" size={24} color="white" />
      </View>

    </View>
  )
}

export default Typenote;