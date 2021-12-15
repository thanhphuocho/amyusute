import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import train from './HomeScreen/train'
import Search from './HomeScreen/Search';
import HomeScreen from './screens/HomeScreen';
import listmenu from './HomeScreen/listmenu';
import store from './HomeScreen/store';
import main from './HomeScreen/main';
import address from './HomeScreen/address';
import Frofile from './HomeScreen/Frofile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="train" component={train}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="listmenu" component ={listmenu}/>
        <Stack.Screen name="store" component ={store}/>
        <Stack.Screen name="main" component ={main}/>
        <Stack.Screen name="address" component ={address}/>
        <Stack.Screen name="Frofile" component ={Frofile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App