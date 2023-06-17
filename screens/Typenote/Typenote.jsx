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
      const storedText = await SecureStore.getItemAsync('tytext');
      let newText = tytext;
      if (storedText) {
        const storedArray = JSON.parse(storedText);
        storedArray.push(tytext);
        newText = JSON.stringify(storedArray);
      } else {
        newText = JSON.stringify([tytext]);
      }
      await SecureStore.setItemAsync('tytext', newText);
      navigation.navigate('Home');
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