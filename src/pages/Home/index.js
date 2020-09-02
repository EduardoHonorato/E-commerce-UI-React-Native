import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../components/Shoes'


export default function Home() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View >
                <View style={styles.header}>
                    <Image source={require('../../../src/images/banner.png')}
                    style={styles.image} />
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>TÊNIS</Text>
                        <Text style={[styles.text, {color:'#ddd'}]}>•</Text>
                        <Text style={[styles.text, {color:'#ddd'}]}>Masculino</Text>
                        <TouchableOpacity style={{marginLeft:120, marginTop:5}}>
                            <MaterialIcons name="filter-list" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.line}/>
                
                <Text style={[styles.text, {marginLeft:20, marginTop:10}]}>Lançamentos</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Shoes 
                    img={require('../../images/1.png')} cost="R$ 190,00" onClick={()=>navigation.navigate('Detail')}>
                        Nike Airmax Solution
                    </Shoes>
                    <Shoes 
                    img={require('../../images/2.png')} cost="R$ 289,90" onClick={()=>navigation.navigate('Detail')}>
                        Nike Airmax Downshifter 10
                    </Shoes>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Shoes 
                    img={require('../../images/3.png')} cost="R$ 340,00" onClick={()=>navigation.navigate('Detail')}>
                        Adidas Squidward Tentacles
                    </Shoes>
                    <Shoes 
                    img={require('../../images/4.png')} cost="R$ 489,90" onClick={()=>navigation.navigate('Detail')}>
                        Adidas Epic Flyknit
                    </Shoes>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Shoes 
                    img={require('../../images/5.png')} cost="R$ 129,00" onClick={()=>navigation.navigate('Detail')}>
                        Nike Joyride Run Squidward
                    </Shoes>
                    <Shoes 
                    img={require('../../images/6.png')} cost="R$ 230,00" onClick={()=>navigation.navigate('Detail')}>
                        Adidas Epic Space
                    </Shoes>
                </View>
                
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor:'#fff',
    },
    header:{
        marginBottom:8,
    },
    image:{
        width:'100%',
    },
    textContainer:{
        flexDirection:'row',
        marginVertical:'5%',
        marginHorizontal:'5%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize:26,
        marginHorizontal:'1%',
        textTransform:'uppercase'
    },
    line:{
        borderBottomColor:'#d8d8d8',
        borderBottomWidth:2
    }

});