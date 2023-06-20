import { View,Text,TextInput,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = ({navigation}) => {

  const [typedText, setTypedText] = useState('');
  //pop or focus on the input feild

  useEffect(() => {
    inputRef.focus();
  }, [])

  //monitoring the change in text
  const handleTextChange = (text) => {
    setTypedText(text);
  };

  //props or instruction on wht should happen when we are clicking the button
  const handleButtonPress = async () => {
    try {
      if (typedText.trim() !== '') {
        const storedText = await SecureStore.getItemAsync('typedText');
        let newText = typedText;
        if (storedText) {
          const storedArray = JSON.parse(storedText);
          storedArray.push(typedText);
          newText = JSON.stringify(storedArray);
        } else {
          newText = JSON.stringify([typedText]);
        }
        await SecureStore.setItemAsync('typedText', newText);
      }
      navigation.navigate('ScreenA');
    } catch (error) {
      console.log(error);
    }
  };

  let inputRef;
  return (
    <View style ={styles.container}>
      <View style={styles.iconscontainer}>
         <TouchableOpacity onPress={handleButtonPress}>
          <AntDesign  style={styles.round} name="back" size={24} color="#989898" />
        </TouchableOpacity>

        <View style={styles.txtcontainertyping}>
        <Text style={styles.typingcolor}>Start typing</Text>
        </View>
      </View>
      
      <TextInput
        style={styles.input}
        value={typedText}
        onChangeText={handleTextChange}
        placeholder="Type something..."
        ref={(ref) => { inputRef = ref; }}
      />
      
      <Text>{typedText}</Text>
    </View>
  )
}

export default Typenote;