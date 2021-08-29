
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
   TextInput
} from "react-native";
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
import {  images, SIZES, COLORS,FONTS,icons } from '../constants'
import { ListItem, Icon } from 'react-native-elements'
import axios from "axios";




const address  =({navigation})=>{
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
//
    useEffect(() => {
       
        fetch("https://tetsudo.rti-giken.jp/free/delay.json")
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
          return()=>{}
      }, []);
      
      const [filteredDataSource, setFilteredDataSource] = useState([]);
      const [masterDataSource, setMasterDataSource] = useState([]);

    
      const [search, setSearch] = useState('');

      
        const searchFilter = (text) => {
            
            if (text) {
              const newData = masterDataSource.filter ((item) =>{
                const itemData = item.name
                  ? item.name.toUpperCase()
                  : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
              });
              setFilteredDataSource(newData);
              setSearch(text);
            } else {
              setFilteredDataSource(masterDataSource);
              setSearch(text);
            }
          };
        
        
    function renderHeader(){
        return(
            <View style={{height:"100%"}}>
            <View style={{backgroundColor:"#A3A3A3",width:"100%", height:150,}}>
                <Image source={images.search} resizeMode="contain" style={{width:140,position:"absolute",bottom:-178}} />
                <View style={{ backgroundColor:COLORS.white,width:180,height:35,borderRadius:SIZES.radius,justifyContent:"center",paddingLeft:10,...styles.shadow,position:"relative",top:60,left:150}}>
                   <TextInput value={search} placeholder="Seach" onChangeText={(text)=> searchFilter(text)} style={{...FONTS.h5,color:"#958C8C"}}></TextInput>
                </View>
                <View style={{justifyContent:"center",paddingLeft:10,...styles.shadow,position:"relative",top:60,left:150}}>
                <Text style={{...FONTS.h2,fontWeight:"500"}}></Text><Text style={{...FONTS.h6}} >人気の駅：下北沢、渋谷</Text ></View>
            
            </View>
            <View style={{paddingLeft:SIZES.padding*3, justifyContent:"center",backgroundColor:COLORS.white}}>
                <View style={{justifyContent:"center",alignItems:"center",paddingTop:20,width:"100%"}}><Text　style={{...FONTS.h3,color:"#1E88E5"}}>駅</Text>
                <Text style={{marginTop:10,backgroundColor:"#1E88E5",width:"100%",height:2}}></Text>
                </View>
            <FlatList
             style={{paddingTop:SIZES.padding*2}}
                data={filteredDataSource}
                
                
                keyExtractor={(item,index) => index.toString}
                renderItem={({item}) =>(
                    <View style={{height:30,width:"100%"}}><Image source={images.train} resizeMode="contain" style={{position:"absolute",width:25,height:25}} /><Text style={{...FONTS.h3,paddingLeft:SIZES.padding*4}}>{item.name.toUpperCase()}</Text>
                    <Text style={{backgroundColor:"#000000",width:"100%",height:1,marginTop:5}}></Text>
                    </View>
                )}
             
           />
           </View>
           </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
        {renderHeader()}
       
        
        
       
        
        
        </SafeAreaView>
 
    )

    }

export default address

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
