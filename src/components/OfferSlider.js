import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../screens/globals/style'


const carouseldata = [
  {
    id: 1,
    image: '../../assets/foodie/img1.png',

  },
  {
    id: 2,
    image: '../../assets/foodie/img2.png',

  },
  // {
  //   id: 3,
  //   image: '../../assets/foodie/img3.png',

  // },
]
const OfferSlider = () => {
  return (
    
      <View style={styles.offerslider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
        dotColor={colors.text2} activeDotColor={colors.text1}>
          <View style={styles.slide}>
            <Image source={require('../../assets/foodie/img1.png')} style={styles.image} resizeMode='contain' />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/foodie/img2.png')} style={styles.image} resizeMode='contain'/>
          </View>
          
        </Swiper>
      </View>
    
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerslider:{
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  slide:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.col1,
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius:20,
  }

})