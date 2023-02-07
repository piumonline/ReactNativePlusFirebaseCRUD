// import { Pressable, StyleSheet, Text, View,FlatList } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import {firebase} from './config';


// const Fetch = () => {

//     const [users, setusers]=useState([]);
//     const foodsRef = firebase.firestore().collection('foods');

//     useEffect(async()=>{
//     foodsRef
//     .onSnapshot(
//         querySnapshot=>{
//             const users =[]
//             querySnapshot.forEach((doc)=>{
//                 const{name, location}=doc.data()
//                 users.push({
//                     id:doc.id,
//                     name,
//                     location,
//                 })
//             })
//             setusers(users)
//         }
//     )
//     },[])


//   return (
//     <View style={{flex:1, marginTop:100}}>
//       <FlatList
//       style={{height:'100%'}}
//       data={users}
//       numColumns={1}
//       renderItem={({item})=>(
//     <Pressable
//         style={StyleSheet.container}
//     >
//         <View style={StyleSheet.innerContainer}>
//             <Text style={StyleSheet.itemName}>{item.name}</Text>
//             <Text style={StyleSheet.itemLocation}>{item.location}</Text>

//         </View>
//     </Pressable>
//   )}
//   />
//     </View>
//   )
// }

// export default Fetch

// const styles = StyleSheet.create({
//     container:{
//         color:'blue',
//         padding:15
//     },
//     innerContainer:{
//         color:'black',
//         padding:15,
//         flexDirection:'column',
//     },
//     itemName:{},
//     itemLocation:{},

// })