import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./infoBox.jsx";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "N/A",
    temp: "N/A",
    tempMin: "N/A",
    tempMax: "N/A",
    humidity: "N/A",
    feels_like: "N/A",
    description: "N/A",
    // wind: "N/A",
  });


let updateInfo = (result) =>{
    setWeatherInfo(result);
}
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
