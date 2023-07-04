import { View,TouchableOpacity} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import notes from './notes.style';

const Floatbtn = () => {
  const navigation = useNavigation();
  return (
    <View style ={notes.btncontainer}>
          <TouchableOpacity style={notes.btn} onPress = {() => {navigation.navigate("Typenote")}}>
          <AntDesign name="plus" size={20} color="#F46A4E" />
             
          </TouchableOpacity>
    </View>
  )
}

export default Floatbtn;