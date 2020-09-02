import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function Dot(props) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor:props.color}]}>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width * 0.06,
        height:Dimensions.get('window').width * 0.06,
        borderRadius:Dimensions.get('window').width * 0.6 /2,
        marginHorizontal: 10,
        elevation:5,
    }

});