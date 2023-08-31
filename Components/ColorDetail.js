import React  from "react";
import { StyleSheet,View,Text } from "react-native";



export default function ColorDetail({route}) {
  const { color:name } =route.params;
  return (
   <View style={[styles.container,{backgroundColor:name}]}>
      <Text>Color Detail: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
