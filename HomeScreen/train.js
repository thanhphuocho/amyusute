import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import {  images, SIZES, COLORS,FONTS,icons } from '../constants'
import { ListItem, Icon } from 'react-native-elements'





const train  =({route,navigation})=>{

    const [train,setTrain] = React.useState(null);
    
    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    React.useEffect(()=>{ 
        let {item,currentLocation} =  route.params
        setTrain(item)
        setCurrentLocation(currentLocation)

    })


    function renderHeader(){
        return(
        
        <View style={{ flexDirection: 'row', height: 40, marginBottom:SIZES.padding}}>
            
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

//header


        
    function renderBody()  {
        return(
            <View style={{marginTop:SIZES.padding,marginBottom:SIZES.padding*20,borderRadius:50}}>
                <Image source={images.back} resizeMode="repeat"
                style={{
                    width: "100%",
                    position:"absolute",
                    height: "100%",
                
                    }}/>
                <TouchableOpacity style={{width:50,paddingLeft:SIZES.padding*2,justifyContent:"center"}}
                onPress={()=> navigation.goBack()}>
                    <Image
                       source={images.backbutton}
                       resizeMode="contain"
                       style={{width:30,height:30}}
                    ></Image>
                </TouchableOpacity>
                
                
                
                <View
                       
                        
                       style={{
                           width: "100%",
                           
                           borderRadius: SIZES.radius*5,
                           height: 60,
                           justifyContent:'center',
                           alignItems: 'center',
                           
                          
                           
                       }}
                   />

                   <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                   <View
                       style={{
                           
                           
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:300,
                        borderRadius: SIZES.radius,
                           backgroundColor:"#F7B939",
                          
                           

                           borderRadius:2,
                           ...styles.shadow
                       }}
                   ><Text style={{...FONTS.h3}}>{train?.name}</Text>
                       </View>
                       </View>




                      <ScrollView style={{marginTop:SIZES.padding*3}}>
                       <View style={{}} >
                      {train?.train.map((item,index)=>(
                           <View 
                           key={`train-${index}`}
                           style={{alignItems:"center",}}>
                                <View>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate("", {
                                        item,})}
                                            style={{
                                                
                                                bottom: 0,
                                                height: 60,
                                                width: 300,
                                                backgroundColor:"#021940",
                                                alignItems:"center",
                                                justifyContent:"center",
                    
                                                borderRadius:2,
                                                ...styles.shadow
                                            }}>
                                    <Text style={{...FONTS.h3,color:"#FFFFFF",alignItems:"center",justifyContent:"center"}}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                           </View>
                      ))
                      }
                    </View>
                    
                    </ScrollView>
              
            </View>
            
        )
    }


//body
        return(
            <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderBody()}
            
            
           
            
            
            </SafeAreaView>
     
            
        )}
    
export default train;
          
    

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
