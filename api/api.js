import axios from "axios";

export async function getCity(city) {
    const apiKey = "30ab9e20cbec5b7b2303779c5db8ad2e"
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    return await axios
        .get(apiUrl)
        .then((response) => {
            
            const data = response.data
            const weather = {
                temp : data?.main?.temp,
                max : data?.main?.temp_max,
                min : data?.main?.temp_min,
                icon : data?.weather[0]?.icon,
                weather : data?.weather[0]?.main,
                name : data?.name
            }
            
            return weather
            
        })
        .catch((error) => {
            console.log(error)
        })
}