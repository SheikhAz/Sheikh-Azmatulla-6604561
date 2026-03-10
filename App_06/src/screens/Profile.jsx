import React from "react";
import { View, Button, Text } from "react-native";

function Profile({ navigation, route }) {
  const {id,name,email} = route.params
  return (
    <View>
      <Text> Profile </Text>
      <Button
        title="Go to Contact Us"
        onPress={() => navigation.navigate("Contactus")}
      ></Button>
      <View>{id}</View>
      <View>{name}</View>
      <View>{email}</View>
    </View>
  );
}

export default Profile;
