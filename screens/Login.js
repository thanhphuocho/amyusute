import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import{Octicons,Ionicons} from '@expo/vector-icons';


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
    MsgBox


} from './../components/styles';
import {View} from 'react-native';

//Color
const {brand} = Colors;
const Login = () => {
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
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Sign in with Google</ButtonText>
                        </StyledButton>
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