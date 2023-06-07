import { useDispatch } from "react-redux";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import citySlice from "../utils/redux/citySlice";
import { useRoute } from "@react-navigation/native";
import { addCity } from "../utils/redux/citySlice";

const Card = () => {
    const navigation = useNavigation()
    const [city, setCity] = useState({})
    const route = useRoute()
    const dispatch = useDispatch()


    function handleAdd() {
        dispatch(addCity(city))
        navigation.navigate('home')
    }

    function goBack(){
        navigation.goBack()
    }

    useEffect(() => {
        function loadCard() {
          const parent = route?.params.city;
          setCity(parent);
          console.log("City", parent);
        }

        loadCard()
    
        return () => {
          setCity({});
        };
      },[route.params]);
   

    var URL = `https://openweathernap.org/img/wn/${city?.icon}@2x.png`

    return (
        <>
      {!city?.icon ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="steelblue" />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.cardContainer}>
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
                {city?.temp}
              </Text>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10 }}>
              <Text
                style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}
              >
                {city?.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Weather:</Text>
                <Text style={styles.data}>{city?.weather}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Min:</Text>
                <Text style={styles.data}>{city?.min}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Max:</Text>
                <Text style={styles.data}>{city?.max}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "steelblue",
              width: 150,
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
            onPress={handleAdd}
          >
            <Text style={{ color: "white" }}>Add To Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default Card

const styles = StyleSheet.create({})