import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardView = ({name, min, max, temp, weather, icon}) => {

  var URL = `https://openweathernap.org/img/wn/${icon}@2x.png`

  return (
    <View >
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          source={{ uri: URL }}
        />
        <Text
          style={{
            fontSize: 50,
            fontWeight: 200,
            alignSelf: "center",
            marginLeft: 30,
          }}
        >
          {temp}
        </Text>
      </View>

      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text
          style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text >Weather:</Text>
          <Text >{weather}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text >Min:</Text>
          <Text >{min}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text >Max:</Text>
          <Text >{max}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardView

const styles = StyleSheet.create({})