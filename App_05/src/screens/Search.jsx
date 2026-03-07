import React from 'react'
import { View,Text,Button } from 'react-native'

function Search({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title = "Go to Home" onPress={() => navigation.navigate('Home') }></Button>
    </View>
  )
}

export default Search
