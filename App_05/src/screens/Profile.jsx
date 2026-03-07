import React from "react";
import { View ,Button ,Text } from "react-native";

function Profile({navigation}) {
  return (
    <View>
      <Text> Search </Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      ></Button>
    </View>
  );
}

export default Profile;
