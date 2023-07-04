import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Floatbtn from '../../componets/Floatbtn';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./home.style";

const Home = ({ navigation,route  }) => {
  const typedText = route.params?.tytext || '';
  const [typedTextList, setTypedTextList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);


  // as soon we log the screen we fecth this informmation from the storage
  useEffect(() => {
    const retrieveTypedText = async () => {
      try {
        const storedText = await SecureStore.getItemAsync('typedText');
        if (storedText) {
          const storedArray = JSON.parse(storedText);
          setTypedTextList(storedArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveTypedText();
  }, []);
  

  //functions 
  
  const handleLongPress = (index) => {
    setSelectedItems([index]);
    setShowModal(true);
  };

  const handleCancel = () => {
    setSelectedItems([]);
    setShowModal(false);
  };

  const handleShare = () => {
    // Perform share action for the selected items
    setShowModal(false);
  };

  const handleDelete = () => {
    // Filter out the selected items from the typedTextList
    const updatedList = typedTextList.filter((_, index) => !selectedItems.includes(index));
  
    // Update the typedTextList state with the updated list
    setTypedTextList(updatedList);
  
    // Save the updated list to the storage
    const saveTypedText = async () => {
      try {
        await SecureStore.setItemAsync('typedText', JSON.stringify(updatedList));
      } catch (error) {
        console.log(error);
      }
    };
  
    saveTypedText();

    setSelectedItems([]);
    setShowModal(false);
  };
  

  const handleBookmark = () => {
    // Perform bookmark action for the selected items
    setShowModal(false);
  };

  
  return (
    <View style = {styles.container}>
      <Text style = {styles.Headingtext}>Notes</Text>
          <Text style={styles.smalltext}>{typedTextList.length} notes</Text>
          
          <View style = {styles.iconscontainer}>
              <TouchableOpacity><Feather name="menu" size={20} color="white" /></TouchableOpacity>

              <View style ={styles.iconscontainerright}>
             <TouchableOpacity style  ={{marginRight:20}}><Feather name="search" size={20} color="white" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="more-vert" size={20} color="white" /></TouchableOpacity> 
              </View>
      </View>
   
      <View style={styles.notestaken}>

  <ScrollView  >
          {typedTextList.map((text, index) => (
      
      <TouchableOpacity
      key={index}
      onLongPress={() => handleLongPress(index)}
      onPress={() => console.log('Item pressed')}
    >
  
      <View>
      <Text style={styles.note}>{text}</Text>
      {selectedItems.includes(index) && <View style={styles.checkbox} />}
      {index !== typedTextList.length - 1 && <View style={styles.separator} />}
                
      </View>
      </TouchableOpacity>
    ))}
        </ScrollView>
        <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.bottomMenu}>
            <TouchableOpacity onPress={handleShare}>
              <Feather name="share" size={20} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Feather name="trash" size={20} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBookmark}>
              <Feather name="bookmark" size={20} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel}>
              <Feather name="x" size={20} color="#F46A4E" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <Floatbtn/>
</View>
     

    </View>
  )
}

export default Home;