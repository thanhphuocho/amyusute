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
    TextLinkContent


} from './../components/styles';
import {View} from 'react-native';

//Color
const {brand,primary,blue} = Colors;
const Login = ({navigation}) => {
    const [hidePassword,setHidepassword]= useState(true)
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source ={require('./../assets/loginimg1.png')}/>
                <PageTitle>Happy Station</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >
                    {({handleChange,handleBlur,handleSubmit,values}) => 
                       (<StyledFormArea>
                       <MyTextInput
                           label="Email Address"
                           icon="mail"
                           placeholder="phuoc@gmail.com"
                           placeholderTextColor=""
                           onChangeText={handleChange('email')}
                           onBlur={handleBlur('email')}
                           value={values.email}
                           keyboardType="email-addresss"
                       />

                        <MyTextInput
                           
                           label="Password"
                           icon="lock"
                           placeholder="*********"
                           placeholderTextColor=""
                           onChangeText={handleChange('password')}
                           onBlur={handleBlur('password')}
                           value={values.password}
                           secureTextEntry={hidePassword}
                           isPassword={true}
                           hidePassword={hidePassword}
                           setHidepassword={setHidepassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={()=>navigation.navigate('Welcome')}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line/>
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25}/>
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        <StyledButton facebook={true} onPress={handleSubmit}>
                            <Fontisto name="facebook" color={primary} size={25}/>
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an Account already?</ExtraText>
                            <TextLink>
                                <TextLinkContent onPress={()=>navigation.navigate('Signup')} >Sign Up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>
                        )}
                </Formik>

               
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label,icon,ispassword,hidePassword,setHidepassword,...props}) => {
    return(
        <View>
           <LeftIcon>
                 <Octicons name={icon} size={30} color = {brand}/> 
            </LeftIcon>    
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {ispassword && (
                <RightIcon onPress={() => setHidepassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Login