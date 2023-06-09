import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#010101",
        padding:18,
    },
    Headingtext: {
        color: "#FAFAFA",
        textAlign: 'center',
        fontSize: SIZES.large,
        justifyContent: "center",
         marginTop:200,
        
    },
    smalltext: {
        color: "#989898",
        textAlign: 'center',
        fontSize: SIZES.small,
        justifyContent: "center",
        marginTop:10,
   
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
        backgroundColor: '',
        color:'white',
        padding:15,
    }
})

export default styles;