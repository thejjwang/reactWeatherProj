const displayWeather = (weather) => {
    temp.innerHTML = weather.current.temp_f + "&deg;";
    city.innerHTML = weather.location.name;
    wind.innerHTML = weather.current.wind_mph + " MPH";
    precipitation.innerHTML = weather.current.precip_mm + " MM";
}

export default displayWeather;