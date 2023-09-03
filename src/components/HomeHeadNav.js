import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../screens/globals/style'; 
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
           <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon}/>
      
           <View style={styles.containerin}>
           <Text style={styles.mytext}>Foodie</Text>
           <MaterialIcons name="food-bank" size={24} color="black" style={styles.myicon} />
           </View>
           <FontAwesome name="user-o" size={24} color="black" style={styles.myicon} />
  </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:colors.col1,
        width: '100%',
        padding:10,
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

  },
  containerin:{
    flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
  },
  myicon:{
    color:colors.text1,
    // marginRight:10,
  },
  mytext:{
     fontSize:24,
    color:colors.text1,
  },
})