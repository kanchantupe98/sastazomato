import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native'
import { colors } from '../screens/globals/style';
import { MaterialIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
  <View style={styles.container}> 
      <Text style={styles.head}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>   

            <View style = {styles.box}>
                <MaterialCommunityIcons name="food-turkey" size={24} color="black" style={styles.icon} />
                <Text style={styles.text}>Starters</Text>
             </View>
             <View style = {styles.box}>
             <MaterialIcons name="free-breakfast" size={24} color="black" style={styles.icon}/>
                <Text style={styles.text}>Breakfast</Text>
             </View>
             <View style = {styles.box}>
             <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.icon}/>
                <Text style={styles.text}>Dinner</Text>
             </View>
             <View style = {styles.box}>
                <Feather name="coffee" size={24} color="black"  style={styles.icon}/>
                <Text style={styles.text}>Coffee</Text>
             </View>
             <View style = {styles.box}>
             <Entypo name="drink" size={24} color="black" style={styles.icon}/>
                <Text style={styles.text}>Liqour</Text>
             </View>
             


          </ScrollView>
  </View>
 
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{ 
    backgroundColor: 'white',
   //  alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation:10,
    borderRadius: 10,
  
  },
 head:{
    fontSize: 25,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
    margin:10,
    paddingBottom:5,
    borderBottomColor:colors.text1,
    borderBottomWidth: 1,
     
 },
 box:{
  backgroundColor:colors.col1,
  elevation:10,
  margin:10,
  padding:10,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
 },
 icon:{
  marginRight:10,
  color:colors.text3,
 },
 text:{
  color:colors.text3,
 }
})