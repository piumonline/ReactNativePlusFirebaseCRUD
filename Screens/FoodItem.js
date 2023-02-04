import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FoodItem = () => {
  return (
    <TouchableOpacity>
        <View style={{marginTop:10, padding:15, backgroundColor:'white'}}>
            <FoodImg/>
            <FoodInfo/>
        </View>
    </TouchableOpacity>

  )
}

const FoodImg=()=>{
    return(    
        <View>
        <Image source={require('../sources/food.jpg')}  style={styles.cardImageStyle} />
        
        </View>
    
    )
}

const FoodInfo=()=>{
    return(
        <View>
        <Text style={styles.foodName}>bla bla bla bla bllaa</Text>
        <Text >bla bla bla</Text>

        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    cardImageStyle: {width:'100%', height:180,},
    foodName:{fontSize:15, fontWeight:'bold'}
})