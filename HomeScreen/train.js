import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import {  images, SIZES, COLORS,FONTS,icons } from '../constants'
import { ListItem, Icon } from 'react-native-elements'



export default function Home({navigation}){


    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }
    //icons
  
    const restaurantData = [
        {
            id: 1,
            name: "東京",
            
            },
            {
                id: 2,
                name: "埼玉",
               
                },
                 {
            id: 3,
            name: "神奈川",
           
            },
            { id: 4,
                name: "千葉",
               },
			{
				id: 5,
				name:"栃木"
			},
			{
				id:6,
				name:"群馬"
			},
			{
				id:7,
				name:"茨城"
			}
            

        ]
        
    

    
        const [searchQuery, setSearchQuery] = React.useState('');
      
        const onChangeSearch = query => setSearchQuery(query);
      
       



        
        function renderHeader(){
            return(
            
            <View style={{ flexDirection: 'row', height: 40 }}>
                
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
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
                    <View>
                        <Searchbar  placeholder="Search"
                                    onChangeText={onChangeSearch}
                                    value={searchQuery} style={{ ...FONTS.h3,width: '70%',
                                    height: "100%",
                                    backgroundColor: COLORS.lightGray3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: SIZES.radius }}></Searchbar>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Fontisto
                        name="twitch"
                        resizeMode="contain"
                        style={{
                            fontSize:25
                        }}
                    />
                </TouchableOpacity>
                </View>
            )}

        
       
        
         function renderRestaurantList() {
       
        
        return(
           
            <View  style={{marginTop:SIZES.padding*3,marginBottom:SIZES.padding*30,borderRadius:50}}>
                
                <Image source={images.back} resizeMode="repeat"
                style={{
                    width: "100%",
                    position:"absolute",
                    height: "100%",
                
                    }}/>
                
                
                <View>
                
                <Image source={images.japan} resizeMode="contain"

                 style={{
                        marginTop:SIZES.padding*2,
                        marginBottom:SIZES.padding*3,
                        width:"100%",
                        height:50,
                        justifyContent:"center",
                        alignItems:"center"
                  }}/>

                <View　style={{flexDirection:"row",justifyContent:"center",marginBottom:SIZES.padding*2}}>
                    <View style={{backgroundColor:"#6C9BD2",width:50, borderRadius: SIZES.radius*50,height:50,}}>
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"centers",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >地</Text>
                    </View>
                    <View style={{backgroundColor:"#F7B939",width:50, borderRadius: SIZES.radius*50,height:50}}>
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"centers",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >方</Text>
                    </View>
                    <View style={{backgroundColor:"#6C9BD2",width:50, borderRadius: SIZES.radius*50,height:50,}}>
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"centers",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >を</Text>
                    </View>
                    <View style={{backgroundColor:"#F7B939",width:50, borderRadius: SIZES.radius*50,height:50,}}>
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"centers",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >選</Text>
                    </View>
                    <View style={{backgroundColor:"#6C9BD2",width:50, borderRadius: SIZES.radius*50,height:50,}}>
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"centers",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >択</Text>
                    </View>
                </View> 
                </View>
                <FlatList
                
                data={restaurantData}
                
                
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>(
                    <TouchableOpacity
                style={{ }}
                onPress={() => navigation.navigate("Map", {
                    item,
                   
                })}
            >   
                {/* Image */}
                <View 
                    style={{
                        justifyContent:'center',
                        alignItems: 'center',
                    
                        
                    }}
                >
                    

                  


                    <View
                       
                        
                        style={{
                            width: "100%",
                            flexDirection:"row",
                            borderRadius: SIZES.radius,
                            height: 60,
                            justifyContent:'center',
                            alignItems: 'center',
                           
                            
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("Map", {
                    item,})}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 60,
                            width: 300,
                            backgroundColor:"#F7B939",
                            paddingLeft:SIZES.padding*2,
                            paddingTop:SIZES.padding*2,
                            marginBottom:SIZES.padding,
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h2,color:"#ffffff" }}>{item.name}</Text>
                    </TouchableOpacity>
                
                </View>
                </TouchableOpacity>
                )}
            />
                    
                
            </View>
        )
    }

   

        return(
            <SafeAreaView style={styles.container}>
                   {renderHeader()}
                   
                  
                   {renderRestaurantList()}
                   
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
