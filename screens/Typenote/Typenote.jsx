import { View,Text,TextInput,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = ({navigation}) => {

  const [tytext, setTytext] = useState('');
  //pop or focus on the input feild

  useEffect(() => {
    inputRef.focus();
  }, [])

  //monitoring the change in text
  const handleTextChange = (newText) => {
    setTytext(newText);
  };

  //props or instruction on wht should happen when we are clicking the button
  const handleButtonPress = async () => {
    try {
      const textToStore = JSON.stringify(tytext);
      await SecureStore.setItemAsync("tytext", textToStore); 
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
   
  };

  let inputRef;
  return (
    <View style ={styles.container}>
      <View style={styles.iconscontainer}>
         <TouchableOpacity onPress={handleButtonPress}>
          <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        value={tytext}
        onChangeText={handleTextChange}
        placeholder="Type something..."
        ref={(ref) => { inputRef = ref; }}
      />
      
      <Text>{tytext}</Text>

    </View>
  )
}

export default Typenote;