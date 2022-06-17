import * as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Linking
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import {  images, SIZES, COLORS,FONTS,icons } from '../constants'
import { ListItem, Icon } from 'react-native-elements'

import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";



const store = ({ route, navigation }) => {
    const [train,setTrain] = React.useState(null);
    const mapView = React.useRef()
    
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)
    const[Menu,setMenu] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(null);
    
    
    React.useEffect(()=>{ 
        let {item,currentLocation,train} =  route.params

        let fromLoc = train.trainLocation
        let toLoc = item.location
        
        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        

        setTrain(item)
        setCurrentLocation(currentLocation)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)
        
    } ,[])

   
    function renderHeader(){//header
        return(
        
        <View style={{ flexDirection: 'row', height: 40, marginBottom:SIZES.padding,marginTop:SIZES.padding*6}}>
            
            
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{width:280,backgroundColor: COLORS.lightGray3,
                                    alignItems: 'center',justifyContent:"center",height:50, borderRadius: SIZES.radius,...styles.shadow,}}>
                        <Image source={images.pin} resizeMode="contain" style={{width:20,position:"absolute",left:10,tintColor:COLORS.blue}}/>
                        <Text style={{...FONTS.h5,fontWeight:"600",justifyContent:"center",justifyContent:"center"}}>{train?.name}</Text>
                        <Text style={{...FONTS.h5,fontWeight:"600"}}>{Math.ceil(duration)} mins</Text>
                    </View>
                </View>
            
            </View>
        )}


        function renderBody()  {
            return(
                <View style={{borderRadius:50,position:"absolute",top:70}}>
                    
                    <TouchableOpacity style={{width:50,paddingLeft:5,justifyContent:"center"}}
                    onPress={()=> navigation.goBack()}>
                        <Image
                           source={images.backbutton}
                           resizeMode="contain"
                           style={{width:30,height:30}}
                        ></Image>
                    </TouchableOpacity>
                    
                    </View>
            )}
    

    
    function renderMap() {
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                     <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.blue
                        }}
                    >
                        <Image
                            source={images.mapicon}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                    </View>
                    
                   
                    </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
            >
                <Image
                    source={images.train1}
                    style={{
                        width: 40,
                        height: 40,
                        tintColor:COLORS.black
                        
                    }}
                />
                
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    initialRegion={region}
                    style={{ flex: 1 }}
                    provider="google"
                >
            <MapViewDirections
			    origin={fromLocation}
			    destination={toLocation}
			    apikey="AIzaSyAFsElQz4XoLiGo1ComfXNn9MZMTi0G-B4"
			    strokeWidth={5}
			    strokeColor={COLORS.orange}
			    optimizeWaypoints={true}
                onReady={result => {
                    setDuration(result.duration)

                    if (!isReady) {
                        // Fit route into maps
                        mapView.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: (SIZES.width / 20),
                                bottom: (SIZES.height / 4),
                                left: (SIZES.width / 20),
                                top: (SIZES.height / 8)
                            }
                        })}}}
               
                   
				//map diretion
			/>
                 {destinationMarker()}
                 {carIcon()}
                </MapView>
            </View>)
    
        
     }
   
     const googleURL = `https://www.google.com/maps/search/?api=1&query=${latitude,longitude}`
     function renderfooter(){
         return(
        <View
        style={{
            height: 50,
            width: 50,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            marginBottom:20,
            marginLeft:20
        }}
    >
         <View
            style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.blue,
            }}
        ><TouchableOpacity onPress={()=>Linking.openURL(googleURL)} >
            <Image
                source={images.mapicon}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.white
                }}
            /></TouchableOpacity>
        </View>
        </View>
        
         )}
    

        return (
            <View style={{ flex: 1 }}>
                {renderHeader()}
                {renderBody()}
               {renderMap()}
               {renderfooter()}
                
            </View>
        )
    
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

export default store

