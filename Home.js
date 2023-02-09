import { StyleSheet, Text, Vie,   } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Fetch from './Fetch';
import UploadScreen from './UploadScreen';


const Home = () => {
    const navigation = useNavigation();

  return (
    <Fetch/>
    
  )
}

export default Home

const styles = StyleSheet.create({})