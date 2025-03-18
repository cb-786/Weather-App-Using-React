import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0e7dd04516294ff64e1b063b1020539b";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      
      console.log(result);
      return result;
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(true);
      return null;
    }
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let weatherInfo = await getWeatherInfo();
    if (weatherInfo) {
      setError(false);
      updateInfo(weatherInfo);
    }
  }

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={handleChange}
        />
        <br/><br/>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      
      {error && <p style={{color: "red"}}>No such place exists!</p>}
    </div>
  );
}
