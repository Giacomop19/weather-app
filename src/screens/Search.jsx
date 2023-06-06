import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { getCity } from '../../api/api'
import { useNavigation } from '@react-navigation/native'


const Search = () => {
  const navigation = useNavigation()
  const [city, setCity] = useState('')

  async function handleSearch(){
    const data = await getCity(city)
    return navigation.navigate('details', {city : data})
  }

  return (
    <View style={{flex : 1 , justifyContent: "center", alignItems: "center"}}>
      <Text style={{marginLeft: -200}}>Search for a city</Text>
      <TextInput
        placeholder='search'
        onChangeText={(text) => setCity(text)}
        style={styles.textInput}>
      </TextInput>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  textInput : {
    justifyContent : "center",
    height : 60,
    borderWidth : 1,
    width : "80%",
    borderRadius : 20,
    marginBottom : 20,
    paddingHorizontal : 10
  },
  button : {
    height : 40,
    width : 200 ,
    backgroundColor : "steelblue",
    justifyContent : "center",
    alignItems : "center", 
    borderRadius : 10,
  }, 
  buttonText : {
    color : "white", 
    fontSize : 16,
    fontWeight : "bold"
  }
})