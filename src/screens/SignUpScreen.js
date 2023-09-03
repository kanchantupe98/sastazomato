import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { colors, titles, hr80, btn1 } from '../screens/globals/style';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SignUpScreen = ({navigation}) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmpasswordFocus, setConfirmpasswordFocus] = useState(false);

    return ( 
        <View style={styles.container}>
            <Text style={styles.head1}>Sign Up </Text>
{/* Name  */}
            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={nameFocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Full Name'
                    onFocus={() => {
                        setNameFocus(true)
                        setEmailFocus(false)
                        setPasswordFocus(false)
                        setShowPassword(false)
                        setConfirmpasswordFocus(false)
                    }} />
            </View>
{/* Email  */} 
            <View style={styles.inputout}>
                {/* <AntDesign name="user" size={24} color={emailFocus == true ? colors.text1 : colors.text2} /> */}
                <Entypo name="email" size={24} color={emailFocus == true ? colors.text1 : colors.text2}/>
                <TextInput style={styles.input} placeholder='Email'
                    onFocus={() => {
                      setNameFocus(false)
                        setEmailFocus(true)
                        setPasswordFocus(false)
                        setShowPassword(false)
                        setConfirmpasswordFocus(false)
                    }} />
            </View>


{/* confirm password */}
            <View style={styles.inputout}>
                <Feather name="lock" size={24} color={confirmpasswordFocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Password'
                    onFocus={() => {
                        setNameFocus(false)
                        setEmailFocus(false)
                        setConfirmpasswordFocus(true)
                        setPasswordFocus(false)

                    }}
                    secureTextEntry={showConfirmPassword === false ? true : false}
                />
                <Feather name={showConfirmPassword == true ? "eye-off" : "eye"} size={24} color="black"
                    onPress={() => {
                        setShowConfirmPassword(!showConfirmPassword)
                    }}

                />
            </View>
{/*  password */}
            <View style={styles.inputout}>
                <Feather name="lock" size={24} color={passwordFocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder=' Confirm Password'
                    onFocus={() => {
                         setNameFocus(false)
                        setEmailFocus(false)
                        setPasswordFocus(true)
                        setConfirmpasswordFocus(false)
                    }}
                    secureTextEntry={showPassword === false ? true : false}
                />
                <Feather name={showPassword == true ? "eye-off" : "eye"} size={24} color="black"
                    onPress={() => {
                        setShowPassword(!showPassword)
                    }}

                />
            </View>
{/* Address  */}
            <Text style={styles.address}>Please enter your Address </Text>
               <View style={styles.inputout}>
               <TextInput style={styles.input} placeholder='Enter your Address'/>
                </View>
            
  {/* Button */}
            <TouchableOpacity style={btn1}>
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold' }}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.forgot}>Forgot password? </Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.gftxt}>Sign In With</Text>

            < View style={styles.gf}>
                <TouchableOpacity >
                    <View style={styles.gficon}>
                        <AntDesign name="google" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.gficon}>
                        <FontAwesome name="facebook-square" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={hr80} />
            <Text> Already have an account?
                <Text style={styles.signup} onPress={()=>navigation.navigate('Login')}> Sign In </Text>
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    head1: {
        fontSize: titles.title1,
        fontWeight: 'bold',
        color: colors.text1,
        textAlign: 'center',
        marginTop: 40,
    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
    },
    input: {
        width: '80%',
        fontSize: 18,
        marginLeft: 10,
    },
    forgot: {
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 6,
    },
    or: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text1,
        textAlign: 'center',
        marginTop:3,
        marginBottom: 5,
    },
    gftxt: {
        fontSize: 25,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 2,
        marginBottom: 10,
    },
    gf: {
        flexDirection: 'row',

    },
    gficon: {
        width: 50,
        marginHorizontal: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        elevation: 20 ,
        padding: 10,
        alignItems: 'center',
    },
    address:{ 
        fontSize: 18,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,

    },


})
export default SignUpScreen