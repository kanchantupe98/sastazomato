import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import logo from '../../assets/logo.png';
import { colors, hr80 } from '../screens/globals/style';
    
const WelcomeScreen = ({navigation}) => {
    return (
        <View style={
            styles.container}>
            <Text style={styles.title}>Welcome to Foodie </Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={hr80} />
            <Text style={styles.text}>Find the best food around you at the lowest price.</Text>
            <View style={hr80} />

            <View style={styles.btnout} >
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.btn}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.btn}>Log In</Text>
                </TouchableOpacity>
            </View>





        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4242',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 50,
        color: colors.col1,
        fontWeight: '200',
        textAlign: 'center',
        marginVertical: 10,
    },    
    logoout:{
        width: '80%',
        height: '30%',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 18,
        width: '80%',
        color: colors.col1,
        textAlign: 'center',
    },
    btnout:{
        flexDirection:'row',
    },
    btn: {
        fontSize:20,
        color: colors.text1,
        padding:15,
        textAlign:'center',
        borderRadius:10,
        fontWeight: 'bold',
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        marginHorizontal:10,
        marginVertical:20,
    },
});
export default WelcomeScreen