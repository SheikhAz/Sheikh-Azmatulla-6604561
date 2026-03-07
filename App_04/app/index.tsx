import { Text, View, Image,Pressable ,StyleSheet, Switch } from "react-native";
import { useEffect,useState } from "react";
import { Stack } from "expo-router";
export default function Index() {
  const [useDark , setUseDark] = useState(false)
  return (
    <>
      <Stack.Screen
        options={{
          title: "Dark Mode",
          headerStyle: {
            backgroundColor: useDark ? "#fff" : "#000",
          },
          headerTintColor: useDark ? "#000" : "#fff", // text color
        }}
      />

      <View
        style={[
          useDark ? styles.BoxDark : styles.BoxLight,
          { height: "100%", width: "100%" },
        ]}
      >
        <Text style={useDark ? styles.Textlight : styles.TextDark }>
          Light Mode Or Dark Mode
        </Text>
        <Switch value={useDark} onValueChange={setUseDark}></Switch>
        <View>
          <Text style={useDark ? styles.Textlight : styles.TextDark}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            exercitationem tenetur fuga amet, laudantium tempore eveniet alias
            dolorum. Dolore laboriosam saepe quasi numquam asperiores
            consequatur at quae velit dicta. Quaerat!
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  BoxLight:{
    backgroundColor:'black'
  },
  BoxDark:{
    backgroundColor:'white'
  },
  Textlight:{
    color:'black'
  },
  TextDark:{
    color:'white'
  }
})
