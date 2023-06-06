import { useDispatch } from "react-redux";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = () => {
    const [loading , setLoading] = useState(true)
    const [city, setCity] = useState({})
    const route = useRoute()
    const dispatch = useDispatch()
    
    function handleAdd() {
        dispatch(addCity(city))
    }
    return (
    <View>
      <Text>Card</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})