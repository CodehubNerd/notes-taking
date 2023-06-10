import { View,TouchableOpacity} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import notes from './notes.style';

const Floatbtn = () => {
  return (
    <View>
      <TouchableOpacity style = {notes.btn}>Floatbtn</TouchableOpacity>
    </View>
  )
}

export default Floatbtn;