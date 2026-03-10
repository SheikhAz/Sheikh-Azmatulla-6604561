import React from "react";
import { View, Button, Text } from "react-native";

function Reel({ navigation }) {
  return (
    <View>
      <Text>Reel</Text>
      <Button
        title="Go to Reel"
        onPress={() => navigation.navigate("Reel")}
      />
    </View>
  );
}

export default Reel;
