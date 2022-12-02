   import React from "react";
   import {Text,TouchableOpacity, StyleSheet} from 'react-native';
   import {windowWidth , windowHeight} from '../utils/Dimentions';

   const FormButton = ({buttonTitle, ...rest}) => {
    return(
        <TouchableOpacity style={styles.buttonCointainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
   }
   export default FormButton;

   const styles = StyleSheet.create({
    buttonCointainer:{
        marginTop :10,
        width : '100%',
        height : windowHeight /15,
        backgroundColor: '#2e64e5',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 3,  
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color :'#ffffff',
        fontFamilymily: 'Lato-Regular',
    },
   });