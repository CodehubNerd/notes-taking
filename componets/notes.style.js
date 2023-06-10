import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZE, SIZES } from "../constants";


const notes = StyleSheet.create({
    btn: {
        position: 'absolute',
        backgroundColor: '#3A3A3A',
        padding:16,
        width: 60,
        borderRadius:50,
        height: 60,
        top: 60,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default notes;