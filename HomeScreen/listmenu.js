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
import { AntDesign } from '@expo/vector-icons';





const listmenu  =({route,navigation})=>{
   
    const [train,setTrain] = React.useState(null);
    
    const[Menu,setMenu] = React.useState(null)
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
                onPress={() => navigation.navigate("HomeScreen")}
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
                        paddingLeft:20,
                        justifyContent: 'center'
                    }}
                    >
                   <View
                       style={{
                           
                           
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width:210,
                        borderRadius: SIZES.radius,
                           backgroundColor:"#F7B939",
                        flexDirection:"row",
                           

                           borderRadius:2,
                           ...styles.shadow
                       }}
                   ><Image source={images.pin} resizeMode="contain"
                   style={{
                    position:"absolute",
                    left:-60,
                    width:"100%",
                    height:25,
                    justifyContent:"center",
                    alignItems:"center"
              }}/>
                       <Text style={{...FONTS.h2,fontWeight:"500",position:"absolute",left:70}}>{train?.name}</Text>
                       </View>
                       
                       </View>




                       <View
                    style={{
                       
                        paddingLeft:200,
                        justifyContent: 'center'
                    }}
                    >
                   <View
                       style={{
                           
                           
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:145,
                        borderRadius: SIZES.radius,
                           backgroundColor:"#6C9BD2",
                          
                           

                           borderRadius:2,
                           ...styles.shadow
                       }}
                   ><Text style={{...FONTS.h4}}>{train?.read}</Text>
                       </View>
                       
                       </View>
                   


            
                       <ScrollView style={{marginTop:SIZES.padding*3}}>
                       <View style={{}} >
                      {train?.menu.map((item,index)=>(
                           <View 
                           key={`train-${index}`}
                           style={{alignItems:"center",}}>
                                <View>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate("store", {
                                        item,train:train})}
                                            style={{
                                                
                                                bottom: 0,
                                                
                                                
                                                marginBottom:SIZES.padding*3,
                                                alignItems:"center",
                                                justifyContent:"center",
                    
                                                borderRadius:2,
                                                ...styles.shadow
                                            }}>
                                     <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: 300,
                            flexDirection:"row",
                           
                            height: 180,
                            justifyContent:'center',
                            alignItems: 'center',
                            borderTopRightRadius: SIZES.radius,
                            borderTopLeftRadius: SIZES.radius,
                        }}
                    />
                    <View
                        style={{
                            position:"absolute",
                            left:0,
                            bottom: 70,
                            height: 30,
                            width:75,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius*2,
                            flexDirection:"row",
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    ><Image source={images.walking} resizeMode="cover" style={{width:25,height:25}}></Image>
                        <Text style={{ ...FONTS.h5 }}>{item.duration}</Text>
                        
                    </View>

                    <View
                    style={{
                        position:"relative",
                        top:0,
                        width:300,
                        height:70,
                        backgroundColor:COLORS.white,
                        alignItems:"center",
                        justifyContent:"center",
                        borderBottomRightRadius:SIZES.radius,
                        borderBottomLeftRadius:SIZES.radius,
                        ...styles.shadow
                    }}
                    ><Text style={{...FONTS.h5,fontWeight:"800",position:"absolute",left:20,bottom:10,width:150}}>{item.name}</Text>
                    <View style={{flexDirection:"row",...FONTS.h5,position:"absolute",left:30,bottom:45}}>
                    <Text style={{color:"#0057BC",fontSize:50,position:"absolute",bottom:-15,right:90}}>・</Text>
                    <Text>営業中:{item.time}</Text></View>
                    </View>
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
    
export default listmenu;
          
    

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
