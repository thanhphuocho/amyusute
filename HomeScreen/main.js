import React from "react";
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
import { isIphoneX } from 'react-native-iphone-x-helper'
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {  images, SIZES, COLORS,FONTS,icons } from '../constants'

const main = ({ navigation }) => {

    const scrollX = new Animated.Value(0);
  

   
    const restaurantData = [
        {
            id: 1,
            name: "Animate Akihabara Main Building",
            rating: 4.8,
            photo: images.akiani,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            },
            {
                id: 2,
                name: "Tokyo Dome City Attractions",
                rating: 4.8,
                photo: images.akidome,
                duration: "10 - 15 min",
                location: {
                    latitude: 1.5347282806345879,
                    longitude: 110.35632207358996,
                },
                },
                 {
            id: 3,
            name: "Disney Sea",
            rating: 4.8,
            photo: images.avatar1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            },
           
        ]
        
    

    function renderHeader(){
        return(
        
        <View style={{ flexDirection: 'row', height: 40, }}>
            
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center',
                    
                }}
            > 
            <Image
                    source={images.weather100}
                    resizeMode="contain"
                    style={{
                        width:50
                    }}
                />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               
            </View>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
                <AntDesign
                    name="bells"
                    resizeMode="contain"
                    style={{
                        fontSize:25
                    }}
                />

            </TouchableOpacity>
            </View>
        )};

//header

function renderBody(){

    return(
           <View style={{
           
            justifyContent: "flex-end",
            alignItems: "center"}}>
                 <Image source={images.back} resizeMode="repeat"
                style={{
                    width: "100%",
                    position:"absolute",
                    height: "100%",
                
                    }}/>
            
                <FlatList
                
                data={restaurantData}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle = {16}
                decelerationRate ={"fast"}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                
                renderItem={({item,index}) =>(
                    <View
                style={{ height:400 }}
                
            >
                {/* Image */}
                <View
                    style={{
                        
                        
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width,
                           
                            
                        }}
                    />
                    <View style={{width:200,position:"absolute",justifyContent:"center",alignItems:"center",top:"40%",left:"30%"}}><Text style={{color:COLORS.white,...FONTS.h1,fontWeight:"700"}}>{item.name}</Text></View>
                    
                      
                
                </View>
                </View>
                )}
            />
            <View style={{backgroundColor:"#A3A3A3",width:350, height:150,position:"relation",bottom:110}}>
                <Image source={images.search} resizeMode="contain" style={{width:140,position:"absolute",bottom:-178}} />
                <View style={{ backgroundColor:COLORS.white,width:180,height:35,borderRadius:SIZES.radius,justifyContent:"center",paddingLeft:10,...styles.shadow,position:"relative",top:60,left:150}}><TouchableOpacity onPress={()=>navigation.navigate('address')}><Text style={{...FONTS.h5,color:"#958C8C"}}>Search...</Text></TouchableOpacity></View>
                <View style={{justifyContent:"center",paddingLeft:10,...styles.shadow,position:"relative",top:60,left:150}}><Text style={{...FONTS.h6}} >人気の駅：下北沢、渋谷</Text ></View>
            </View>
            <View style={{backgroundColor:"#FAC44A" ,width:350, height:150,position:"relation",bottom:90  }}>
            <Image source={images.choice} resizeMode="contain" style={{width:140,position:"absolute",bottom:-178}} />
            <View style={{ backgroundColor:COLORS.white,width:183,height:48,justifyContent:"center",paddingLeft:20,paddingRight:10,...styles.shadow,position:"relative",top:60,left:150,}}><TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} onPress={()=>navigation.navigate('Search')}><Text style={{...FONTS.h5,color:"#958C8C",}}>遊ぶ駅を選択</Text><Image  source={images.rightarrow} resizeMode="contain" style={{width:30,height:30}}/></TouchableOpacity></View>
            </View>
            </View>
                    
                
            
           
    )
}

return(
<SafeAreaView style={styles.container}>
{renderHeader()}
{renderBody()}





</SafeAreaView>
)}


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
export default main;