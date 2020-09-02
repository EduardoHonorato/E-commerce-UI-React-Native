import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function filterDesc(desc){
    if(desc.length<20){
        return desc
    }
    return `${desc.substring(0,16)}...`;
}

export default function Shoes(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image 
        source={props.img}
        style={styles.shoesIMG}
        />
        <Text style={[styles.shoesText,{fontWeight:'700'}]}>
            {filterDesc(props.children)}
        </Text>
        <Text style={[styles.shoesText, {fontSize:14, marginTop:5, color:'#666', fontWeight:'600'}]}>{props.cost}</Text>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    shoesIMG:{
        width:180,
        height:145,
    },
    shoesText:{
        fontSize:16,
    }
});