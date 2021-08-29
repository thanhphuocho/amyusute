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
import { AntDesign } from '@expo/vector-icons'; 
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
    const categoryData = [
        {
            id: 1,
            name: "summer",
            
            
        },
        {
            id: 2,
            name: "valentine",
            
            
        },
        {
            id: 3,
            name: "chrismas",
            
           
        },
        {
            id: 4,
            name: "festival",
            
            
        },
        {
            id: 5,
            name: "Happy Birthday",
            
            
        },]


    const restaurantData = [
        {
            id: 1,
            name: "odaiba",
            rating: 4.8,
            photo: images.avatar1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            },
            {
                id: 2,
                name: "disneysea",
                rating: 4.8,
                photo: images.avatar2,
                duration: "10 - 15 min",
                location: {
                    latitude: 1.5347282806345879,
                    longitude: 110.35632207358996,
                },
                },
                 {
            id: 3,
            name: "peach",
            rating: 4.8,
            photo: images.avatar3,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            },
            { id: 4,
                name: "saa",
                rating: 4.8,
                photo: images.avatar4,
                duration: "30 - 45 min",
                location: {
                    latitude: 1.5347282806345879,
                    longitude: 110.35632207358996,
                },}
            

        ]
        
    

    
        const [categories, setCategories] = React.useState(categoryData)
        const [selectedCategory, setSelectedCategory] = React.useState(null)
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
                        <Searchbar  placeholder="検索"
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
                    <AntDesign
                        name="bells"
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
            <View  style={{marginTop:SIZES.padding*2,marginBottom:SIZES.padding*20,}}>
                <FlatList
                
                data={restaurantData}
                
                
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>(
                    <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Login", {
                    item,
                   
                })}
            >
                {/* Image */}
                <View
                    style={{
                        
                        marginLeft:SIZES.padding*2,
                        marginRight:SIZES.padding*2
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            flexDirection:"row",
                            
                            height: 200,
                            justifyContent:'center',
                            alignItems: 'center',
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                
                </View>
                </TouchableOpacity>
                )}
            />
                    
                
            </View>
        )
    }

    function renderMainCategories() {
        return(
            <View　style={{height:80,marginTop:SIZES.padding*2,marginLeft:SIZES.padding*2,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"}}>
                
                <Text style={{ ...FONTS.h1,marginRight:SIZES.padding*2 }}>Hot amyusute</Text>

                <FlatList 
                   data={categoryData}
                
                
                   keyExtractor={(item) => item.id}
                   renderItem={({item}) =>(
                    <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        width:100,
                        
                        paddingBottom: SIZES.padding * 2,
                       backgroundColor:COLORS.blue,
                       
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    
                >
                     <View
                        style={{
                            width: 100,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            
                        }}>
                             <Text style={{fontSize:20,color:COLORS.white}}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                   )}
                />
            </View>
        )}
        

        return(
            <SafeAreaView style={styles.container}>
                   {renderHeader()}
                   
                   {renderMainCategories()}
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
