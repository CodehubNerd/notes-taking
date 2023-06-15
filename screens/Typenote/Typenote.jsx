import { View,Text,TextInput,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from "./typenote.style";


const Typenote = ({navigation}) => {

  const [tytext, setTytext] = useState('');
  //pop or focus on the input feild

  useEffect(() => {
    inputRef.focus();
  }, [])

  const handleTextChange = (newText) => {
    setTytext(newText);
  };

  const handleButtonPress = () => {
    navigation.navigate("Home", { tytext });
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