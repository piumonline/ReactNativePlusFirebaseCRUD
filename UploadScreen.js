import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Alert, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import {firebase} from './config';
import { useState} from 'react'


const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [foodName, setfoodName]=useState('');
    const [FoodCategory, setFoodCategory]=useState('');
    const [Location, setLocation]=useState('');

    const storagePath = firebase.firestore().collection('foods');

    //add text field
    const addTextField=async()=>{
      if (foodName && foodName.length>0){
        
        const imgUrl = await uploadImage();
        console.log(imgUrl);
        //addTextField();
        const data = {
          name: foodName,
          category: FoodCategory,
          location: Location,
          img: imgUrl
        };
        storagePath
        .add(data)
        .then(()=>{
          setfoodName('');
          setFoodCategory('');
          setLocation('');
          Keyboard.dismiss();
          console.log('good to goo')
        })
        .catch((error)=>{
          alert(error);
        })
      }

    }





//select image from galary
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })

        if (!result.canceled) {
          setImage(result.assets[0].uri);

          //this is the url for image
        //const soure = result.assets[0].uri;
        //console.log(soure);

        }
        
      };



    // const uploadImage = async()=>{
    //     if (image) {
    //       const uploadUri = image;
    //       let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1);
    //       const response = await fetch(uploadUri);
    //       const blob = await response.blob();
          
    //       setUploading(true);
    //       setTransferred(0);
      
    //       try{
    //           await firebase.storage().ref().child(filename).put(blob);
    //           setUploading(false);
    //           Alert.alert('photo saved');
      
    //       }catch(e){
    //           console.log(e);
    //       }
    //       setImage(null);
    //     } else {
    //       console.error("The image or image.uri is not defined.");
    //     }
    //   }

    //upload selected image to the firebase storage
    const uploadImage = async () => {
        if( image == null ) {
          return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1);
    
        // Add timestamp to File Name
        const extension = filename.split('.').pop(); 
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
    
        setUploading(true);
        setTransferred(0);
    
        
        const response = await fetch(uploadUri);
        const blob = await response.blob();

        const storageRef = firebase.storage().ref().child(filename);
        const task = storageRef.put(blob);
    
        // Set transferred state
        task.on('state_changed', (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
    
          setTransferred(
            Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
              100,
          );
        });
    
        try {
          await task;
    
          const url = await storageRef.getDownloadURL();
    
          setUploading(false);
          setImage(null);
    
          Alert.alert(
            'Image uploaded!',
            'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
          );
          return url;
    
        } catch (e) {
          console.log(e);
          return null;
        }
    
      };

      // const submitPost =()={
      //   uploadImage();
      //   addTextField();
      // }

      // const submitPost =async() => {
      //   const imgUrl = await uploadImage();
      //   console.log(imgUrl);
      //   addTextField();
      // }
    

  return (
    <SafeAreaView>
          <View >
          <TextInput placeholder='FoodName' value={foodName} style={styles.inputStyle}   autoCapitalize="none" onChangeText={(FoodName)=>setfoodName(FoodName)}></TextInput>
        <TextInput placeholder='FoodCategory ' value={FoodCategory} style={styles.inputStyle} onChangeText={(FoodCategory)=>setFoodCategory(FoodCategory)} autoCapitalize="none"></TextInput>
        <TextInput placeholder='Location' value={Location} style={styles.inputStyle}  autoCapitalize="none" onChangeText={(Location)=>setLocation(Location)}></TextInput>
    
    </View>
      <TouchableOpacity onPress={pickImage}>
        <Text>pick</Text>
      </TouchableOpacity>
      <View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>}
        
        <Button title='post' onPress={addTextField}/>
 
      </View>
    </SafeAreaView>
  )
}

export default UploadScreen

const styles = StyleSheet.create({})