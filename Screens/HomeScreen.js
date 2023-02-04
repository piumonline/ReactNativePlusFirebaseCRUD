import { StyleSheet, Text, ScrollView,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import FoodItem from "./FoodItem";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <ScrollView>
      <Text style={{textAlign:'center', padding:20}}>Hello!</Text>
      <FoodItem/>
      <FoodItem/>

      <Button title="Press" onPress={() => navigation.navigate('FoodListing')}/>
        
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})