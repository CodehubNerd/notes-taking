import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#010101",
        padding:18,
  },
  header: {
    zIndex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
    Headingtext: {
        color: "#FAFAFA",
        textAlign: 'center',
        fontSize: SIZES.large,
        justifyContent: "center",
         marginTop:20,
        
    },
    smalltext: {
        color: "#989898",
        textAlign: 'center',
        fontSize: SIZES.small,
        justifyContent: "center",
        marginBottom: 20,
   
    },
    iconscontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,
       
        
    },
    iconscontainerright: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    notestaken: {
        backgroundColor: '#171717',
        color: 'white',
        borderRadius:8,
        flex: 1,
        marginTop:400,
        padding:20,
    },

    singlenote: {
        color:'white',
        display: "flex",

    },
    note: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
    },
    notedate: {
      color: '#ff5533',
      fontSize: 11,
      padding: 4,
      borderRadius:10,
      alignSelf: 'flex-start',
      backgroundColor:"#f46a4e48"
    },
    
    separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 10,
    },
   
    noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
    
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#F46A4E',
      marginRight: 10,
    },
    noteText: {
      flex: 1,
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomMenu: {
      backgroundColor: 'black',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

})

export default styles;