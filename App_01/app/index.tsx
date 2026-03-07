import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={{
      backgroundColor:'#040404',
      height:"100%",
      width:"100%",
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center'
      }}>
        <View style={{
          height:90,
          width:90,
          backgroundColor:"#494848",
          borderRadius:90,
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Image 
          source={require('../assets/images/user-setting.png')}
          style={{height:70,width:70}}>
          </Image>
        </View>
        <Text style={[styles.Title ,{paddingTop:20}]}>Sheikh Azmatulla</Text>
        <Text style={[styles.Title ,{color:'grey',fontSize:15}]}>6th Semester</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Title:{
    fontSize:18,
    fontWeight:600,
    color:'white'
  }
});
