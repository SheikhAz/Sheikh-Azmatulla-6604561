import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

function Card(props){
  return(
    <View>
      <Image style={[styles.Images ,{}]} source={props.Link}></Image>
      <Text style={[styles.Title,{}]}>{props.productName}</Text>
      <Text style={[styles.Title,{color:'red'}]}>{props.productPrice}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  Images:{
    height:200,
    width:300,
    marginTop:10,
    resizeMode:'contain'
  },
  Title:{
    fontSize:18,
    color:'white',
    textAlign:'center',
    fontWeight:700,
  }
})
