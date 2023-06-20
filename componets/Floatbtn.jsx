import { View,TouchableOpacity} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import notes from './notes.style';

const Floatbtn = () => {
  const navigation = useNavigation();
  return (
    <View style ={notes.btncontainer}>
          <TouchableOpacity style={notes.btn} onPress = {() => {navigation.navigate("Typenote")}}>
              <FontAwesome name="pencil-square-o" size={20} color="#F46A4E" />
          </TouchableOpacity>
    </View>
  )
}

export default Floatbtn;