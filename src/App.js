import CurrentWeather from "./Components/CurrentWeather";
import Weathers from "./Context/Weathers";
import "./App.css";
import { useState } from "react";



const api = {
  url: "https://api.openweathermap.org/data/2.5/",
  key: "63dc64c185832e3fedfad32ff90ae430"

}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeathers] = useState({
    "ide": "get your location for details",

  });



  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.url}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeathers(result);
          setCity(" ");
          console.log(result);
        });
    }
  }


  //dates
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} / ${date} / ${month} ${year}`
  }

  //end of the dates


  return (
    <div className="main-div">
      <br/>
      <br/>
      <div className="date">{dateBuilder(new Date())}</div>
      <br />
      <br/>
       <br/>
      <CurrentWeather city={city} setCity={setCity} search={search} weather={weather} setWeathers = {setWeathers} />
       
      <Weathers weather={weather}/>

    </div>

  );
}

export default App;

