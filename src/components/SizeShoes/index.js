import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SizeShoes(props) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor:props.bgColor || '#fff'}]}>
        <Text style={[styles.text, {color: props.color || "#666"}]}>{props.children}</Text>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        borderColor:'#d6d6d6',
        borderWidth:4,
        marginTop:25,
        marginHorizontal:3
    },
    text:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        textAlignVertical:'center'
    }
})