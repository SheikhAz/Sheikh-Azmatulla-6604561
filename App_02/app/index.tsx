import { Stack } from "expo-router";
import {
  Text,
  View,
  Image,
  StyleSheet,
  PanResponder,
  Animated,
  TouchableOpacity
} from "react-native";
import Card from "./card";
import { useState, useRef } from "react";

export default function Index() {
  const item = [
    {
      Link: require("../assets/images/Shoes/nike1-removebg-preview.png"),
      productName: "Nike Air V9",
      productPrice: "$3999",
    },
    {
      Link: require("../assets/images/Shoes/nike2-removebg-preview.png"),
      productName: "Nike Air V199",
      productPrice: "$4999",
    },
    {
      Link: require("../assets/images/Shoes/nike3-removebg-preview.png"),
      productName: "Nike Air V999",
      productPrice: "$6999",
    },
    {
      Link: require("../assets/images/Shoes/nike4-removebg-preview.png"),
      productName: "Nike Air VV9",
      productPrice: "$9999",
    },
  ];
  const [currentState, setCurrentState] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20,
      onPanResponderMove: (_, gesture) => {
        translateX.setValue(gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -120) {
          Animated.timing(translateX, {
            toValue: -400,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setCurrentState((prev) => (prev + 1) % item.length);
            translateX.setValue(400);
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          });
        } else if (gesture.dx > 120) {
          Animated.timing(translateX, {
            toValue: 400,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setCurrentState((prev) => (prev - 1 + item.length) % item.length);
            translateX.setValue(-400);
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;
  return (
    <>
      <Stack.Screen
        options={{
          title: "Nike Shop",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      />
      <View
        style={{
          backgroundColor: "black",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/images/nike Branding.webp")}
          style={{ height: 260, width: "100%" }}
        ></Image>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={[styles.Title, { padding: 20 }]}>Collection</Text>
          <View
            style={{
              backgroundColor: "#fff",
              height: 125,
              width: 340,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Animated.View
              style={{ transform: [{ translateX }] }}
              {...panResponder.panHandlers}
            >
              <Card
                Link={item[currentState].Link}
                productName={item[currentState].productName}
                productPrice={item[currentState].productPrice}
              ></Card>
            </Animated.View>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 23,
    color: "#3c3a3a",
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 2,
  },
  buyButton: {
    backgroundColor: "#ff3b30",
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    marginTop:50
  },
  buyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
