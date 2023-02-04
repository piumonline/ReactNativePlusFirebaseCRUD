import { StyleSheet, Text, TextInput, Button, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";



const FoodListing = () => {
    const navigation = useNavigation();
    const [foodName, setfoodName]=useState('');
    const [FoodCategory, setFoodCategory]=useState('');
    const [Location, setLocation]=useState('');

  return (
    <View style={styles.ViewMargin}>
        <TextInput placeholder='FoodName' style={styles.inputStyle}  onChangeText={(foodName)=>setfoodName(foodName)} autoCapitalize="none"></TextInput>
        <TextInput placeholder='FoodCategory ' style={styles.inputStyle} onChangeText={(FoodCategory)=>setFoodCategory(FoodCategory)} autoCapitalize="none"></TextInput>
        <TextInput placeholder='Location' style={styles.inputStyle} onChangeText={(Location)=>setLocation(Location)} autoCapitalize="none"></TextInput>
    <Button title='post'/>
    </View>
  )
}

export default FoodListing

const styles = StyleSheet.create({    
inputStyle:{
    width:300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#000000',
    borderRadius:20,
    textAlign:"center",
},
ViewMargin:{
    marginTop:20
}

})