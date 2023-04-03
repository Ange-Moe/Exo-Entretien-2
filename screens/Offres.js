import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native'


const Offres = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Offres</Text>
            <Button
            title='Click here'
            onPress={()=> alert('Button Clicked')
            }
            />
            </View>
    )
}
export default Offres;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f5f5f5'
    }
});