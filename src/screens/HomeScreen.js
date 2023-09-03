import { View, Text ,StatusBar,StyleSheet,TextInput, ScrollView, FlatList} from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors } from './globals/style'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { Ionicons } from '@expo/vector-icons';
import {data, db, firebase} from '../../Firebase/FirebaseConfig';
import { collection } from 'firebase/firestore'
import Cardslider from '../components/Cardslider'
import { Feather } from '@expo/vector-icons';


const HomeScreen = () => {
  const [foodData,setFoodData] =useState([]);
  const[VegData,setVegData] =useState([]);
  const[NonVegData,setNonVegData] =useState([]);
  const[search,setSearch] =useState('');
  console.log(search);

  useEffect(()=>{
    if(data) {
    setFoodData(data);
    }
  },[data])

  useEffect(()=>{
    setVegData(foodData.filter(item =>item.foodType =='Veg'));
    setNonVegData(foodData.filter(item =>item.foodType =='non-veg'));

  },[foodData])

  //  console.log(VegData);
  
  
   return (
    <ScrollView style={styles.container}>
        <StatusBar/>
      <HomeHeadNav/>
      <View style={styles.searchbox}>
           <Ionicons name="search" size={24} color="black" style={styles.searchicon} />
          <TextInput style={styles.input} placeholder='search' 
          onChangeText={(text)=>{setSearch(text)}}
          />
      </View>
      
      {search!=''&& 
        <View style={styles.searchresultOuter}>
          <FlatList style={styles.searchresultsinner}
          data={foodData}
          renderItem={({item})=>{
               if(item.foodName.toLowerCase().includes(search.toLocaleLowerCase())){
               return (
               <View style={styles.searchresult}>
                    <Feather name="arrow-right" size={24} color="black" />
                    <Text style={styles.searchresulttext}>
                      {item.foodName}
                    </Text>
               </View>
         )}} }
      />
        </View> }
      
      <Categories/>
      <OfferSlider/>
      <Cardslider title={"Todays Special"} data={foodData}/>
      <Cardslider title={"NonVeg Love"} data={NonVegData}/>
      <Cardslider title={"Veg Hunger"} data={VegData}/>
      {/* <Text>HomeScreen</Text> */}
    </ScrollView>
  )
}

export default HomeScreen 
const styles = StyleSheet.create({
container:{
  flex:1,
  width:'100%',
  // justifyContent:'space-between',
  // alignItems:'center',
  // paddingHorizontal:10,
  // paddingVertical:10,
  backgroundColor:colors.col1,
},
searchbox:{
    flexDirection:'row',
    alignItems:'center',
    width:'90%',
    backgroundColor:colors.col1,
    borderRadius:30,
    margin:20,
    padding:10,
    elevation:20,
},
input:{
  width:'90%',
  fontSize:18,
  marginLeft:10,
  color:colors.text1,
},
searchicon:{
  color:colors.text1,
},
searchresultOuter:{
  width:'100%',
  marginHorizontal:30,
  backgroundColor:colors.col1,
},
searchresultsinner:{
  width:'100%',
},
searchresult:{
  width:'100%',
  flexDirection:'row',
  alignItems: 'center',
  padding:5
},
searchresulttext:{
  marginLeft:10,
  fontSize:18,
  color:colors.text1,
}
       
})
