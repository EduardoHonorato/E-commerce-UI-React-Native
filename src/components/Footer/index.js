import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes'

export default function Footer({navigation}) {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{flexDirection:'row', paddingBottom:70}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                img={require('../../images/5.png')} cost="R$ 129,00" onPress={()=>navigation.navigate('Detail')}>
                    Nike Joyride Run Squidward
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                img={require('../../images/6.png')} cost="R$ 230,00" onPress={()=>navigation.navigate('Detail')}>
                    Adidas Epic Space
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                img={require('../../images/3.png')} cost="R$ 340,00" onPress={()=>navigation.navigate('Detail')}>
                    Adidas Squidward Tentacles
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                img={require('../../images/4.png')} cost="R$ 489,90" onPress={()=>navigation.navigate('Detail')}>
                    Adidas Epic Flyknit
                </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                    img={require('../../images/1.png')} cost="R$ 190,00" onPress={()=>navigation.navigate('Detail')}>
                        Nike Airmax Solution
                    </Shoes>
            </View>
            <View style={{marginHorizontal:10}}>
                <Shoes 
                img={require('../../images/2.png')} cost="R$ 289,90" onPress={()=>navigation.navigate('Detail')}>
                    Nike Airmax Downshifter 10
                </Shoes>
            </View>
        </ScrollView>
      </View>
     </View>
  );
}
const styles = StyleSheet.create({
    title:{
        fontFamily:'Anton_400Regular',
        fontSize:24,
        marginVertical:'2%',
        paddingHorizontal:'2%'
    }
});