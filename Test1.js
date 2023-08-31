import React from "react"
import { ProgressViewIOSComponent } from "react-native";
import {
  Text, 
  View, 
  ActivityIndicator, 
  Button, 
  Alert, 
  Dimensions,
  Platform} 
  from 'react-native';

const {height,width}=Dimensions.get('window')
export default function App() {
  const onButtonPress=()=>{
    Alert.alert('clicked')
  }
  return (
    <View>
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress}/>
      <Text>OS :{Platform.OS}</Text>
      <Text>Height :{height}</Text>
      <Text>Width :{width}</Text>
    </View>
  );
}


