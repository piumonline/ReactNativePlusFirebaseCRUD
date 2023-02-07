import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import {firebase} from './config';
import { useState} from 'react'



const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    // const pickImage = async()=>{
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes:ImagePicker.MediaTypeOptions.All,
    //         allowsEditing:true,
    //         aspect:[4,3],
    //         Quality:1,
    //     });
    //     console.log(result);

    //     if (!result.canceled) {
    //   setImage(result.assets[0].uri);

    //     const soure = {uri:result.uri};
    //     console.log(soure);
    //     setImage(soure);
    // };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
      
    const uploadImage = async()=>{
        setUploading(true);
        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
        var ref = firebase.storage().ref().child(filename).put(blob);

        try{
            await ref;
        }catch(e){
            console.log(e);
        }
        setUploading(false);
        Alert.alert(
            'photo saved'
        );
        setImage(null);
    }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={pickImage}>
        <Text>pick</Text>
      </TouchableOpacity>
      <View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>}
        <TouchableOpacity onPress={uploadImage} >
            <Text>Upload Image</Text>  
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UploadScreen

const styles = StyleSheet.create({})