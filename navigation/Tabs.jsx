import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../src/screens/Home'
import Search from '../src/screens/Search'

const Tabs = () => {

const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
        <Tab.Screen name="homeScreen" component={Home} options={{headerShown : false}}/>
        <Tab.Screen name="search" component={Search} options={{headerShown : false}}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})