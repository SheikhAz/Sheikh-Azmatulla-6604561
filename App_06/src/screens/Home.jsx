import React from "react";
import { View, Button, Text } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile",{
            id :'azzy',
            name : 'Azzy',
            email:'sheikhazmatulla@gmail.com'
        })}
      />
    </View>
  );
}

export default Home;
