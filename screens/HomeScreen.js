import * as React from 'react';
import { Text, View, } from 'react-native';
import {StyleSheet} from 'react-native';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';






function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       
      <Text>Home!</Text>
    </View>
  );
}
//Home Page


function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search</Text>
      </View>
    );
  }
  //Search


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
             bottom:25,
             left:20,
             right:20,
             elevation: 0,
             backgroundColor:'#6C9BD2',
             
             borderRadius: 15,
             height:90,
             
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
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused})=>(<View style={{alignItems:'center',justifyContent:'center',top:10}}><Fontisto  name="home" resizeMode= "contain" style={{color: focused? '#FFFFFF':'#748c94',  }} size={25}></Fontisto><Text style={{color:focused? '#FFFFFF':'748c94', fontSize:12}}>Home</Text></View>)}}
 />
        <Tab.Screen name="Frofile" component={Frofile}  options={{tabBarIcon:({focused})=>(<View style={{alignItems:'center',justifyContent:'center',top:10}}><Fontisto  name="person" resizeMode= "contain" style={{color: focused? '#FFFFFF':'#748c94',  }} size={25}></Fontisto><Text style={{color:focused? '#FFFFFF':'748c94', fontSize:12}}>Frofile</Text></View>)}} />
        <Tab.Screen name="Search" component={Search}  options={{tabBarIcon:({focused})=>(<View style={{alignItems:'center',justifyContent:'center',top:10}}><Fontisto  name="search" resizeMode= "contain" style={{color: focused? '#FFFFFF':'#748c94',  }} size={25}></Fontisto><Text style={{color:focused? '#FFFFFF':'748c94', fontSize:12}}>Search</Text></View>)}}/>
        <Tab.Screen  name="Like" component={Like} options={{tabBarIcon:({focused})=>(<View style={{alignItems:'center',justifyContent:'center',top:10}}><Fontisto  name="like" resizeMode= "contain" style={{color: focused? '#FFFFFF':'#748c94',  }} size={25}></Fontisto><Text style={{color:focused? '#FFFFFF':'748c94', fontSize:12}}>Like</Text></View>)}}/>
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
