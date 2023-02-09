import { Pressable, StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {firebase} from './config';
import FoodItem from './FoodItem';
import { useNavigation } from '@react-navigation/native';


    
const Fetch = () => {

    const navigation = useNavigation();


    const [users, setusers]=useState([]);
    const foodsRef = firebase.firestore().collection('foods');

    useEffect(()=>{
        
        const fetchData = async () => {
            foodsRef
            .onSnapshot(
                querySnapshot=>{
                    const users =[]
                    querySnapshot.forEach((doc)=>{
                        const{name, location, img}=doc.data()
                        users.push({
                            id:doc.id,
                            name,
                            location,
                            img
                        })
                    })
                    setusers(users)
                }
    )

    };fetchData();},[])
    
    
        return (
            
            <View style={{height:'100%'}}>
            <FlatList
            style={{height:'100%'}}
            data={users}
            numColumns={1}
            renderItem={({item})=>(
            <Pressable
                style={StyleSheet.container}
            >
                <TouchableOpacity style={StyleSheet.innerContainer} onPress={() => navigation.navigate('FoodItem')}>
                    <Text style={StyleSheet.itemName}>{item.name}</Text>
                    <Text style={StyleSheet.itemLocation}>{item.location}</Text>
                    <Image source={{ uri: item.img }}  style={styles.cardImageStyle}/>

                </TouchableOpacity>
            </Pressable>
        )}
        />
            </View>
            
        )


    
    
  }


export default Fetch

const styles = StyleSheet.create({
    container:{
        color:'blue',
        padding:15
    },
    innerContainer:{
        color:'black',
        padding:30,
        flexDirection:'column',
        marginTop:10, padding:15, backgroundColor:'white'

    },
    itemName:{},
    itemLocation:{},

    cardImageStyle: {width:'100%', height:180,},


})