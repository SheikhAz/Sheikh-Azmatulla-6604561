import React from "react";
import { View, Button, Text } from "react-native";

function Contactus({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default Contactus;
