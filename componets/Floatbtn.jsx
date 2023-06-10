import { View,TouchableOpacity} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import notes from './notes.style';

const Floatbtn = () => {
  return (
    <View>
          <TouchableOpacity style={notes.btn}>
              <FontAwesome name="pencil-square-o" size={24} color="#F46A4E" />
          </TouchableOpacity>
    </View>
  )
}

export default Floatbtn;