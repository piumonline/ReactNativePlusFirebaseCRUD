import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fetch from './Fetch';
import UploadScreen from './UploadScreen';
//import ImagePickerExample from './ImagePickerExample';

export default function App() {
  return (
    <View style={styles.container}>
      <UploadScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
