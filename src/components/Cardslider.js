import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { nonveg, veg ,colors} from '../screens/globals/style'

const Cardslider = ({title,data}) => {
    // console.log(title);
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}> 
        {title}
    </Text>
    <FlatList style={styles.cardsout}
       horizontal 
       showsHorizontalScrollIndicator={false}
       data={data}
       renderItem={({item})=>(
        <View style={styles.card}> 
           <View style={styles.s1}> 
                <Image source={{
                    uri:item.foodImageUrl
                 }} style={styles.cardimgin} resizeMode='contain'/>
           </View>
           <View style={styles.s2}> 
              <Text style={styles.txt1} numberOfLines={1} >{item.foodName}</Text>
               <View style={styles.s2in}>
               <Text style={styles.txt2}>Rs.{item.foodPrice}/-</Text>
               
              {item.foodType=='Veg'? <Text style={veg}></Text> : <Text style={nonveg}/>}
               
               </View>
           </View>
           <View style={styles.s3}>
                       <Text style={styles.buybtn}> Buy </Text>
            </View>


        </View>
       )}
    
    />
    </View>
  )
}

export default Cardslider

const styles = StyleSheet.create({
    container: { 
        marginVertical:20
    },
    cardouthead:{
       color:colors.text3,
       width:'90%',
       fontSize:25,
       fontWeight:'350',
       borderRadius:10,
       marginHorizontal:10,
    //    textAlign:'left',
    },
    cardsout:{
        width:'100%',
        // backgroundColor:'red',
    },
    card:{
        width:300,
        height:300,
        margin:15,
        borderRadius:10,
        // borderWidth:1,
        // borderColor:'#000000',
        backgroundColor:colors.col1,
        elevation:5,
    },
    
    cardimgin:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    s2: {
        flexDirection:'row',    
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txt1: {
        fontSize:18,
        color:colors.text3,
        marginHorizontal:5,
        width:150,
    },
    txt2: {
        fontSize:20,
        color:colors.text2,
        marginRight:10,
    },
    s2in: {
        flexDirection:'row',
        alignItems: 'center',
        marginHorizontal:10,
    },
    s3:{
        alignItems: 'center',
        position:'absolute',
        bottom:1,
        width:'100%',
       marginVertical:15,
    //    backgroundColor:'green'
        
    },
    buybtn:{
       backgroundColor:colors.text1,
       color:colors.col1,
       paddingHorizontal:10,
       paddingVertical:5,
       fontSize:20, 
       borderRadius:10,
       width:'80%',
       textAlign: 'center',
    }

})