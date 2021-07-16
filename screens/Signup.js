import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

//icons
import{Octicons,Ionicons} from '@expo/vector-icons';
//datetimePicker
import DateTimePicker from '@react-native-community/datetimepicker';


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
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent


} from './../components/styles';
import {View,TouchableOpacity} from 'react-native';

//Color
const {brand,primary,darkLight} = Colors;
const Signup = ({navigation}) => {
    const [hidePassword,setHidepassword]= useState(true);
    const [show, setShow] = useState(false);
    const [ date, setDate] = useState(new Date(2000, 0 ,1));

    // Actual date of birth to be sent
    const [ dob, setDob] = useState();
    const onChange = (event,selectedDate) => {
        const currenDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currenDate);
    }

    const showDatePicker = () =>{
        setShow(true);
    }
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
               
                <PageTitle>Happy Station</PageTitle>
                <SubTitle>Account Login</SubTitle>
                
                {show && (
                <DateTimePicker
                 testID="dateTimePicker"
                 value={date}
                 mode='date'
                 is24Hour={true}
                 display="default"
                 onChange={onChange}
        />
      )}

                <Formik
                    initialValues={{ fullname:'',email:'',password:'',dateOfBirth:'',confirmPassword:''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >
                    {({handleChange,handleBlur,handleSubmit,values}) => 
                       (<StyledFormArea>
                       <MyTextInput
                           label="Full Name"
                           icon="person"
                           placeholder="phuocBilly"
                           placeholderTextColor={primary}                           onChangeText={handleChange('fullname')}
                           onBlur={handleBlur('fullname')}
                           value={values.fullname}
                           
                       />
                       <MyTextInput
                           label="Email Address"
                           icon="mail"
                           placeholder="phuoc@gmail.com"
                           placeholderTextColor={primary}
                           onChangeText={handleChange('email')}
                           onBlur={handleBlur('email')}
                           value={values.email}
                           keyboardType="email-address"
                       />
                       <MyTextInput
                           label="Date of Birth"
                           icon="calendar"
                           placeholder="YYYY - MM - DD "
                           placeholderTextColor={primary}
                           onChangeText={handleChange('dateOfBirth')}
                           onBlur={handleBlur('dateOfBirth')}
                           value={values.dateOfBirth}
                           isDate= {true}
                           editable={false}
                           showDatePicker = {showDatePicker}
                       />
                       

                        <MyTextInput
                           
                           label="Password"
                           icon="lock"
                           placeholder="*********"
                           placeholderTextColor={primary}
                           onChangeText={handleChange('password')}
                           onBlur={handleBlur('password')}
                           value={values.password}
                           secureTextEntry={hidePassword}
                           isPassword={true}
                           hidePassword={hidePassword}
                           setHidepassword={setHidepassword}
                        />
                        <MyTextInput
                           
                           label="Confirm Password"
                           icon="lock"
                           placeholder="*********"
                           placeholderTextColor={primary}
                           onChangeText={handleChange('confirmPassword')}
                           onBlur={handleBlur('confirmPassword')}
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
                        <Line/>
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink>
                                <TextLinkContent onPress={()=>navigation.navigate('Login')}>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>
                        )}
                </Formik>

               
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label,icon,ispassword,hidePassword,setHidepassword,isDate,showDatePicker,...props}) => {
    return(
        <View>
           <LeftIcon>
                 <Octicons name={icon} size={30} color = {brand}/> 
            </LeftIcon>    
            <StyledInputLabel>{label}</StyledInputLabel>
            {(!isDate && <StyledTextInput {...props}/>)}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
            <StyledTextInput {...props}/>
                </TouchableOpacity>}
            {ispassword && (
                <RightIcon onPress={() => setHidepassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup