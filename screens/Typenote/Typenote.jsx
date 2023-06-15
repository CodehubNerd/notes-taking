import { View,Text,TextInput,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  //pop or focus on the input feild

  useEffect(() => {
    inputRef.focus();
  }, [])

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleButtonPress = () => {
    navigation.navigate("Home", { typedText });
  };

  let inputRef;
  return (
    <View style ={styles.container}>
      <View style={styles.iconscontainer}>
         <TouchableOpacity onPress={() => {handleButtonPress}}>
          <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Type something..."
        ref={(ref) => { inputRef = ref; }}
      />
      
      <Text>{text}</Text>

    </View>
  )
}

export default Typenote;