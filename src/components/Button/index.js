import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons'

export default function Button() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer} activeOpacity={0.9}>
        <Feather name="shopping-cart" size={24} color="#fff" style={{padding:10, marginTop:5}}/>
        <Text style={styles.title}>COMPRAR</Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    btnContainer:{
        width:'90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius:5,
        marginVertical:'5%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    },
    title:{
        fontSize:17,
        color:'#fff',
        marginTop:5
    }
})