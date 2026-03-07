import { Text, View, Button } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [counterState, setCounterState] = useState(0);
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "white",
          }}
        >
          Counter
        </Text>
        <View style={{flexDirection:'row',justifyContent:'center',gap:60,marginTop:25}}>
          <Button
            title="increament"
            onPress={() => setCounterState((prev) => prev + 1)}
          ></Button>
          <Button
            title="decreament"
            onPress={() => setCounterState((prev) => prev - 1)}
          ></Button>
        </View>

        <Text style={{ color: "white",textAlign:'center',marginTop:25,fontSize:20 }}>{counterState}</Text>
      </View>
    </View>
  );
}
