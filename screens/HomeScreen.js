import * as React from 'react';
import { Text, View,Image } from 'react-native';
import {StyleSheet} from 'react-native';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {  images, SIZES, COLORS,FONTS,icons } from '../constants'


import Home from '../HomeScreen/Home';//Home Page

import main from '../HomeScreen/main';
  //Search

import train from'../HomeScreen/train'
  function Like() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Like</Text>
      </View>
    );
  }
  //Like

import Frofile from '../HomeScreen/Frofile';
  
//Frofile



const Tab = createBottomTabNavigator();

const HomeScreen =() => {
  return (
      <Tab.Navigator 
         tabBarOptions={{
           showLabel:false,
           style:{
             position:'absolute',
             bottom:0,
             left:0,
             right:0,
             elevation: 0,
             backgroundColor:'#fffff6',
             paddingTop:0,

             height:80,
             
              shadowColor: '#7F5DF0',
              shadowOffset:{
                  width:0,
                  height:10,
              },
              shadowOpacity:0.25,
              shadowRadius:3.5,
              elevation:5
           },
         }}
      >
        <Tab.Screen name="Home"
            component={Home} 
            options={{tabBarLabel:"Home",tabBarColor:"#009387",tabBarIcon:({focused})=>(
              <Image
              source={images.home0}
              resizeMode="contain"
              style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? COLORS.blue : COLORS.brand
              }}
          />)}}
 />
        
       
        <Tab.Screen name="main" component={main}  options={{tabBarIcon:({focused})=>(
                        <Image
                            source={images.train1}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.blue : COLORS.brand
                            }}
                        />
                        
                        )}}/>
      
        <Tab.Screen  name="Like" component={Like} options={{tabBarIcon:({focused})=>(<Image
                            source={images.heart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.blue : COLORS.brand
                            }}
                        />)}}/>
        <Tab.Screen name="Frofile" component={Frofile}  options={{tabBarIcon:({focused})=>(<Image
                            source={images.person}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.blue : COLORS.brand
                            }}
                        />)}} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  shadow:{
  shadowColor: '#7F5DF0',
  shadowOffset:{
      width:0,
      height:10,
  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  elevation:5
}
});
 export default HomeScreen
