
function Weathers({weather}) {
 const iconurl =  "http://openweathermap.org/img/wn/" + `${(typeof weather.main != "undefined") ? weather.weather[0].icon : null}` + ".png";
    return (
        <div className ="all-weathers">
            {(typeof weather.main != "undefined") ? (    
         <main >
             
            <div className = "weather-box">
                <main className = "shadow">
            <div className = "desc">{weather.weather[0].main}</div>
            <div className = "temp">
                {Math.round(weather.main.temp)}°c
                </div>  
            <img className = "img" src = {iconurl} /> 
            <div className = "location">{weather.name}</div>     
            </main>
            </div>    
            <div className = "others">  
                <p>Min. Temp: <span className = "degree">{Math.floor(weather.main.temp_min)}</span></p>
                <p>Max Temp: <span className = "degree">{Math.floor(weather.main.temp_max)}</span></p>
                <p>Wind Speed: <span className = "degree">{Math.floor(weather.wind.speed)}</span></p> 
                </div>
        </main>
         ) : ('')}
           
        </div>
    )
}

export default Weathers
