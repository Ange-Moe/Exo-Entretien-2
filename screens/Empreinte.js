import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native'


const Empreinte = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Empreinte</Text>
            <Button
            title='Click here'
            onPress={()=> alert('Button Clicked')
            }
            />
            </View>
    )
}
export default Empreinte;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f5f5f5'
    }
});