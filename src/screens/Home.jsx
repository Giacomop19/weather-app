import { StatusBar, StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import CardView from '../components/CardView'
import { useEffect } from 'react'
import { cityPop } from '../utils/redux/citySlice'



const Home = () => {
  const cities = useSelector((state) => state.city)
  useEffect(() => {
    console.log(cities)
  })

  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(cityPop())
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor={"steelblue"}/>
      <Header/>
      <ScrollView>
        <View>
          { cities &&
              cities?.map((city) => {
                return (
                  <CardView
                   name={city.name}
                   min={city.min}
                   max={city.max}
                   weather={city.weather}
                   icon={city.icon}
                   temp={city.temp}
                   key={`${city.name}${city.weather}`}
                   />
                )
              })}
              { cities?.length == 0 && (
                <View>
                  <Text>You don't have cities added to your Home page!</Text>
                </View>
              )}
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})