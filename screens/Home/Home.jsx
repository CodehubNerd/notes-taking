import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Floatbtn from '../../componets/Floatbtn';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./home.style";
import { ImageBackground } from 'react-native';
import { RefreshControl } from 'react-native';



const Home = ({ navigation,route  }) => {
  const typedText = route.params?.tytext || '';
  const [typedTextList, setTypedTextList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);

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

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  //refreshing the app
  const handleRefresh = () => {
    // Perform any necessary refresh actions here
    // For example, fetch new data or update the existing data
  
    setRefreshing(true); // Show the refreshing indicator
  
    // Simulate an asynchronous task with a timeout
    setTimeout(() => {
      setRefreshing(false); // Hide the refreshing indicator
    }, 2000); // Adjust the timeout duration as needed
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
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.Headingtext}>Notes</Text>
    <Text style={styles.smalltext}>{typedTextList.length} notes</Text>
      </View>

      <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage}>

      
          <View style = {styles.iconscontainer}>
              <TouchableOpacity><Feather name="menu" size={20} color="white" /></TouchableOpacity>

              <View style ={styles.iconscontainerright}>
              <TouchableOpacity><MaterialIcons name="more-vert" size={20} color="white" /></TouchableOpacity> 
              </View>
      </View>
   
      <View style={styles.notestaken}>

  <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />} >
          {typedTextList.map((text, index) => (
      
      <TouchableOpacity
      key={index}
      onLongPress={() => handleLongPress(index)}
      onPress={() => console.log('Item pressed')}
    >
  
      <View>
                <Text style={styles.note}>{text}</Text>
                <View>
                  <Text style={styles.notedate}>{currentDate}</Text>
                </View>
     
      {selectedItems.includes(index) && <View style={styles.checkbox} />}
      {index !== typedTextList.length - 1 && <View style={styles.separator}/>}
                
      </View>
      </TouchableOpacity>
    ))}
        </ScrollView>
        <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.bottomMenu}>
            <TouchableOpacity onPress={handleShare}>
              <Feather name="share" size={23} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Feather name="trash" size={23} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBookmark}>
              <Feather name="bookmark" size={23} color="#F46A4E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel}>
              <Feather name="x" size={23} color="#F46A4E" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <Floatbtn/>
</View>
     
</ImageBackground>
    </View>
  )
}

export default Home;