import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'




const Tickets = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <View style={styles.boiteground}>
            <Image style={styles.imgaaron} source={require('../img/Aaron-remove.png')} />
            </View>

            <Text style={{fontFamily: 'Cochin'}} >Presenter Votre QR code à la caisse</Text>
            <Text style={{fontFamily: 'Cochin'}}>pour ajouter votre ticket</Text>

            <Text>{'\n'}</Text>

            <Image style={styles.img} source={require('../img/qrcode2.png')} />
            
            <Text>{'\n'}</Text>

            <Text style={{fontFamily: 'Cochin', fontWeight: 'bold',}}>Ou</Text>

            <View style={styles.espace}>

            </View>

            <View style={styles.viewcarre}>

            

            <TouchableOpacity style={styles.carre}
            activeOpacity={0.5}
            >
            <Text style={{fontFamily: 'Cochin', fontWeight: 'bold',}}>Prendre en photo</Text>
            <Image source={require('../assets/photo.png')}
            style={styles.imgbutton}/>
            
            </TouchableOpacity >
            
            <TouchableOpacity style={styles.carre}
             activeOpacity={0.5}
             >
             <Text style={{fontFamily: 'Cochin', fontWeight: 'bold',}}>Importer</Text>
             <Image source={require('../assets/arrow.png')}
             style={styles.imgbutton}/>
        
            
            </TouchableOpacity>

            </View>
            
        </View>
    )
}
export default Tickets;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        justifyContent: 'cstart',
        alignItems: 'center',
        
        
        
        
    
        
    },
    boiteground:{
        backgroundColor:'#a9ebd8',
        borderBottomLeftRadius:150,
        borderBottomRightRadius:150,
        marginBottom:20,
       
        
        
        
    },
    
    imgaaron:{
        height:130,
        width:130,
        borderRadius:5,
        
    },  
    espace:{
        marginTop:30
    },
        
        
    
    img:{
        height:140,
        width:140,
        borderRadius:5,
        backgroundColor:'#00A894',
        
      },

      imgbutton:{
        height:30,
        width:30,
        

      },


      viewcarre:{
        flexDirection:'row',
        
        
      },

    carre:{
        width:100,
        height:100,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        marginHorizontal:30
        
        
        
    },



});