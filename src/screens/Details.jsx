import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const Details = () => {
const route = useRoute()

//route.params = {}
// console.log("these are my params", route?.params)


  return (
    <View>
      <Text>City</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})