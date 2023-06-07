import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import Details from '../src/screens/Details'
import Card from '../src/components/Card'

const myStack = createStackNavigator()

const Stack = () => {
  return (
    <myStack.Navigator>
        <myStack.Screen name="tabs" component={Tabs} options={{headerShown : false}}/>
        <myStack.Screen name="card" component={Card} options={{headerShown : false}}/>
    </myStack.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})