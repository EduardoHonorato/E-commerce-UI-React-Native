import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

import Dot from '../../components/Dot';
import SizeShoes from '../../components/SizeShoes';
import Button from '../../components/Button';
import Footer from '../../components/Footer'

export default function Detail({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Header}>
           <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <AntDesign name='arrowleft' size={24} color="#333" style={{padding:10, marginTop:5}}/>
           </TouchableOpacity>
           <Text style={{fontSize:24, textTransform:'none', fontWeight:'700', color:'#333', marginTop:10}}>Detalhes do produto</Text>
           <TouchableOpacity>
            <Feather name="shopping-cart" size={24} color="#333" style={{padding:10, marginTop:5}}/>
           </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.Container}>
        <Image source={require('../../images/detail.png')} style={styles.image} resizeMode="cover" />
        <View styles={{marginTop:-50}}>
          <View>
            <Text style={[styles.title, {fontSize:24, marginTop:30}]}> R$ 289,90 </Text>
          </View>
          <View>
            <Text style={[styles.title, {fontSize:30, color:"#666"}]}> Nike Airmax Space 10 </Text>
          </View>

          <View style={styles.dotContainer}>
            <Dot color="#2379f4"/>
            <Dot color="#fb6e53"/>
            <Dot color="#ddd"/>
            <Dot color="#000"/>
          </View>

          <View style={{flexDirection:"row", width:'100%', paddingHorizontal:15}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeShoes bgColor="#17181a" color="#fff">40</SizeShoes>
              <SizeShoes>41</SizeShoes>
              <SizeShoes>42</SizeShoes>
              <SizeShoes>43</SizeShoes>
            </ScrollView>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.textTitle}>Detalhes do produto</Text>
            <Text style={[styles.textContent, {textAlign:'justify'}]}>
            Conte com a Nike para turbinar seu streetwear! Com design moderno e autêntico, o Tênis Nike Air Max Excee é para o homem que busca conforto e estilo nas suas combinações casuais. Confeccionado em material leve e resistente, garantindo respirabilidade e durabilidade.
            </Text>
            <Text style={styles.textList}>
              - Categoria: Amortecimento
            </Text>
            <Text style={styles.textList}>
              - Material: Mesh
            </Text>
          </View>

          <Button />
          <View style={styles.line}/>
          <Footer/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header:{
    width:'100%',
    height:50,
    borderBottomWidth:3,
    borderBottomColor:'#dedede',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#fff',
  },
  image:{
    width:'100%',
    height:200
  },
  title:{
    fontFamily:'Anton_400Regular',
    paddingHorizontal:10
  },
  dotContainer:{
    flexDirection:'row',
    marginLeft:5,
    marginTop:15
  },
  textContent:{
    fontSize:16,
    lineHeight:25,
    marginVertical:'2%',
    paddingHorizontal:15
  },
  textTitle:{
    fontSize:22,
    marginVertical:'2%',
  },
  textList:{
    fontSize:16,
    lineHeight:25,
    color:'#888'
  },
  line:{
    borderBottomColor:'#d8d8d8',
    borderBottomWidth:2,
    marginVertical:'5%',

}
});
