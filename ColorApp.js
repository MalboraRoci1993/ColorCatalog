import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorButton from "./Components/ColorButton";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="green" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="cyan" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="orange" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="white" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="black" onPress={setBackgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});
