import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { colors, titles, hr80, btn1 } from '../screens/globals/style';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Log in </Text>
            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={emailFocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Email'
                    onFocus={() => {
                        setEmailFocus(true)
                        setPasswordFocus(false)
                        setShowPassword(false)
                    }} />
            </View>
            <View style={styles.inputout}>
                <Feather name="lock" size={24} color={passwordFocus == true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Password'
                    onFocus={() => {
                        setEmailFocus(false)
                        setPasswordFocus(true)
                    }}
                    secureTextEntry={showPassword === false ? true : false}
                />
                <Feather name={showPassword == true ? "eye-off" : "eye"} size={24} color="black"
                    onPress={() => {
                        setShowPassword(!showPassword)
                    }}

                />
            </View>

            <TouchableOpacity style={btn1} onPress={()=>navigation.navigate('Home')}>
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold' }}>Sign In</Text>
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
            <Text> Don't have an account?
                <Text style={styles.signup} onPress={()=>navigation.navigate('Signup')}> Sign Up </Text>
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    head1: {
        fontSize: titles.title1,
        fontWeight: 'bold',
        color: colors.text1,
        textAlign: 'center',
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
        marginTop: 20,
        marginBottom: 10,
    },
    or: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text1,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    gftxt: {
        fontSize: 25,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    gf: {
        flexDirection: 'row',

    },
    gficon: {
        width: 50,
        margin: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        elevation: 20 ,
        padding: 10,
        alignItems: 'center',
    },


})
export default LoginScreen