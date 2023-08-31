import React from "react";
import ColorList from "./Components/ColorList";
import ColorDetail from "./Components/ColorDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator,Screen}=createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" 
                options={{title:"Color List"}} 
                component={ColorList} />
        <Screen name="Details" component={ColorDetail} />

      </Navigator>
    </NavigationContainer>
  )
}