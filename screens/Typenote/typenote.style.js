import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#010101",
        padding: 18,
        color:'#FAFAFA',
    },
    Headingtext: {
        color: "#FAFAFA",
        textAlign: 'center',
        fontSize: SIZES.large,
        justifyContent: "center",
         marginTop:200,
        
    },
  
    iconscontainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection:'row',
        marginTop: 30,    
    },
    txtcontainertyping: {
        
    },
    input: {
        color: "#FAFAFA",
        marginTop:20,
    },
    typingcolor: {
        color:'white'
    }
})

export default styles;