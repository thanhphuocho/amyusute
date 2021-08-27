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



export default function Search ({navigation}){
    const [train, setTrain] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

   const [searchQuery, setSearchQuery] = React.useState('');
 
   const onChangeSearch = query => setSearchQuery(query);

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
                name: "ＪＲ",


                train:[{
                  trainId:1,
                  name:"秋葉原",
                  read:"アキハバラ",
                  trainLocation:{
                      latitude: 35.69841783163553,
                      longitude:139.77307169815447
                  },
                  menu:[
                    {
                    menuId:1,
                    name:"カラオケまねきねこ 秋葉原店",
                    duration: "6分",
                    photo:images.akikara,
                    time:"11時-23時",
                    location:{
                        latitude:35.70172331664533,
                        longitude:139.7711730575202
                    }},
                  {
                    menuId:2,
                    name:"アニメイト秋葉原本館",
                    duration:"4分",
                    photo:images.akiani,
                    time:"11時-20時",
                    location:{
                        latitude:35.70063258371753, 
                        longitude:139.77169415433187
                    }
                    },
                    {
                        menuId:3,
                        name:"東京ドームシティ アトラクションズ",
                        duration: "6分",
                        time:"11時-20時",
                        photo:images.akidome,
                        location:{
                            latitude:35.70512221891897, 
                            longitude:139.7540310073553
                        }},
                    ]
                 },

                 {
                    trainId:2,
                    name:"池袋",
                    trainLocation:{
                        latitude: 35.69841783163553,
                        longitude:139.77307169815447
                    },
                    menu:[
                        {
                        menuId:1,
                        name:"カラオケまねきねこ 秋葉原店",
                        duration: "6分",
                        location:{
                            latitude:35.70172331664533,
                            longitude:139.7711730575202
                        }},
                      {
                        menuId:2,
                        name:"アニメイト秋葉原本館",
                        duration:"4分",
                        location:{
                            latitude:35.70063258371753, 
                            longitude:139.77169415433187
                        }
                        },
                        {
                            menuId:3,
                            name:"東京ドームシティ アトラクションズ",
                            duration: "6分",
                            location:{
                                latitude:35.70512221891897, 
                                longitude:139.7540310073553
                            }},
                        ]
                 },
                 {
                     trainId:3,
                     name:"上野",
                     read:"ウエノ"
                 },
                 {
                     trainId:4,
                     name:"鶯谷",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:5,
                     name:"恵比寿",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:6,
                     name:"大崎",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:7,
                     name:"大塚"
                     ,read:"ウグスダニ"
                 },
                 {
                     trainId:8,
                     name:"御徒町",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:9,
                     name:"神田",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:10,
                     name:"五反田",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:11,
                     name:"駒込",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:12,
                     name:"品川",
                     read:"ウグスダニ"
                 },
                 {
                     trainId:13,
                     name:"渋谷"
                 },
                 {
                     trainId:14,
                     name:"新大久保"
                 },
                 {
                     trainId:15,
                     name:"新宿"
                 },
                 {
                     trainId:16,
                     name:"新橋"
                 },
                 {
                     trainId:17,
                     name:"巣鴨"
                 },
                 {
                     trainId:18,
                     name:"高田馬場"
                 },
                 {
                     trainId:19,
                     name:"高輪ゲートウェイ"
                 },
                 {
                     trainId:20,
                     name:"田端"
                 },
                 {
                     trainId:21,
                     name:"田町"
                 },
                 {
                     trainId:22,
                     name:"東京"
                 },
                 {
                     trainId:23,
                     name:"西日暮里"
                 },
                 {
                     trainId:24,
                     name:"日暮里"
                 },
                 {
                     trainId:25,
                     name:"浜松町"
                 },
                 {
                     trainId:26,
                     name:"原宿"
                 },
                 {
                     trainId:27,
                     name:"目黒"
                 },
                 {
                     trainId:28,
                     name:"目白"
                 },
                 {
                     trainId:29,
                     name:"有楽町"
                 },
                 {
                     trainId:30,
                     name:"代々木"
                 }
                ]
                
                },
                {
                    id: 2,
                    name: "東京メトロ",
                    train:[{
                        trainId:1,
                        name:"丸ノ内線",
                       },
      
                       {
                          trainId:2,
                          name:"中野坂上-方南町"
                       },
                       {
                           trainId:3,
                           name:"銀座線）"
                       },
                       {
                           trainId:4,
                           name:"千代田線）"
                       },
                       {
                           trainId:5,
                           name:"綾瀬-北綾瀬"
                       },
                       {
                           trainId:6,
                           name:"東西線"
                       },
                       {
                           trainId:7,
                           name:"南北線"
                       },
                       {
                           trainId:8,
                           name:"日比谷線"
                       },
                       {
                           trainId:9,
                           name:"半蔵門線"
                       },
                       {
                           trainId:10,
                           name:"有楽町線"
                       },
                       {
                           trainId:11,
                           name:"副都心線"
                       },
                       {
                           trainId:12,
                           name:"千代田有楽町連絡線"
                       },
                       
                      ]
                    },
                     {
                id: 3,
                name: "東急電鉄",
                train:[{
                    trainId:1,
                    name:"秋葉原（あきはばら",
                   },
  
                   {
                      trainId:2,
                      name:"池袋（いけぶくろ）"
                   },
                   {
                       trainId:3,
                       name:"上野（うえの）"
                   },
                   {
                       trainId:4,
                       name:"鶯谷（うぐいすだに）"
                   },
                   {
                       trainId:5,
                       name:"恵比寿（えびす）"
                   },
                   {
                       trainId:6,
                       name:"大崎（おおさき）"
                   },
                   {
                       trainId:7,
                       name:"大塚（おおつか）"
                   },
                   {
                       trainId:8,
                       name:"御徒町（おかちまち）"
                   },
                   {
                       trainId:9,
                       name:"神田（かんだ）"
                   },
                   {
                       trainId:10,
                       name:"五反田（ごたんだ）"
                   },
                   {
                       trainId:11,
                       name:"駒込（こまごめ）"
                   },
                   {
                       trainId:12,
                       name:"品川（しながわ）"
                   },
                   {
                       trainId:13,
                       name:"渋谷（しぶや）"
                   },
                   {
                       trainId:14,
                       name:"新大久保（しんおおくぼ）"
                   },
                   {
                       trainId:15,
                       name:"新宿（しんじゅく）"
                   },
                   {
                       trainId:16,
                       name:"新橋（しんばし）"
                   },
                   {
                       trainId:17,
                       name:"巣鴨（すがも）"
                   },
                   {
                       trainId:18,
                       name:"高田馬場（たかだのばば）"
                   },
                   {
                       trainId:19,
                       name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                   },
                   {
                       trainId:20,
                       name:"田端（たばた）"
                   },
                   {
                       trainId:21,
                       name:"田町（たまち）"
                   },
                   {
                       trainId:22,
                       name:"東京（とうきょう）"
                   },
                   {
                       trainId:23,
                       name:"西日暮里（にしにっぽり）"
                   },
                   {
                       trainId:24,
                       name:"日暮里（にっぽり）"
                   },
                   {
                       trainId:25,
                       name:"浜松町（はままつちょう）"
                   },
                   {
                       trainId:26,
                       name:"原宿（はらじゅく）"
                   },
                   {
                       trainId:27,
                       name:"目黒（めぐろ）"
                   },
                   {
                       trainId:28,
                       name:"目白（めじろ）"
                   },
                   {
                       trainId:29,
                       name:"有楽町（ゆうらくちょう）"
                   },
                   {
                       trainId:30,
                       name:"代々木（よよぎ）"
                   }
                  ]
                },
                { id: 4,
                    name: "京王電鉄",
                    train:[{
                        trainId:1,
                        name:"秋葉原（あきはばら",
                       },
      
                       {
                          trainId:2,
                          name:"池袋（いけぶくろ）"
                       },
                       {
                           trainId:3,
                           name:"上野（うえの）"
                       },
                       {
                           trainId:4,
                           name:"鶯谷（うぐいすだに）"
                       },
                       {
                           trainId:5,
                           name:"恵比寿（えびす）"
                       },
                       {
                           trainId:6,
                           name:"大崎（おおさき）"
                       },
                       {
                           trainId:7,
                           name:"大塚（おおつか）"
                       },
                       {
                           trainId:8,
                           name:"御徒町（おかちまち）"
                       },
                       {
                           trainId:9,
                           name:"神田（かんだ）"
                       },
                       {
                           trainId:10,
                           name:"五反田（ごたんだ）"
                       },
                       {
                           trainId:11,
                           name:"駒込（こまごめ）"
                       },
                       {
                           trainId:12,
                           name:"品川（しながわ）"
                       },
                       {
                           trainId:13,
                           name:"渋谷（しぶや）"
                       },
                       {
                           trainId:14,
                           name:"新大久保（しんおおくぼ）"
                       },
                       {
                           trainId:15,
                           name:"新宿（しんじゅく）"
                       },
                       {
                           trainId:16,
                           name:"新橋（しんばし）"
                       },
                       {
                           trainId:17,
                           name:"巣鴨（すがも）"
                       },
                       {
                           trainId:18,
                           name:"高田馬場（たかだのばば）"
                       },
                       {
                           trainId:19,
                           name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                       },
                       {
                           trainId:20,
                           name:"田端（たばた）"
                       },
                       {
                           trainId:21,
                           name:"田町（たまち）"
                       },
                       {
                           trainId:22,
                           name:"東京（とうきょう）"
                       },
                       {
                           trainId:23,
                           name:"西日暮里（にしにっぽり）"
                       },
                       {
                           trainId:24,
                           name:"日暮里（にっぽり）"
                       },
                       {
                           trainId:25,
                           name:"浜松町（はままつちょう）"
                       },
                       {
                           trainId:26,
                           name:"原宿（はらじゅく）"
                       },
                       {
                           trainId:27,
                           name:"目黒（めぐろ）"
                       },
                       {
                           trainId:28,
                           name:"目白（めじろ）"
                       },
                       {
                           trainId:29,
                           name:"有楽町（ゆうらくちょう）"
                       },
                       {
                           trainId:30,
                           name:"代々木（よよぎ）"
                       }
                      ]
                   },
                {
                    id: 5,
                    name:"栃小田急電鉄",
                    train:[{
                        trainId:1,
                        name:"秋葉原（あきはばら",
                       },
      
                       {
                          trainId:2,
                          name:"池袋（いけぶくろ）"
                       },
                       {
                           trainId:3,
                           name:"上野（うえの）"
                       },
                       {
                           trainId:4,
                           name:"鶯谷（うぐいすだに）"
                       },
                       {
                           trainId:5,
                           name:"恵比寿（えびす）"
                       },
                       {
                           trainId:6,
                           name:"大崎（おおさき）"
                       },
                       {
                           trainId:7,
                           name:"大塚（おおつか）"
                       },
                       {
                           trainId:8,
                           name:"御徒町（おかちまち）"
                       },
                       {
                           trainId:9,
                           name:"神田（かんだ）"
                       },
                       {
                           trainId:10,
                           name:"五反田（ごたんだ）"
                       },
                       {
                           trainId:11,
                           name:"駒込（こまごめ）"
                       },
                       {
                           trainId:12,
                           name:"品川（しながわ）"
                       },
                       {
                           trainId:13,
                           name:"渋谷（しぶや）"
                       },
                       {
                           trainId:14,
                           name:"新大久保（しんおおくぼ）"
                       },
                       {
                           trainId:15,
                           name:"新宿（しんじゅく）"
                       },
                       {
                           trainId:16,
                           name:"新橋（しんばし）"
                       },
                       {
                           trainId:17,
                           name:"巣鴨（すがも）"
                       },
                       {
                           trainId:18,
                           name:"高田馬場（たかだのばば）"
                       },
                       {
                           trainId:19,
                           name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                       },
                       {
                           trainId:20,
                           name:"田端（たばた）"
                       },
                       {
                           trainId:21,
                           name:"田町（たまち）"
                       },
                       {
                           trainId:22,
                           name:"東京（とうきょう）"
                       },
                       {
                           trainId:23,
                           name:"西日暮里（にしにっぽり）"
                       },
                       {
                           trainId:24,
                           name:"日暮里（にっぽり）"
                       },
                       {
                           trainId:25,
                           name:"浜松町（はままつちょう）"
                       },
                       {
                           trainId:26,
                           name:"原宿（はらじゅく）"
                       },
                       {
                           trainId:27,
                           name:"目黒（めぐろ）"
                       },
                       {
                           trainId:28,
                           name:"目白（めじろ）"
                       },
                       {
                           trainId:29,
                           name:"有楽町（ゆうらくちょう）"
                       },
                       {
                           trainId:30,
                           name:"代々木（よよぎ）"
                       }
                      ]
                },
                {
                    id:6,
                    name:"西武鉄道",
                    train:[{
                        trainId:1,
                        name:"秋葉原（あきはばら",
                       },
      
                       {
                          trainId:2,
                          name:"池袋（いけぶくろ）"
                       },
                       {
                           trainId:3,
                           name:"上野（うえの）"
                       },
                       {
                           trainId:4,
                           name:"鶯谷（うぐいすだに）"
                       },
                       {
                           trainId:5,
                           name:"恵比寿（えびす）"
                       },
                       {
                           trainId:6,
                           name:"大崎（おおさき）"
                       },
                       {
                           trainId:7,
                           name:"大塚（おおつか）"
                       },
                       {
                           trainId:8,
                           name:"御徒町（おかちまち）"
                       },
                       {
                           trainId:9,
                           name:"神田（かんだ）"
                       },
                       {
                           trainId:10,
                           name:"五反田（ごたんだ）"
                       },
                       {
                           trainId:11,
                           name:"駒込（こまごめ）"
                       },
                       {
                           trainId:12,
                           name:"品川（しながわ）"
                       },
                       {
                           trainId:13,
                           name:"渋谷（しぶや）"
                       },
                       {
                           trainId:14,
                           name:"新大久保（しんおおくぼ）"
                       },
                       {
                           trainId:15,
                           name:"新宿（しんじゅく）"
                       },
                       {
                           trainId:16,
                           name:"新橋（しんばし）"
                       },
                       {
                           trainId:17,
                           name:"巣鴨（すがも）"
                       },
                       {
                           trainId:18,
                           name:"高田馬場（たかだのばば）"
                       },
                       {
                           trainId:19,
                           name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                       },
                       {
                           trainId:20,
                           name:"田端（たばた）"
                       },
                       {
                           trainId:21,
                           name:"田町（たまち）"
                       },
                       {
                           trainId:22,
                           name:"東京（とうきょう）"
                       },
                       {
                           trainId:23,
                           name:"西日暮里（にしにっぽり）"
                       },
                       {
                           trainId:24,
                           name:"日暮里（にっぽり）"
                       },
                       {
                           trainId:25,
                           name:"浜松町（はままつちょう）"
                       },
                       {
                           trainId:26,
                           name:"原宿（はらじゅく）"
                       },
                       {
                           trainId:27,
                           name:"目黒（めぐろ）"
                       },
                       {
                           trainId:28,
                           name:"目白（めじろ）"
                       },
                       {
                           trainId:29,
                           name:"有楽町（ゆうらくちょう）"
                       },
                       {
                           trainId:30,
                           name:"代々木（よよぎ）"
                       }
                      ]
                },
                {
                    id:7,
                    name:"京浜急行電鉄",
                    train:[{
                        trainId:1,
                        name:"秋葉原（あきはばら",
                       },
      
                       {
                          trainId:2,
                          name:"池袋（いけぶくろ）"
                       },
                       {
                           trainId:3,
                           name:"上野（うえの）"
                       },
                       {
                           trainId:4,
                           name:"鶯谷（うぐいすだに）"
                       },
                       {
                           trainId:5,
                           name:"恵比寿（えびす）"
                       },
                       {
                           trainId:6,
                           name:"大崎（おおさき）"
                       },
                       {
                           trainId:7,
                           name:"大塚（おおつか）"
                       },
                       {
                           trainId:8,
                           name:"御徒町（おかちまち）"
                       },
                       {
                           trainId:9,
                           name:"神田（かんだ）"
                       },
                       {
                           trainId:10,
                           name:"五反田（ごたんだ）"
                       },
                       {
                           trainId:11,
                           name:"駒込（こまごめ）"
                       },
                       {
                           trainId:12,
                           name:"品川（しながわ）"
                       },
                       {
                           trainId:13,
                           name:"渋谷（しぶや）"
                       },
                       {
                           trainId:14,
                           name:"新大久保（しんおおくぼ）"
                       },
                       {
                           trainId:15,
                           name:"新宿（しんじゅく）"
                       },
                       {
                           trainId:16,
                           name:"新橋（しんばし）"
                       },
                       {
                           trainId:17,
                           name:"巣鴨（すがも）"
                       },
                       {
                           trainId:18,
                           name:"高田馬場（たかだのばば）"
                       },
                       {
                           trainId:19,
                           name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                       },
                       {
                           trainId:20,
                           name:"田端（たばた）"
                       },
                       {
                           trainId:21,
                           name:"田町（たまち）"
                       },
                       {
                           trainId:22,
                           name:"東京（とうきょう）"
                       },
                       {
                           trainId:23,
                           name:"西日暮里（にしにっぽり）"
                       },
                       {
                           trainId:24,
                           name:"日暮里（にっぽり）"
                       },
                       {
                           trainId:25,
                           name:"浜松町（はままつちょう）"
                       },
                       {
                           trainId:26,
                           name:"原宿（はらじゅく）"
                       },
                       {
                           trainId:27,
                           name:"目黒（めぐろ）"
                       },
                       {
                           trainId:28,
                           name:"目白（めじろ）"
                       },
                       {
                           trainId:29,
                           name:"有楽町（ゆうらくちょう）"
                       },
                       {
                           trainId:30,
                           name:"代々木（よよぎ）"
                       }
                      ]
                },
                {
                    id:8,
                    name:"京成電鉄",
                    train:[{
                        trainId:1,
                        name:"秋葉原（あきはばら",
                       },
      
                       {
                          trainId:2,
                          name:"池袋（いけぶくろ）"
                       },
                       {
                           trainId:3,
                           name:"上野（うえの）"
                       },
                       {
                           trainId:4,
                           name:"鶯谷（うぐいすだに）"
                       },
                       {
                           trainId:5,
                           name:"恵比寿（えびす）"
                       },
                       {
                           trainId:6,
                           name:"大崎（おおさき）"
                       },
                       {
                           trainId:7,
                           name:"大塚（おおつか）"
                       },
                       {
                           trainId:8,
                           name:"御徒町（おかちまち）"
                       },
                       {
                           trainId:9,
                           name:"神田（かんだ）"
                       },
                       {
                           trainId:10,
                           name:"五反田（ごたんだ）"
                       },
                       {
                           trainId:11,
                           name:"駒込（こまごめ）"
                       },
                       {
                           trainId:12,
                           name:"品川（しながわ）"
                       },
                       {
                           trainId:13,
                           name:"渋谷（しぶや）"
                       },
                       {
                           trainId:14,
                           name:"新大久保（しんおおくぼ）"
                       },
                       {
                           trainId:15,
                           name:"新宿（しんじゅく）"
                       },
                       {
                           trainId:16,
                           name:"新橋（しんばし）"
                       },
                       {
                           trainId:17,
                           name:"巣鴨（すがも）"
                       },
                       {
                           trainId:18,
                           name:"高田馬場（たかだのばば）"
                       },
                       {
                           trainId:19,
                           name:"高輪ゲートウェイ（たかなわげーとうぇい）"
                       },
                       {
                           trainId:20,
                           name:"田端（たばた）"
                       },
                       {
                           trainId:21,
                           name:"田町（たまち）"
                       },
                       {
                           trainId:22,
                           name:"東京（とうきょう）"
                       },
                       {
                           trainId:23,
                           name:"西日暮里（にしにっぽり）"
                       },
                       {
                           trainId:24,
                           name:"日暮里（にっぽり）"
                       },
                       {
                           trainId:25,
                           name:"浜松町（はままつちょう）"
                       },
                       {
                           trainId:26,
                           name:"原宿（はらじゅく）"
                       },
                       {
                           trainId:27,
                           name:"目黒（めぐろ）"
                       },
                       {
                           trainId:28,
                           name:"目白（めじろ）"
                       },
                       {
                           trainId:29,
                           name:"有楽町（ゆうらくちょう）"
                       },
                       {
                           trainId:30,
                           name:"代々木（よよぎ）"
                       }
                      ]
                }
                
    

        ]
        
    
        
         
      
       



        
        function renderHeader(){
            return(
            
            <View style={{ flexDirection: 'row', height: 40,}}>
                
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

        
            function renderBody()  {
                return(
                    <View style={{borderRadius:50,position:"absolute",top:90,zIndex: 2}}>
                        
                        <TouchableOpacity style={{width:50,paddingLeft:SIZES.padding*2,justifyContent:"center"}}
                        onPress={()=> navigation.goBack()}>
                            <Image
                               source={images.backbutton}
                               resizeMode="contain"
                               style={{width:30,height:30}}
                            ></Image>
                        </TouchableOpacity>
                        
                        </View>
                )}
        
         function renderRestaurantList() {
       
        
        return(
           
            <View  style={{marginTop:SIZES.padding*2,marginBottom:SIZES.padding*20,borderRadius:50}}>
                
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
                    <Text style={{...FONTS.h3,justifyContent:"center",alignItems:"center",position:"absolute",paddingLeft:SIZES.padding*1.7,paddingTop:SIZES.padding}} >地</Text>
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
                style={{paddingTop:SIZES.padding*2}}
                data={restaurantData}
                
                
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>(
                    <TouchableOpacity
                style={{ }}
                onPress={() => navigation.navigate("train", {
                    item,
                    currentLocation
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
                            borderRadius: SIZES.radius*5,
                            height: 60,
                            justifyContent:'center',
                            alignItems: 'center',
                            
                           
                            
                        }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("train", {
                    item,})}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 60,
                            width: 300,
                            backgroundColor:"#F7B939",
                            paddingLeft:SIZES.padding*2,
                            paddingTop:SIZES.padding*1.5,
                            marginBottom:SIZES.padding*2,
                            

                            borderRadius:2,
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
                   {renderBody()}
                  
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
