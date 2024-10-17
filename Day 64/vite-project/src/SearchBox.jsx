import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [err, setErr ] = useState(false);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = "457ae2136bb21b7911b93c237f2f3746";

  let GetWeatherInfo = async () => {
    try{
      let data = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
   
    let dataJson = await data.json();

    let result = {
      city: city,
      temp: dataJson.main.temp,
      tempMin: dataJson.main.temp_min,
      tempMax: dataJson.main.temp_max,
      humidity: dataJson.main.humidity,
      feels_like: dataJson.main.feels_like,
      description: dataJson.weather[0].description,
      // wind: dataJson.wind
    };
    return result;}catch(e){
      throw err;

    }
  }; 

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
      evt.preventDefault();
    setCity("");
    let info = await GetWeatherInfo();
    updateInfo(info);
    }catch(e){
      setErr(true);

    }
  };

  return (
    <div className="SearchBox">
      <h3>Search For The Weather</h3>
      <form onSubmit={handleSubmit} >
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
        />{" "}
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {err && <p>No Such Place In Our Database</p>}
    </div>
  );
}
