import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {  images, SIZES, COLORS,FONTS,icons } from '../constants'

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,ScrollView
} from "react-native";

const  Frofile = ({navigation})=> {
  return (
    
      <View>
        <TouchableOpacity style={{width:120, height:60,position:"relative",top:350,left:130,backgroundColor:COLORS.blue,borderRadius:10}} onPress={()=>navigation.navigate('Login')}><Text style={{textAlign:"center",justifyContent:"center",fontSize:18,paddingTop:20,}}>Log Out</Text></TouchableOpacity>
      </View>

  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4

  },
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
  }
})
export default Frofile