
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import{Octicons,Ionicons,Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledI,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    WelcomeContainer,
    WelcomeImage,Avatar


} from './../components/styles';
import {View} from 'react-native';

//Color
const {brand,primary} = Colors;
const Welcome = ({navigation}) => {
    const [hidePassword,setHidepassword]= useState(true);

    return(
    <>
            
<StatusBar style="light" />
            <InnerContainer>
             <WelcomeImage resizeMode="cover" source ={require('./../assets/login3.png')}/> 
              <WelcomeContainer>
                <PageTitle Welcome={true}>Welcome! Phuoc</PageTitle>
                <SubTitle Welcome={true}>Phuoc Billy</SubTitle>
                <SubTitle Welcome={true}>phuocho@gmail.com</SubTitle>

                 <StyledFormArea>
                <Avatar resizeMode="cover" source ={require('./../assets/loginimg1.png')}/>
                <Line/>
                        <StyledButton onPress={()=>navigation.navigate('HomeScreen')}>
                            <ButtonText>Next</ButtonText>
                        </StyledButton>
                </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
                 </>
              );
           };        



export default Welcome